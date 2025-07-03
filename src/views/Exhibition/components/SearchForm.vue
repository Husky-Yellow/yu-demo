<template>
  <!-- 超出两个有更多搜索 -->
    <el-form :model="form" label-width="0px">
      <el-row :gutter="16">
        <el-col v-for="field in fields" :key="field.id || field.fieldCodes" :span="8">
          <el-form-item :prop="field.fieldCodes || field.id || field.hint">
            <component
              :is="getComponent(field.queryType)"
              v-model="form[field.fieldCodes || field.id || field.hint]"
              :placeholder="field.hint"
              v-bind="getComponentProps(field)"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24" style="text-align:right; margin-top: 12px;">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
          <el-button v-if="fields.length > 2" @click="handleReset">更多搜索</el-button>
          <el-button v-for="item in operateConfigList" :key="item.operateType" @click="handleReset">{{ item.operateName }}</el-button>
        </el-col>
      </el-row>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { ElInput, ElSelect, ElDatePicker, ElButton } from 'element-plus'

interface SearchField {
  id?: string
  manageId: string
  field?: any[]
  fieldCodes?: string
  fieldIds?: string
  queryType: number // 0-搜索 1-单选 2-多选 3-日期区间 4-日期
  defaultValue: any
  hint: string
  sort: number
  options?: { label: string; value: string | number }[]
}

const props = defineProps<{ fields: SearchField[], operateConfigList: any[] }>()
const form = reactive<Record<string, any>>({})
const emit = defineEmits(['search'])

function getKey(field: SearchField) {
  return field.fieldCodes || field.id || field.hint
}

function initForm() {
  props.fields.forEach(f => {
    form[getKey(f)] = f.defaultValue ?? (f.queryType === 2 ? [] : '')
  })
}

initForm()
watch(() => props.fields, initForm, { deep: true })

function getComponent(queryType: number) {
  switch (queryType) {
    case 0: return ElInput
    case 1: return ElSelect
    case 2: return ElSelect
    case 3: return ElDatePicker
    case 4: return ElDatePicker
    default: return ElInput
  }
}

function getComponentProps(field: SearchField) {
  if (field.queryType === 1) {
    return { options: field.options }
  }
  if (field.queryType === 2) {
    return { options: field.options, multiple: true }
  }
  if (field.queryType === 3) {
    return { type: 'daterange', rangeSeparator: '至', startPlaceholder: '开始日期', endPlaceholder: '结束日期' }
  }
  if (field.queryType === 4) {
    return { type: 'date' }
  }
  return {}
}

function handleSearch() {
  // 实际项目中可 emit('search', { ...form })
  console.log('搜索参数', { ...form })
  emit('search', { ...form })
}

function handleReset() {
  props.fields.forEach(f => {
    form[getKey(f)] = f.defaultValue ?? (f.queryType === 2 ? [] : '')
  })
  // 实际项目中可 emit('search', { ...form })
  console.log('重置参数', { ...form })
}
</script>