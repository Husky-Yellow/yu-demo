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
import { FormDesignerOption, FormDesignerComponentType } from "@/types/formDesigner";

defineProps({
  type: {
    type: String as PropType<FormDesignerComponentType>,
    required: true
  },
  options: {
    type: Array as PropType<FormDesignerOption[]>,
    required: true,
    validator: (value: FormDesignerOption[]) => value.every(opt => 'value' in opt && 'label' in opt)
  }
})

defineOptions({ name: 'InfraCreateOptionsRenderer' })
</script>