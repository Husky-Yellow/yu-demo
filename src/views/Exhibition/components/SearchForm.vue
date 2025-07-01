<template>
    <el-form :model="formModel" label-width="0px" class="query-form">
      <el-row :gutter="16">
        <!-- Always visible fields -->
        <el-col v-for="field in fields" :key="field.key" :span="8">
          <el-form-item>
            <component
              :is="getComponent(field.queryType)"
              v-model="formModel[field.key]"
              :placeholder="getPlaceholder(field)"
              v-bind="getComponentProps(field)"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>

        <!-- Expandable fields -->
        <!-- <template v-if="isExpanded">
          <el-col v-for="field in hiddenFields" :key="field.key" :span="8">
            <el-form-item>
              <component
                :is="getComponent(field.queryType)"
                v-model="formModel[field.key]"
                :placeholder="getPlaceholder(field)"
                v-bind="getComponentProps(field)"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </template> -->

        <!-- Action Buttons -->
        <!-- <el-col :span="8" class="action-buttons">
          <el-button type="primary">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
          <el-button v-if="queryFields.length > 2"  @click="toggleExpand">
            {{ isExpanded ? '收起' : '更多搜索' }}
            <el-icon>
              <ArrowUp v-if="isExpanded" />
              <ArrowDown v-else />
            </el-icon>
          </el-button>
        </el-col> -->
      </el-row>
    </el-form>
</template>

<script setup lang="ts">
import { FieldType } from '@/config/constants/enums/field'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElDatePicker,
  ElButton,
  ElRow,
  ElCol,
  ElIcon
} from 'element-plus'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

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

function getComponent(queryType: FieldType) {
  console.log('getComponent queryType', queryType)
  switch (queryType) {
    case FieldType.TEXT:
    case FieldType.NUMBER:
      return markRaw(ElInput)
    case FieldType.RADIO:
    case FieldType.CHECKBOX:
    case FieldType.REGION:
    case FieldType.TAG:
      return markRaw(ElSelect)
    case FieldType.DATE:
    case FieldType.DATE_RANGE:
      return markRaw(ElDatePicker)
    default:
      return markRaw(ElInput)
  }
}

function getPlaceholder(field: any) {
  if (field.queryType === 'search' && field.subFields?.length) {
    const subLabels = field.subFields.map((f: any) => f.name).join('/')
    return `请输入${field.name}/${subLabels}`
  }
  return field.placeholder || `请输入${field.name}`
}
</script>