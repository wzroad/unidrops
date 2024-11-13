<template>
  <header class="sticky top-0 z-30 md:px-10 px-5 py-2.5 g">
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <img src="~/assets/images/logo.png" class="w-26" alt="">
      </NuxtLink>
      <div class="hidden lg:flex gap-x-12 items-center pl-12">
        <NuxtLink to="/college" @click="popup = false" :class="[route.name.includes('college') ? 'bg-pruple1' : '']"
          class=" block px-6 py-2.5 rounded-2 text-black ">学院
        </NuxtLink>
        <NuxtLink to="/airdrop" @click="popup = false"
          :class="[route.path === '/airdrop' || route.name === 'airdropDetail' ? 'bg-pruple1' : '']"
          class="block px-6 py-2.5 rounded-2 text-black ">空投精选</NuxtLink>
        <NuxtLink to="/guide" @click="popup = false"
          :class="[route.path === '/guide' || route.name === 'guideDetail' ? 'bg-pruple1' : '']"
          class="block px-6 py-2.5 rounded-2 text-black ">赚钱指南</NuxtLink>
        <NuxtLink to="/vip" @click="popup = false" :class="[route.path === '/vip' ? 'bg-pruple1' : '']"
          class="block px-6 py-2.5 rounded-2 text-black ">开通VIP</NuxtLink>
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-x-3">
        <el-popover placement="bottom" :width="200" trigger="hover" v-if="userInfo.email">
          <template #reference>
            <Icon name="i-heroicons:user" class="w-5 h-5" />
          </template>
          <ul class="">
            <li class="mb-2.5 font-700">285***934@qq.com</li>
            <li class="flex mb-2.5 px-2.5 py-0.75 bg-gray3 rounded-2.5 w-fit font-400">
              <img class="w-6" src="~/assets/images/hj.svg" alt="vip">
              <span class="text-black">黄金VIP会员</span>
            </li>
            <li class="flex mb-2.5 px-2.5 py-0.75 bg-gray3 rounded-2.5 w-fit font-400">
              <img class="w-6" src="~/assets/images/zs.svg" alt="vip">
              <span class="text-black">钻石VIP会员</span>
            </li>
            <li class="cursor-pointer" @click="onLogout">退出</li>
          </ul>
        </el-popover>
        <TheButton v-else @click="loginPopup = true">登录 / 注册</TheButton>
        <Icon @click="popup = true" name="i-heroicons-solid:adjustments-horizontal"
          class=" w-5 h-5 text-pruple lg:hidden" />
      </div>
    </div>
  </header>

  <div v-show="popup">
    <div class="fixed z-31 top-0 left-0 right-0 bottom-0 bg-black bg-op-50" @click="popup = false"></div>
    <div class="fixed z-31 top-0 left-22 right-0 bottom-0 bg-white  pt-16">
      <div class="flex flex-col gap-y-2 px-10">
        <NuxtLink to="/college" @click="popup = false" :class="[route.name.includes('college') ? 'bg-pruple1' : '']"
          class="block px-6 py-2.5 rounded-2 text-black">学院
        </NuxtLink>
        <NuxtLink to="/airdrop" @click="popup = false"
          :class="[route.path === '/airdrop' || route.name === 'airdropDetail' ? 'bg-pruple1' : '']"
          class=" block px-6 py-2.5 rounded-2 text-black">空投精选</NuxtLink>
        <NuxtLink to="/guide" @click="popup = false"
          :class="[route.path === '/guide' || route.name === 'guideDetail' ? 'bg-pruple1' : '']"
          class=" block px-6 py-2.5 rounded-2 text-black">赚钱指南</NuxtLink>
        <NuxtLink to="/vip" @click="popup = false" :class="[route.path === '/vip' ? 'bg-pruple1' : '']"
          class=" block px-6 py-2.5 rounded-2 text-black">开通VIP</NuxtLink>
      </div>
      <Icon name="i-heroicons:x-mark" class=" w-6 h-6 absolute right-4 top-6 text-pruple " @click="popup = false" />
    </div>
  </div>
  <ElDialog v-model="loginPopup" close-icon width="368px">
    <div class="flex flex-col items-center gap-y-2">
      <Icon name="heroicons:envelope" class="w-8 h-8 text-gray-400" />
      <div class="text-xl font-700 text-slate-600 ">使用邮箱登录/注册</div>
    </div>
    <div class="pt-5 px-6 pb-5">
      <ElForm :model="form" :rules="rules" ref="formRef" label-position="top">
        <ElFormItem label="邮箱" prop="email">
          <ElInput v-model="form.email" placeholder="请输入邮箱" />
        </ElFormItem>
        <ElFormItem label="验证码" prop="code">
          <ElInput v-model="form.code" placeholder="请输入验证码" />
          <!-- <div class="absolute -top-10 right-0 text-blue text-3 cursor-pointer underline"> 发送验证码 </div> -->
        </ElFormItem>
      </ElForm>
      <div class="pt-5">
        <TheButton class="w-full" @click="login">登录 / 注册</TheButton>
      </div>
    </div>
  </ElDialog>
</template>
<script setup>
import { useUserStore } from '~/store/user.store';

const route = useRoute()
const popup = ref(false)
const loginPopup = ref(false)

const form = reactive({
  email: '',
  code: ''
})
const rules = {
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }],
  // code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}
const formRef = ref(null)
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const login = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      $fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(form)
      }).then(res => {
        userStore.setUserInfo(res.data)
      })
    }
  })
}
</script>
<style></style>