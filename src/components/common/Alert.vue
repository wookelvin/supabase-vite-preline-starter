<script setup lang="ts">
defineProps<{
  show?: boolean;
}>()
</script>

<template>
  <div v-if="show">
    <slot />
  </div>

  <style scoped lang="postcss">

  </style>
