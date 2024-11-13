<template>
  <div>
    <input name="" id="" v-model="list"></input>
    <button @click="onAdd">添加</button>
  </div>
  <div class="ct md:w-343 md:mxa">
    <el-table :data="tableList" style="width: 100%">
      <el-table-column prop="id" align="center" label="ID" />
      <el-table-column prop="name" align="center" label="名称" />
      <el-table-column align="center" label="攻略">
        <template #default="{ row }">
          <ElLink type="primary" @click="onClick(row.id)">更新详情</ElLink>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <ElDialog v-model="dialog" title="更新" close-icon width="368px">
    <el-form :model="form">
      <el-form-item label="简介">
        <el-input v-model="form.instruction" autocomplete="off" />
      </el-form-item>
      <el-form-item label="内容">
        <ElInput type="textarea" v-model="form.description" />
      </el-form-item>
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
const list = ref('')
const tableList = ref([])
const { data } = await useAsyncData('manageairdrop', () => $fetch('/api/manage/airdrop/list'))

tableList.value = data.value.data.list

const dialog = ref(false)
const onClick = (id) => {
  form.value.id = id
  dialog.value = true
}
const form = ref({
  id: 0,
  instruction: '',
  description: ''
})
const onSubmit = async () => {
  await $fetch(`/api/manage/airdrop/update`, {
    method: 'POST',
    body: JSON.stringify(form.value)
  })
  dialog.value = false
}
const onAdd = () => {
  const rlist = JSON.parse(list.value)

  $fetch('/api/manage/airdrop/add', {
    method: 'POST',
    body: JSON.stringify({
      list: rlist.map((e) => {
        delete e.id
        delete e.created_at
        delete e.updated_at
        return e
      })
    })
  })
}
</script>