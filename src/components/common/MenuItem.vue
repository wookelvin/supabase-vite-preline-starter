<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  icon?: string;
  to?: string;
}>()
</script>

<template>
  <li>
    <router-link v-if="to" :to="to" class="menu-item" active-class="menu-active">
      <Icon v-if="icon" :icon="icon" class="" />
      <span>
        <slot />
      </span>
    </router-link>
    <button v-else type="button" class="menu-item">
      <Icon v-if="icon" :icon="icon" class="" />
      <span>
        <slot />
      </span>
    </button>
  </li>
</template>

<style scoped lang="postcss"></style>
