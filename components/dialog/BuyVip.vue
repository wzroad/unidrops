<template>
  <ElDialog v-model="dialogVisible" width="30%">
    <div class="md:px-8 text-black font-400">
      <h3 class="mb-7 text-7.5 font-900 text-center">完成付款</h3>
      <div class="mb-3.75"> 请向此下面的地址转账 <strong class="text-pruple text-7.5">{{ info.amount }}</strong></div>
      <div class="mb-3.75 font-900 break-all">{{ info.address }} <span class="underline cursor-pointer"
          @click="onCopy">复制</span>
      </div>
      <div class="mb-3.75">请确保你发送的金额是<strong class="text-pruple">{{ info.amount }}</strong>, 否则将无法开通成功。 </div>
      <div class="mb-3.75">支持BSC/Ethereum/ Arbitrum/ Optimism 网络。订单有效期60分钟。</div>
      <div class="mb-[35px] text-pruple font-600"> 如果你通过币安提现，请切换到账数量。 <span class="underline cursor-pointer"
          @click="toggleShow">{{ showGuide ? '关闭引导' : '查看引导' }}</span>
      </div>
      <img v-show="showGuide" src="~/assets/images/binance.png" class="max-w-full" alt="">
      <button class="py-3.25 px-12.5 bg-pruple1 text-white rounded-1.5 cursor-pointer mb-8.75"><span
          class="font-600 text-6 mr-1.25 text-black">我已付款</span>
      </button>
      <div class="mb-7.5"> 任何疑问，请联系： <a class="underline hover:text-pruple" href="#" target="_blank"
          rel="noopener noreferrer"> 我们 </a></div>
    </div>
  </ElDialog>
</template>
<script setup>
const dialogVisible = ref(false)
const showGuide = ref(false)

const toggleShow = () => {
  showGuide.value = !showGuide.value
}
const info = ref({
  address: '0x54545as1d5asd54a5s1d',
  amount: '0.1001 ETH'
})
const open = (vip) => {
  if (vip === 1) {
    info.value.amount = '0.05 ETH'
  } else {
    info.value.amount = '0.1001 ETH'
  }
  dialogVisible.value = true
}
const close = () => {
  dialogVisible.value = false
}

const onCopy = () => {
  try {
    window.navigator.clipboard.writeText('0x54545as1d5asd54a5s1d')
    ElMessage.success('复制成功')
  } catch (error) {
    ElMessage.error('复制失败，请手动复制')
  }
}

defineExpose({
  open,
  close
})
</script>