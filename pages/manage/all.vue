<template>
  <div>
    <NuxtLink to="/manage/airdrop">
      <ElButton type="primary">空投精选</ElButton>
    </NuxtLink>
    <NuxtLink to="/manage/guide">
      <ElButton type="primary">指南</ElButton>
    </NuxtLink>
    <NuxtLink to="/manage/college">
      <ElButton type="primary">教程</ElButton>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const auth = useAuth()
const { replace } = useRouter()
if (auth.status.value === 'unauthenticated' || !auth.data.value || !auth.data.value.isAdmin) {
  replace('/')
}

</script>