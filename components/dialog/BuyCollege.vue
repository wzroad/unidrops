<template>
  <ElDialog v-model="dialogVisible" width="30%">
    <div class="md:px-8 text-black font-400">
      <h3 class="mb-7 text-7.5 font-900 text-center">购买课程</h3>
      <div class="mb-3.75"> 请向此下面的地址转账 <strong class="text-pruple text-7.5">{{ info.amount }}</strong></div>
      <div class="mb-3.75 font-900 break-all ">{{ info.address }}<span class="underline cursor-pointer text-pruple"
          @click="onCopy">复制</span>
      </div>
      <div class="mb-3.75">请确保你发送的金额是<strong class="text-pruple">{{ info.amount }}</strong>, 否则将无法开通成功。 </div>
      <div class="mb-3.75">仅支持Ethereum网络</div>

      <div class="pb-4">
        <div class=" font-600 cursor-pointer" @click="toggleShow">你也可以<span class="text-pruple">点击</span>扫码支付</div>
        <img v-show="showGuide" class="max-w-full" src="~/assets/images/pay.jpg" alt="">
      </div>
      <button class="py-3.25 px-12.5 bg-pruple1 text-white rounded-1.5 cursor-pointer mb-8.75"><span
          class="font-600 text-6 mr-1.25 text-black">我已付款</span><!----></button>
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
  address: '0xb2B9fF2eBcc30a811633E96D5e419a6B49d97A02',
  amount: '19.01 USDT'
})
const open = (id) => {
  if (id === 1) {
    info.value.amount = '19.01 USDT'
  } else {
    info.value.amount = '29.01 USDT'

  }
  dialogVisible.value = true
}
const close = () => {
  dialogVisible.value = false
}

const onCopy = () => {
  try {
    window.navigator.clipboard.writeText(info.value.address)
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