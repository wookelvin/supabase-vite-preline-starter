<script setup lang="ts">
defineProps<{
  title?: string;
}>()
</script>

<template>
  <section class="menu-section">
    <span class="menu-title" v-if="title">{{ title }}</span>
    <ul class="menu-items">
      <slot></slot>
    </ul>
  </section>
</template>

<style scoped lang="postcss"></style>
