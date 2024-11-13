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
            <Icon name="i-heroicons:user" class="w-6 h-6 text-#7310FF cursor-pointer" />
          </template>
          <ul class="">
            <li class="mb-2.5 font-700">{{ userInfo.email }}</li>
            <li class="flex mb-2.5 px-2.5 py-0.75 bg-gray3 rounded-2.5 w-fit font-400" v-if="!userInfo.vip">
              <span class="text-black">普通会员</span>
            </li>
            <li class="flex mb-2.5 px-2.5 py-0.75 bg-gray3 rounded-2.5 w-fit font-400" v-if="userInfo.vip === 1">
              <img class="w-6 h-6" src="~/assets/images/hj.svg" alt="vip">
              <span class="text-black">黄金VIP会员</span>
            </li>
            <li class="flex mb-2.5 px-2.5 py-0.75 bg-gray3 rounded-2.5 w-fit font-400" v-if="userInfo.vip === 2">
              <img class="w-6 h-6" src="~/assets/images/zs.svg" alt="vip">
              <span class="text-black">钻石VIP会员</span>
            </li>
            <li class="cursor-pointer" @click="onLogout">退出</li>
          </ul>
        </el-popover>
        <TheButton v-else @click="$refs.loginRef.open()">登录 / 注册</TheButton>
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
  <DialogTheLogin ref="loginRef" />
</template>
<script setup>
import { useUserStore } from '~/store/user.store';
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const loginRef = ref(null)

const route = useRoute()
const popup = ref(false)

</script>
<style></style>