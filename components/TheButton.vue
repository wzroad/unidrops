<template>
  <button class="bg-pruple rounded-2.5 px-4 py-2.5 text-white cursor-pointer text-sm" @click="onClick">
    <slot></slot>
  </button>
</template>
<script setup>
const emits = defineEmits(['click'])
const onClick = () => {
  emits('click')
}
</script>