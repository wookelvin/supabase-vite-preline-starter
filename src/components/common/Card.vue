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
  <div class="card">
    <div class="card-body">
      <component v-if="title" :is="headerComponent" class="card-header">
        <slot name="header">{{ title }}</slot>
      </component>
      <slot />
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
