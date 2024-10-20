<template>

  <ElCollapse class="!border-none">
    <ElCollapseItem class="mb-2 " v-for="item in list4" :key="item.id">
      <template #title>
        <div class="text-sm font-bold pl-4">{{ item.title }}</div>
      </template>
      <div class="text-xs text-left pl-4">{{ item.desc }}</div>
    </ElCollapseItem>
  </ElCollapse>
</template>
<script setup>

const list4 = ref([
  { id: 1, title: '什么样的人适合刷空投？', desc: '资金量小于10万美金的用户。' },
  { id: 2, title: '刷空投能有多大收益？', desc: '具体取决于您的投入的本金，正常情况下，收益率在50% - 300%之间。' },
  { id: 3, title: '刷空投需要对电脑基础有什么要求吗？', desc: '刷空投不需要太高深的电脑知识，会一些简单的操作就可以。' },
  { id: 4, title: '刷空投可以暴富吗？', desc: '不会暴富，但可以加快你的本金积累速度。注意是币本位啊，如果持有的代币再涨，相当于吃两份收益。' },
  { id: 5, title: '刷空投有什么门槛吗？', desc: '刷什么，怎么刷是个问题，凯文学院就是解决这个问题的。' },
])
</script>