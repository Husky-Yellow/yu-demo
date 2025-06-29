<template>
  <el-table :data="data" :row-key="rowKey" border style="width: 100%">
    <el-table-column
      v-for="col in columns"
      :key="col.prop"
      :prop="col.prop"
      :label="col.label"
      :width="col.width"
    />
    <el-table-column
      v-if="actions && actions.length"
      label="操作"
      fixed="right"
      width="180"
    >
      <template #default="scope">
        <slot name="actions" :row="scope.row"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ColumnConfig {
  label: string
  prop: string
  width?: string | number
}

const props = defineProps<{
  columns: ColumnConfig[]
  data: any[]
  rowKey: string
  actions?: string[]
}>()
</script> 