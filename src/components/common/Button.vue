<script setup lang="ts">
import { Variant } from '@/models/Variant';
import { Icon } from '@iconify/vue';

const props = defineProps<{
  variant?: Variant;
  type?: 'submit' | 'button';
  to?: string;
  href?: string;
  iconBefore?: string;
  iconAfter?: string;
}>();

defineEmits<{
  (e: 'click', ev: Event): void;
}>()
const btnClasses = computed(() => {
  const c = ['btn'] as string[];
  if (props.variant) {
    c.push(`btn-${props.variant}`)
  }
  return c.join(' ');
})
</script>

<template >
  <!-- btn-primary btn-secondary btn-success btn-error btn-warning -->
  <a v-if="href" :href="href" :class="btnClasses" target="_blank">
    <Icon v-if="iconBefore" :icon="iconBefore" class="icon" />
    <slot />
    <Icon v-if="iconAfter" :icon="iconAfter" class="icon" />
  </a>
  <RouterLink v-else-if="to" :to="to" :class="btnClasses">
    <Icon v-if="iconBefore" :icon="iconBefore" class="icon" />
    <slot />
    <Icon v-if="iconAfter" :icon="iconAfter" class="icon" />
  </RouterLink>
  <button v-else :class="btnClasses" :type="type || 'button'" @click="e => $emit('click', e)">
    <Icon v-if="iconBefore" :icon="iconBefore" class="icon" />
    <slot />
    <Icon v-if="iconAfter" :icon="iconAfter" class="icon" />
  </button>
</template>
<style scoped lang="postcss">
.icon {
  @apply text-xl;
}

.btn {
  @apply flex gap-1 items-center;
}
</style>
