<template>
  <div class="py-15 text-center">
    <h1 class="text-6 font-900 mb-15">潜在空投总览</h1>

    <div class="ct md:w-343 md:mxa">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" align="center" label="名称" />
        <el-table-column prop="name" align="center" label="评分" sortable />
        <el-table-column prop="address" align="center" label="空投几率" sortable />
        <el-table-column prop="address" align="center" label="状态" sortable />
        <el-table-column prop="address" align="center" label="最小投入($)" sortable />
        <el-table-column prop="address" align="center" label="预期收益率" sortable />
        <el-table-column prop="address" align="center" label="分类" />
        <el-table-column prop="address" align="center" label="融资($)" sortable />
        <el-table-column prop="address" align="center" label="优先级" sortable />
        <el-table-column prop="address" align="center" label="攻略">
          <template #default="{ row }">
            <el-button type="primary" @click="showJoinMember">加入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <JoinMember />
  </div>
</template>
<script setup>
const tableData = ref([])
const showJoinMember = () => {
  console.log('showJoinMember')
}
</script>
<style>
.ct .el-table thead {
  --el-table-header-text-color: #000;

}
</style>