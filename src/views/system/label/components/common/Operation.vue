<template>
  <ContentWrap>
    <DraggableTable
      :table-data="tableData"
      :columns="columns"
      drag-handle-class="drag-handle"
      table-class="operation-table"
      @sort-end="handleSortEnd"
      drag-position="last"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import { ref, h, defineComponent, markRaw, computed } from 'vue'
import { ElMessage } from 'element-plus'
import DraggableTable from '@/components/Draggable/table.vue'
import { ElInput, ElSwitch } from 'element-plus'
import type { TableColumn } from '@/components/Draggable/table.vue'

// 定义操作按钮接口
interface OperationButton {
  id: number
  type: string
  name: string
  visible: boolean
  sort: number
}

// 响应式数据
const tableData = ref<OperationButton[]>([
  { id: 1, type: '添加', name: '添加', visible: true, sort: 1 },
  { id: 2, type: '编辑', name: '编辑', visible: true, sort: 2 },
  { id: 3, type: '删除', name: '删除', visible: true, sort: 3 },
  { id: 4, type: '导入', name: '导入', visible: true, sort: 4 },
  { id: 5, type: '导出', name: '导出', visible: true, sort: 5 },
])

// 自定义渲染组件 - 名称输入框
const NameInputComponent = markRaw(defineComponent({
  props: {
    row: {
      type: Object as () => OperationButton,
      required: true
    }
  },
  emits: ['update'],
  setup(props, { emit }) {
    const handleInput = (value: string) => {
      emit('update', { ...props.row, name: value })
    }

    const handleBlur = () => {
      // 可以在这里添加验证逻辑
      console.log('Name updated:', props.row)
    }

    return () => h(ElInput, {
      modelValue: props.row.name,
      size: 'small',
      'onUpdate:modelValue': handleInput,
      onBlur: handleBlur,
      placeholder: '请输入按钮名称'
    })
  }
}))

// 自定义渲染组件 - 显示开关
const VisibilitySwitchComponent = markRaw(defineComponent({
  props: {
    row: {
      type: Object as () => OperationButton,
      required: true
    }
  },
  emits: ['update'],
  setup(props, { emit }) {
    const handleChange = (value: boolean) => {
      emit('update', { ...props.row, visible: value })
      console.log('Visibility updated:', props.row)
    }

    return () => h(ElSwitch, {
      modelValue: props.row.visible,
      'onUpdate:modelValue': handleChange,
    })
  }
}))

// 表格列配置
const columns = computed<TableColumn<OperationButton>[]>(() => [
  {
    type: 'index',
    label: '序号',
    width: 80,
    align: 'center'
  },
  {
    prop: 'type',
    label: '按钮类型',
    align: 'center',
    width: 120
  },
  {
    prop: 'name',
    label: '按钮名称',
    align: 'center',
    render: NameInputComponent,
    renderProps: {
      onUpdate: updateRowData
    }
  },
  {
    prop: 'visible',
    label: '是否显示',
    align: 'center',
    render: VisibilitySwitchComponent,
    renderProps: {
      onUpdate: updateRowData
    }
  }
])

// 事件处理函数
const handleSortEnd = (oldIndex: number, newIndex: number) => {
  if (oldIndex === newIndex) return

  try {
    // 重新排序数据
    const item = tableData.value.splice(oldIndex, 1)[0]
    tableData.value.splice(newIndex, 0, item)

    // 更新排序字段
    tableData.value.forEach((item, index) => {
      item.sort = index + 1
    })

    console.log('排序更新完成:', tableData.value)
  } catch (error) {
    console.error('排序更新失败:', error)
    ElMessage.error('排序更新失败')
  }
}

// 更新行数据
const updateRowData = (updatedRow: OperationButton) => {
  const index = tableData.value.findIndex(item => item.id === updatedRow.id)
  if (index !== -1) {
    tableData.value[index] = updatedRow
  }
}

// 提交表单
const submitForm = () => {
  try {
    const submitData = tableData.value.map(item => ({
      ...item,
      // 可以在这里添加数据验证
      name: item.name.trim()
    }))

    // 验证数据
    const invalidItems = submitData.filter(item => !item.name)
    if (invalidItems.length > 0) {
      ElMessage.warning('请填写所有按钮名称')
      return
    }

    console.log('提交数据:', submitData)
    ElMessage.success('配置已保存')

    // 这里可以调用API保存数据
    // await saveOperationConfig(submitData)
  } catch (error) {
    console.error('保存失败:', error)
    ElMessage.error('保存失败')
  }
}

// 暴露方法
defineExpose({
  submitForm,
  getTableData: () => tableData.value,
})
</script>

<style scoped>
.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.drag-handle:hover {
  color: #66b1ff;
}

.drag-handle:active {
  cursor: grabbing;
  color: #337ecc;
}

/* 拖拽样式 */
:deep(.sortable-ghost) {
  background-color: #f5f7fa !important;
  opacity: 0.6;
}

:deep(.sortable-chosen) {
  background-color: #e6f7ff !important;
}

:deep(.sortable-drag) {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 表格样式优化 */
:deep(.operation-table) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.operation-table .el-table__header) {
  background-color: #fafafa;
}

:deep(.operation-table .el-table__row:hover) {
  background-color: #f5f7fa;
}
</style>