<script setup lang="ts">

</script>

<template>
  <div class="h-screen flex items-center justify-center p-5">
    <Card>
      <RouterView />
    </Card>
  </div>
</template>

<style scoped lang="postcss">
:deep() {
  h1 {
    @apply text-3xl mb-3;
  }
}
</style>
