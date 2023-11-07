<script setup lang="ts">
import { uniqueId } from 'lodash';


withDefaults(defineProps<{
  id?: string;
  title?: string;
}>(), {
  id: () => uniqueId('modal'),

});

</script>

<template >
  <dialog :id="id" class="modal">
    <div class="modal-box">
      <h3 v-if="title" class="font-bold text-lg">{{ title }}</h3>
      <slot />
    </div>
  </dialog>
</template>

<style scoped lang="postcss"></style>
