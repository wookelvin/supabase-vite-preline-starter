<script setup lang="ts">

</script>

<template >
  <aside class="sidebar h-screen justify-start">
    <section class="sidebar-title py-10 px-5 flex items-center justify-center">
      <slot name="header" />
    </section>
    <section class="sidebar-content p-5 h-fit min-h-[20rem] overflow-visible">
      <slot />
    </section>
    <section class="sidebar-footer h-full justify-end bg-gray-2 pt-2">
      <slot name="footer" />
    </section>
  </aside>
</template>

<style scoped lang="postcss"></style>
