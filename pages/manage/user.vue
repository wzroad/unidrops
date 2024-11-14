<template>
  <div class="ct md:w-343 md:mxa">
    <el-table :data="tableList" style="width: 100%">
      <el-table-column prop="id" align="center" label="ID" />
      <el-table-column prop="email" align="center" label="邮箱" />
      <el-table-column align="center" label="vip等级">
        <template #default="{ row }">
          {{ row.vipLevel === 1 ? '黄金VIP' : row.vipLevel === 2 ? '钻石VIP' : '普通会员' }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="vip到期时间">
        <template #default="{ row }">
          {{ formatDate(row.vipExpiredAt) }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否管理员">
        <template #default="{ row }">
          {{ row.isAdmin ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <ElLink type="primary" @click="onClick(row.id)">开通VIP</ElLink>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <ElDialog v-model="dialog" title="" close-icon width="368px">
    <el-form :model="form">
      <el-form-item label="VIP等级">
        <ElSelect v-model="form.vipLevel">
          <ElOption label="黄金VIP" :value="1" />
          <ElOption label="钻石VIP" :value="2" />
        </ElSelect>
      </el-form-item>
      <ElFormItem label="到期时间">
        <ElDatePicker v-model="form.vipExpiredAt" type="date" />
      </ElFormItem>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialog = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">
          保存
        </el-button>
      </div>
    </template>
  </ElDialog>
</template>
<script setup>
const auth = useAuth()
const { replace } = useRouter()
if (auth.status.value === 'unauthenticated' || !auth.data.value || !auth.data.value.isAdmin) {
  replace('/')
}

const tableList = ref([])
const fetchData = await useFetch('/api/manage/user/list')
tableList.value = fetchData.data.value.data.list


const dialog = ref(false)
const onClick = (id) => {
  form.value.id = id
  dialog.value = true
}
const form = ref({
  id: 0,
  vipExpiredAt: '',
  vipLevel: 1
})
const onSubmit = async () => {
  await $fetch(`/api/manage/user/update`, {
    method: 'POST',
    body: JSON.stringify(form.value)
  })
  fetchData.refresh()
  tableList.value = fetchData.data.value.data.list
  dialog.value = false
}
</script>