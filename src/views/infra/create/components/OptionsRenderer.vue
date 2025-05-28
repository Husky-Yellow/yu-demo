<template>
  <component 
    :is="type === 'select' ? 'el-option' : `el-${type}`"
    v-for="option in options"
    :key="option.value"
    :label="type === 'select' ? option.label : option.value"
    :value="option.value"
    :disabled="option.disabled">
    {{ type !== 'select' ? option.label : '' }}
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

interface Option {
  value: string | number | boolean
  label: string
  disabled?: boolean
}

defineProps({
  type: {
    type: String as PropType<'select' | 'radio' | 'checkbox'>,
    required: true
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
    validator: (value: Option[]) => value.every(opt => 'value' in opt && 'label' in opt)
  }
})

defineOptions({ name: 'InfraCreateOptionsRenderer' })
</script>