<script lang="ts" setup>
import { SelectOption } from '@/models/SelectOption';

const props = defineProps<{
  label?: string;
  type?: string;
  modelValue?: string;
  required?: boolean;
  options?: SelectOption[];
}>()

const input = ref<HTMLInputElement>()
const emit = defineEmits<{ (e: 'update:modelValue', val: string): void; }>()

const value = computed({
  get: () => props.modelValue || '',
  set: val => emit('update:modelValue', val)
})

const error = ref('')

onMounted(onInput)
function onInput() {
  error.value = input.value?.validationMessage || ''
}

</script>

<template>
  <div class="form-field">
    <label class="form-label">{{ label }}</label>
    <div class="form-control">
      <select v-if="type === 'select'" class="select w-full">
        <option v-for="k of options" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>
      <input v-else ref="input" v-model="value" :required="required" :type="type" class="input w-full" @input="onInput">
    </div>

    <label v-if="error" class="form-label show-when-submitted">
      <div class="form-label-alt text-error">
        {{ error }}
      </div>
    </label>
    <label v-if="$slots.footer" class="form-label">
      <div clas="form-label-alt">
        <slot name="footer" />
      </div>
    </label>
  </div>
</template>

<style scoped lang="postcss">
.show-when-submitted {
  display: none;
}

.show-validations .show-when-submitted {
  display: unset;
}
</style>
