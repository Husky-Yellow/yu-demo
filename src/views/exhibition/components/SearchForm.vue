<template>
  <el-form :inline="true" @submit.prevent>
    <template v-for="field in fields" :key="field.prop">
      <el-form-item :label="field.label">
        <el-input
          v-if="field.type === 'input'"
          v-model="form[field.prop]"
          :placeholder="field.placeholder || ''"
          clearable
        />
        <el-select
          v-else-if="field.type === 'select'"
          v-model="form[field.prop]"
          :placeholder="field.placeholder || ''"
          clearable
        >
          <el-option
            v-for="opt in field.options || []"
            :key="opt.value"
            :label="opt.label"
            :value="opt.value"
          />
        </el-select>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="handleSearch">查询</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue'

interface FieldOption {
  label: string
  value: string | number
}
interface FieldConfig {
  type: 'input' | 'select'
  label: string
  prop: string
  placeholder?: string
  options?: FieldOption[]
}

const props = defineProps<{ fields: FieldConfig[] }>()
const emit = defineEmits(['search'])

const form = reactive<Record<string, any>>({})
props.fields.forEach(f => {
  form[f.prop] = ''
})

function handleSearch() {
  emit('search', { ...form })
}
function handleReset() {
  props.fields.forEach(f => {
    form[f.prop] = ''
  })
  emit('search', { ...form })
}
</script> 