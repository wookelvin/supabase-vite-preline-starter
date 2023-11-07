<script setup lang="ts">

withDefaults(defineProps<{
  headerComponent?: string;
  title?: string;
}>(),
  {
    headerComponent: 'h2',
  });

</script>

<template >
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <component v-if="title" :is="headerComponent" class="card-title">
        <slot name="header">{{ title }}</slot>
      </component>
      <slot />
      <div class="card-actions" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
