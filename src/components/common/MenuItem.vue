<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  icon?: string;
}>()
</script>

<template>
  <li class="menu-item text-xl">
    <Icon v-if="icon" :icon="icon" class="" />
    <span>
      <slot />
    </span>
  </li>
</template>

<style scoped lang="postcss"></style>
