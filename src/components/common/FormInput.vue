<script lang="ts" setup>
import { SelectOption } from '@/models/SelectOption';

const props = defineProps<{
  label?: string;
  type?: string;
  modelValue?: string;
  placeholder?: string;
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
  <div class="form-control">
    <label class="label" v-if="label"><span class="label-text">{{ label }}</span></label>
    <div>
      <select v-if="type === 'select'" class="select w-full">
        <option v-for="k of options" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>
      <input v-else ref="input" :placeholder="placeholder" v-model="value" :required="required" :type="type"
        class="input w-full" @input="onInput">
    </div>

    <label v-if="error" class="label show-when-submitted">
      <span class="label-text-alt text-error">
        {{ error }}
      </span>
    </label>
    <label v-if="$slots.footer" class="form-label">
      <span class="form-label-alt">
        <slot name="footer" />
      </span>
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

.select,
.input {
  @apply bg-base-200;
}
</style>
