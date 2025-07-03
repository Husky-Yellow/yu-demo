<template>
  <el-table :data="data" :loading="loading" :row-key="rowKey" border style="width: 100%">
    <el-table-column
      v-for="col in columns"
      :key="col.code"
      :prop="col.code"
      :label="col.name"
    />
    <el-table-column
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
import { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'

const props = defineProps<{
  columns: LabelFieldConfig[]
  data: any[]
  rowKey: string
  actions?: string[]
  loading?: boolean
}>()
</script>