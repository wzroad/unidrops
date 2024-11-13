<template>
  <div class="py-15 px-5 md:px-0">
    <h1 class="text-6 font-900 mb-15 text-center">精选实战干货</h1>
    <NuxtLink :to="`/guideDetail?id=${item.id}`"
      class="flex justify-between md:w-225 mx-auto md:shadow md:bg-white md:p-5 rounded mb-8 cursor-pointer text-black"
      v-for="item in list" :key="item.id">
      <div class="md:mr-15 mr-5">
        <div class="flex items-center mb-2.5">
          <h2 class="md:text-6 text-base font-900 md:mr-5 mr-1">{{ item.title }}</h2>
          <div v-if="item.role === 1"
            class="flex items-center md:py-1.5 py-0.75 md:px-2.5 px-1 rounded-0.75 text-white bg-pruple bg-opacity-80 md:text-3.25 text-xs">
            <img class="md:w-6 w-sm" src="~/assets/images/hj.svg" alt="vip"> 黄金VIP
          </div>
          <div v-if="item.role === 2"
            class="flex items-center md:py-1.5 py-0.75 md:px-2.5 px-1 rounded-0.75 text-white bg-pruple bg-opacity-80 md:text-3.25 text-xs">
            <img class="md:w-6 w-sm" src="~/assets/images/zs.svg" alt="vip"> 钻石VIP
          </div>
        </div>
        <p class="text-sm md:mb-7.5 mb-2.5 font-400">{{ item.description }}</p><span
          class="font-400 text-gray-500 text-xs">发布时间：{{ formatDate(item.published) }}</span>
      </div><img class="md:w-30 md:h-30 w-41 h-41 rounded-1.5"
        :src="`https://api.unidrops.io/storage/${item.thumbnail}`" alt="Unidrops 挖矿精选09.16">
    </NuxtLink>
  </div>
</template>
<script setup>
const list = ref([])
const { data } = await useFetch('/api/guide/list')
list.value = data.value.data.list
</script>