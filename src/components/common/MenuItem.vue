<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  icon?: string;
  to: string;
}>()
</script>

<template>
  <router-link :to="to" class="menu-item text-lg" active-class="menu-active">
    <Icon v-if="icon" :icon="icon" class="" />
    <span>
      <slot />
    </span>
  </router-link>
</template>

<style scoped lang="postcss"></style>
