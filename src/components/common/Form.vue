<script setup lang="ts">
const form = ref<HTMLFormElement>();

const showValidations = ref(false);

const emit = defineEmits<{
  (e: 'submit'): void;
}>();

function onSubmit() {
  showValidations.value = false;
  if (form.value?.checkValidity()) {
    emit('submit');
  } else {
    showValidations.value = true;
  }
}

</script>

<template>
  <form ref="form" novalidate @submit.stop.prevent="onSubmit" class="form-group"
    :class="{ 'show-validations': showValidations }">
    <slot />
  </form>
</template>

<style scoped lang="postcss"></style>