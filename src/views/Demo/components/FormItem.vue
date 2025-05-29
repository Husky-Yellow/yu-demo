<template>
  <component
    :is="componentMap[type]"
    v-model="modelValue"
    v-bind="$attrs"
  >
    <template v-if="['select', 'checkbox', 'radio'].includes(type)">
      <component
        :is="optionMap[type]"
        v-for="option in options"
        :key="option.value"
        :label="option.value"
      >
        {{ option.label }}
      </component>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: 'input' | 'number' | 'select' | 'checkbox' | 'radio'
  modelValue: any
  options?: { label: string; value: any }[]
}>()

const emit = defineEmits(['update:modelValue'])

// 组件映射表
const componentMap = {
  input: 'el-input',
  number: 'el-input-number',
  select: 'el-select',
  checkbox: 'el-checkbox-group',
  radio: 'el-radio-group'
}

// 选项组件映射表
const optionMap = {
  select: 'el-option',
  checkbox: 'el-checkbox',
  radio: 'el-radio'
}

// 双向绑定处理
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>