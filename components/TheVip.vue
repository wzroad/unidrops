<template>
  <div class="flex flex-col gap-y-5 md:flex-row md:justify-center md:gap-x-6">
    <div class="text-center bg-white rounded-2 px-11 py-14 c-shadow md:w-97" v-for="item in list3" :key="item.id">
      <div class="flex items-center">
        <img class="w-11.5 mb-5" :src="item.image" alt="">
        <div class="text-3xl font-bold mb-5 ">{{ item.title }}</div>
      </div>
      <div class="text-sm text-left mb-5">{{ item.desc }}</div>
      <div class=" mb-7 text-xl font-600 text-left">{{ item.price }}</div>
      <NuxtLink to="/vip">
        <TheButton class="w-60 md:text-2xl" v-if="data.vip === item.id">您已开通</TheButton>
        <TheButton class="w-60 md:text-2xl" v-else @click="onPay(item.id)">立即开通</TheButton>
      </NuxtLink>
      <div class="flex flex-col gap-y-4 mt-10">
        <div class="flex items-center gap-x-2" v-for="child in item.list" :key="child.id">
          <Icon name="i-heroicons:check-circle-solid" :class="[child.has ? 'text-pruple' : 'text-gray']"
            class="min-w-6 h-6 "></Icon>
          <div class="flex-1 text-sm text-left">{{ child.desc }}</div>
        </div>
      </div>
    </div>
  </div>
  <DialogBuyVip ref="dialogBuyVip" />
  <DialogTheLogin ref="loginRef" />
</template>
<script setup>
import hj from '~/assets/images/hj.svg'
import zs from '~/assets/images/zs.svg'
defineProps({
  list: {
    type: Array,
    default() {
      return []
    }
  }
})
const list3 = ref([
  {
    id: 1, title: '黄金VIP会员', desc: '适合自学能力强，0基础学员。可免费查看大部分内容。', price: '0.05ETH/ 年', image: hj, list: [
      { id: 1, title: '空投', desc: '免费学习超过50节课程，包含《0基础入门撸空投》《空投猎人高级课》《链上安全实训》等。', has: true },
      { id: 2, title: '打新', desc: '有资格访问【空投精选】板块，获取最新的空投信息以及攻略。', has: true },
      { id: 3, title: '挖矿', desc: '有资格查看部分【赚钱指南】的内容，获取最新打新，挖矿，套利等赚钱机会。', has: true },
      { id: 3, title: '套利', desc: '无进入VIP社群的权限。', has: false },]
  },
  {
    id: 2, title: '钻石VIP会员', desc: '适合有一定链上基础，有社群交流需求的学员，可查看网站所有非技术类内容。', price: '0.1ETH/ 年', image: zs, list: [
      { id: 1, title: '空投', desc: '免费学习超过50节课程，包含《0基础入门撸空投》《空投猎人高级课》《链上安全实训》等。', has: true },
      { id: 2, title: '打新', desc: '有资格访问【空投精选】板块，获取最新的空投信息以及攻略。', has: true },
      { id: 3, title: '挖矿', desc: '有资格查看全部【赚钱指南】的内容，获取最新打新，挖矿，套利等赚钱机会。', has: true },
      { id: 3, title: '套利', desc: '可进入VIP社区，与顶级空投猎人一起Farm.', has: true },
      { id: 3, title: '套利', desc: '可享受社区会员专属福利：例如独家攻略，单独交互策略，风险提示，套利机会等等。', has: true },
      { id: 3, title: '套利', desc: '和创始人凯文一起交易流撸毛心得，赚钱思路等等。', has: true },
    ]
  },
])

const loginRef = ref()
const { data } = useAuth()
const dialogBuyVip = ref()
const onPay = (id) => {
  if (data.value) {
    dialogBuyVip.value.open(id)
  } else {
    loginRef.value.open()
  }
}
</script>