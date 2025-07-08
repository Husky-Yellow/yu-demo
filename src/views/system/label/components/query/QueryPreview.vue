<template>
  <!-- 查询预览 -->
  <div class="query-preview">
    <el-form :model="formModel" label-width="0px" class="query-form">
      <el-row :gutter="16">
        <!-- Always visible fields -->
        <el-col v-for="field in visibleFields" :key="field.key" :span="8">
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
        <template v-if="isExpanded">
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
        </template>

        <!-- Action Buttons -->
        <el-col :span="8" class="action-buttons">
          <el-button type="primary">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
          <el-button v-if="queryFields.length > 2"  @click="toggleExpand">
            {{ isExpanded ? '收起' : '更多搜索' }}
            <el-icon>
              <ArrowUp v-if="isExpanded" />
              <ArrowDown v-else />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
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

const props = defineProps<{
  queryFields: any[]
}>()

const isExpanded = ref(false)
const formModel = reactive<{ [key: string]: any }>({})

// Initialize form model
props.queryFields.forEach((field) => {
  formModel[field.key] = field.defaultValue
})

const visibleFields = computed(() => props.queryFields.slice(0, 2))
const hiddenFields = computed(() => props.queryFields.slice(2))

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function getPlaceholder(field: any) {
  if (field.queryType === 'search' && field.subFields?.length) {
    const subLabels = field.subFields.map((f: any) => f.name).join('/')
    return `请输入${field.name}/${subLabels}`
  }
  return field.placeholder || `请输入${field.name}`
}

function getComponent(queryType: FieldType) {
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

function getComponentProps(field: any) {
  const props: { [key: string]: any } = {}
  if (field.queryType === 'daterange') {
    props.type = 'daterange'
    props.rangeSeparator = '至'
    props.startPlaceholder = '开始日期'
    props.endPlaceholder = '结束日期'
  }
  // if (field.queryType === 'radio' || field.queryType === 'checkbox') {
  //   props.options = props.enumOptions(field.key)
  // }
  return props
}

function handleReset() {
  props.queryFields.forEach((field) => {
    formModel[field.key] = field.defaultValue || ''
  })
}
</script>

<style scoped>
.query-preview {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.action-buttons {
  display: flex;
  align-items: center;
}
</style>