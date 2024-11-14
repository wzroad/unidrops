<template>
  <div class="py-15 text-center">
    <h1 class="text-6 font-900 mb-15">潜在空投总览</h1>

    <div class="ct md:w-343 md:mxa">
      <ElTable :data="list" style="width: 100%">
        <ElTableColumn prop="name" align="center" label="名称">
          <template #default="{ row }">
            <img class="w-6 h-6 object-cover rounded-1" :src="`https://api.unidrops.io/storage/${row.thumbnail}`"
              alt="">
          </template>
        </ElTableColumn>
        <ElTableColumn prop="name" align="center" label="名称" />
        <ElTableColumn prop="score" align="center" label="评分" sortable />
        <ElTableColumn prop="emptyRate" align="center" label="空投几率" sortable>
          <template #default="{ row }">
            {{ row.emptyRate }}%
          </template>
        </ElTableColumn>
        <ElTableColumn prop="status" align="center" label="状态" sortable>
          <template #default="{ row }">
            {{ row.status === 0 ? '未开始' : row.status === 1 ? '进行中' : '已空投' }}
          </template>
        </ElTableColumn>
        <ElTableColumn prop="minInvest" align="center" label="最小投入($)" sortable />
        <ElTableColumn prop="expectedIncome" align="center" label="预期收益率" sortable>
          <template #default="{ row }">
            {{ row.expectedIncome }}%
          </template>
        </ElTableColumn>
        <ElTableColumn prop="categoryName" align="center" label="分类" />
        <ElTableColumn prop="funding" align="center" label="融资($)" sortable>
          <template #default="{ row }">
            {{ formatCurrency(row.funding) }}
          </template>
        </ElTableColumn>
        <ElTableColumn prop="level" align="center" label="优先级" sortable>
          <template #default="{ row }">
            {{ row.level === 0 ? '高' : row.level === 1 ? '中' : '低' }}
          </template>
        </ElTableColumn>
        <ElTableColumn align="center" label="攻略">
          <template #default="{ row }">
            <NuxtLink :to="`/airdropDetail?id=${row.id}`">
              <ElLink type="primary">查看</ElLink>
            </NuxtLink>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <JoinMember v-if="!auth.data.value || auth.data.value.vip === 0" />
  </div>
</template>
<script setup>
const { data } = await useAsyncData('airdrop', () => $fetch('/api/airdrop/list'))
const auth = useAuth()


const list = ref([])
list.value = data.value ? data.value.data.list : []

</script>
<style>
.ct .el-table thead {
  --el-table-header-text-color: #000;

}
</style>