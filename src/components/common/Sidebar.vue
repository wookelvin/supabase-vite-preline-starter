<script setup lang="ts">

</script>

<template >
  <aside class="sidebar ">
    <section class="sidebar-title">
      <slot name="header" />
    </section>
    <section class="sidebar-content">
      <slot />
    </section>
    <section class="sidebar-footer">
      <slot name="footer" />
    </section>
  </aside>
</template>

<style scoped lang="postcss">
.sidebar {
  @apply flex flex-col bg-base-200 h-screen max-h-screen;
}

.sidebar-title {
  @apply py-10 px-2 flex items-center justify-center shrink-0;
}

.sidebar-content {
  @apply p-2 overflow-visible flex-1;
}

.sidebar-footer {
  @apply justify-end pt-2 shrink-0;
}
</style>
