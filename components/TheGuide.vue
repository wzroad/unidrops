<template>
  <div>

    <div class="hidden bg-#c477d7 bg-#7310ff bg-#0cc0af text-#f2ef7f"></div>
    <div class="flex flex-col gap-y-5 md:flex-row md:justify-between gap-x-6">
      <div class=" px-8 py-13 rounded-2 flex flex-1 items-center" :class="[item.bg]" v-for="item in list1"
        :key="item.id">
        <div class="flex-1">
          <div class="text-3xl font-bold mb-2.5" :class="[item.color]">{{ item.title }}</div>
          <div class="text-sm mb-5 text-white">{{ item.desc }}</div>
        </div>
        <img :src="item.image" alt="">
      </div>
    </div>
    <div class="hidden md:flex  justify-between items-center my-5">
      <h2 class="text-3xl w-96 text-center font-600">0基础入门撸空投</h2>
      <h2 class="text-3xl w-96 text-center font-600">空投猎人高级课</h2>
      <h2 class="text-3xl w-96 text-center font-600">链上安全实训</h2>
    </div>
    <div class="md:block hidden mt-6" v-if="showBottom">
      <div class="bg-white h-0.75"></div>
      <div class="w-300 mx-auto flex justify-between items-center">
        <div class="w-96 flex justify-center">
          <div class="w-9 h-9 bg-green rounded-full"></div>
        </div>
        <div class="w-96 flex justify-center">
          <div class="w-9 h-9 bg-green rounded-full"></div>
        </div>
        <div class="w-96 flex justify-center">
          <div class="w-9 h-9 bg-green rounded-full"></div>
        </div>
      </div>
      <div class="bg-white h-0.75"></div>
    </div>
  </div>
</template>
<script setup>
import kt from '~/assets/images/kt.svg'
import bb from '~/assets/images/bb.svg'
import aq from '~/assets/images/aq.svg'

defineProps({
  showBottom: Boolean,
})

const list1 = ref([
  { id: 1, title: '0基础入门撸空投', desc: '为新手设计的手把手空投课程', image: kt, bg: 'bg-#c477d7 ', color: 'text-white' },
  { id: 2, title: '空投猎人高级课', desc: '批量化、防女巫学这门课就够了', image: bb, bg: 'bg-#7310ff ', color: 'text-#f2ef7f' },
  { id: 3, title: '链上安全实训', desc: '4年链上实战经验，毫无保留', image: aq, bg: 'bg-#0cc0af ', color: 'text-#f2ef7f' },
])
</script>