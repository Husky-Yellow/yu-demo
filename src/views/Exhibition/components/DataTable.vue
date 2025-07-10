<template>
  <el-table
    :data="data"
    :loading="loading"
    :row-key="rowKey"
    border
    fit
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column
      v-for="col in columns"
      :key="col.code"
      :prop="col.code"
      :label="col.name"
      :min-width="getColumnWidth(col)"
      :formatter="getFormatter(col)"
      show-overflow-tooltip
    />
    <el-table-column
      label="操作"
      fixed="right"
      width="180"
      v-if="$slots.actions"
    >
      <template #default="scope">
        <slot name="actions" :row="scope.row" ></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { FieldType } from '@/config/constants/enums/field'
import { dateFormatter } from '@/utils/formatter'

interface Props {
  columns: LabelFieldConfig[]
  data: any[]
  rowKey: string
  loading?: boolean
}

const emit = defineEmits(['selectionChange'])

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

// 根据字段类型获取列宽度
const getColumnWidth = (col: LabelFieldConfig): number => {
  const baseWidth = col.name.length * 8 + 80

  switch (col.fieldType) {
    case FieldType.TEXT:
      return Math.max(baseWidth, 120)
    case FieldType.NUMBER:
      return Math.max(baseWidth, 100)
    case FieldType.DATE:
    case FieldType.DATE_RANGE:
      return Math.max(baseWidth, 140)
    case FieldType.RADIO:
    case FieldType.CHECKBOX:
      return Math.max(baseWidth, 100)
    case FieldType.TAG:
      return Math.max(baseWidth, 120)
    default:
      return Math.max(baseWidth, 120)
  }
}

// 根据字段类型获取对应的格式化器
const getFormatter = (col: LabelFieldConfig) => {
  if (col.fieldType === FieldType.DATE || col.fieldType === FieldType.DATE_RANGE) {
    return dateFormatter
  }
  return undefined
}

const handleSelectionChange = (selection: any[]) => {
  console.log(selection)
  emit('selectionChange', selection)
}
</script>
