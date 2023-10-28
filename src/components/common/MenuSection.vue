<script setup lang="ts">
defineProps<{
  title?: string;
}>()
</script>

<template>
  <section class="menu-section">
    <span class="menu-title" v-if="title">{{ title }}</span>
    <div class="menu-items">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="postcss"></style>
