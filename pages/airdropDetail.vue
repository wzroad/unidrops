<template>
  <div class="md:py-15 md:px-15 py-7.5 px-5 md:w-300 mx-auto bg-white my-12.5 rounded-2.5 shadow">
    <div class="bo pb-7.5 mb-12.5">
      <div class="flex justify-between items-start md:mb-7.5 mb-2.5">
        <div class="flex items-center"><img class="md:w-20 md:h-20 w-12 h-12 rounded-1.5 shadow"
            src="https://api.unidrops.io/storage/images/0af9d290d21ef5eb4f2d010764f282e0.avif" alt="Usual">
          <p class="md:ml-7.5 ml-2.5">{{ airdrop.name }}</p>
        </div>
        <ul class="flex justify-between md:space-x-6 space-x-3">
          <li class="flex items-center flex-col">
            <p class="mb-2.5">评分</p>
            <p class="text-green-500 md:text-6.5 text-4.5">{{ airdrop.emptyRate }}</p>
          </li>
          <li class="flex items-center flex-col">
            <p class="mb-1.25">优先级</p>
            <p class="text-green-500 md:text-6.5 text-4.5">{{ airdrop.level === 0 ? '高' : airdrop.level === 1 ? '中' :
              '低' }}</p>
          </li>
          <li class="flex items-center flex-col">
            <p class="mb-2.5">更新时间</p>
            <p class="text-green-500 md:text-6.5 text-4.5">{{ formatDate(airdrop.publishAt) }}</p>
          </li>
        </ul>
      </div>
      <ul class="flex justify-between md:w-137.5">
        <li class="flex items-center flex-col">
          <p class="mb-2.5">融资($)</p><span>
            {{ formatCurrency(airdrop.funding) }}</span>
        </li>
        <li class="flex items-center flex-col">
          <p class="mb-2.5">最小投入($)</p><span>{{ airdrop.minInvest }}</span>
        </li>
        <li class="flex items-center flex-col">
          <p class="mb-2.5">预期收益率</p><span>{{ airdrop.expectedIncome }}%</span>
        </li>
        <li class="flex items-center flex-col">
          <p class="mb-2.5">空投几率</p><span>{{ airdrop.emptyRate }}%</span>
        </li>
      </ul>
    </div>
    <div class="mb-5">
      <h2 class="text-8 font-900 mb-5">简介</h2>
      <div class="text-left font-400">{{ airdrop.instruction || '' }}</div>
    </div>
    <div class="rich-text text-left font-400">
      <MDC :value="airdrop.description || ''" tag="article" />
    </div>
  </div>
</template>
<script setup>
const { query } = useRoute()
const airdrop = ref({})
const { data } = await useFetch('/api/airdrop/detail', { query: { id: query.id } })
airdrop.value = data.value.data
</script>
<style>
.bo {
  border-bottom: 1px solid #d1d5db;
}
</style>