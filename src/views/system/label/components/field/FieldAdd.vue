<template>
  <Dialog v-model="dialogVisible" title="选择基础字段" width="70%" @close="handleClose">
    <el-alert title="基础字段需在一级基础标签配置" type="success" :closable="false" />
    <ContentWrap class="mt-4">
      选择基础表：实有人口
    </ContentWrap>
    <ContentWrap>
      <el-table
        v-loading="isLoading"
        ref="tableRef"
        :data="tableData"
        stripe
        class="field-sortable-table-container"
        row-key="uuid"
         height="400"
        @selection-change="handleSelectionChange"
         :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
      >
        <el-table-column type="selection" width="55" :selectable="selectable" />
        <el-table-column prop="code" label="Code" align="center">
          <template #default="scope">
            {{ scope.row.code }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="字段名称" align="center">
          <template #default="{ row }">
          {{ row.name }}
          </template>
        </el-table-column>
      </el-table>
    </ContentWrap>
    <template #footer>
      <el-button type="primary" @click="handleSubmit">
        确定
      </el-button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { TableInstance } from 'element-plus'
import * as FieldConfApi from '@/api/system/data/field-conf'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { omit } from 'lodash-es'
import { generateUUID } from '@/utils'

defineOptions({ name: 'SystemLabelFieldAdd' })

const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:data'])

const isLoading = ref<boolean>(false)
const tableRef = ref<TableInstance>()
const multipleSelection = ref<LabelFieldConfig[]>([])  // 多选
const selectable = ref<(row: LabelFieldConfig) => boolean>(() => true); // 系统标签不能选中
// 弹窗显示状态
const dialogVisible = ref(false)
const tableData = ref<LabelFieldConfig[]>([])

const handleSelectionChange = (selection: LabelFieldConfig[]) => {
  multipleSelection.value = selection
}

// 提交表单
const handleSubmit = async () => {
  const data = multipleSelection.value.map(item => {
    return {
      ...omit(item, ['id', 'manageId']),
      uuid: generateUUID(),
      manageId: query.manageId as string
    }
  })
  emits('update:data', data, handleClose)
}

// 关闭弹窗
const handleClose = () => {
  multipleSelection.value = []
  dialogVisible.value = false
}

// 打开弹窗（支持回显）
const open = async (openTableData: LabelFieldConfig[]) => {
  dialogVisible.value = true
  isLoading.value = true
  selectable.value = (row: LabelFieldConfig) => {
    return openTableData.some(
      (item: any) =>
        item.code === row.code ||
        item.name === row.name
    );
  };
  const res = await FieldConfApi.getBaseFieldList({ manageId: query.rootId as string })
  tableData.value = res.filter(item => item.parentCode === '0')

  isLoading.value = false
}

defineExpose({ open })
</script>
