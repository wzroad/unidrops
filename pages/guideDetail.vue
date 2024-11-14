<template>
  <div class="md:w-225 mx-auto bg-white md:px-16 md:py-10 px-5 py-8 rounded-2.5 shadow my-12.5">
    <div class="text-center mb-5">
      <h1 class="text-10 font-900">场外套利详解，年化3000%的交易策略</h1>
      <div class="font-400 text-gray-500 text-xs py-4.25"> 发布时间&nbsp;2024-06-29</div>
      <p class="mb-7.5 font-400 bg-gray1 rounded-1 px-3.5 py-4.5 text-left">凯文参与3个项目全复盘</p>
    </div>
    <main class="rich-text text-left font-400">
      <MDC :value="post.content" tag="article" />
    </main>
    <JoinMember v-if="!auth.data.value || !auth.data.value.vip" />
  </div>
</template>
<script setup>

const auth = useAuth()

const post = ref({})
const { query } = useRoute()
const { data } = await useFetch(`/api/guide/detail?id=${query.id}`)
post.value = data.value.data
</script>
<style></style>