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
import * as LabelApi from '@/api/system/label'
import { ElMessage } from 'element-plus'
import DraggableTable from '@/components/Draggable/table.vue'
import { ElInput, ElSwitch } from 'element-plus'
import type { TableColumn } from '@/components/Draggable/table.vue'
import type { OperateConfig } from '@/config/constants/enums/fieldDefault'
import { OperateTypeText } from '@/config/constants/enums/fieldDefault'
import { BooleanEnum } from '@/config/constants/enums/label'
import { generateOperationMock } from '@/utils/label'

const { query } = useRoute()
const tableData = ref<OperateConfig[]>([])

// 名称输入组件
const NameInputComponent = markRaw(defineComponent({
  props: { row: { type: Object as () => OperateConfig, required: true } },
  emits: ['update'],
  setup(props, { emit }) {
    return () => h(ElInput, {
      modelValue: props.row.operateName,
      size: 'small',
      'onUpdate:modelValue': (value: string) => emit('update', { ...props.row, operateName: value }),
      placeholder: '请输入按钮名称'
    })
  }
}))

// 显示开关组件
const VisibilitySwitchComponent = markRaw(defineComponent({
  props: { row: { type: Object as () => OperateConfig, required: true } },
  emits: ['update'],
  setup(props, { emit }) {
    return () => h(ElSwitch, {
      modelValue: props.row.showFlag,
      'onUpdate:modelValue': (value: boolean) => emit('update', { ...props.row, showFlag: value }),
      activeValue: BooleanEnum.TRUE,
      inactiveValue: BooleanEnum.FALSE,
    })
  }
}))

// 表格列配置
const columns = computed<TableColumn<OperateConfig>[]>(() => [
  { type: 'index', label: '序号', width: 80, align: 'center' },
  {
    prop: 'operateType',
    label: '按钮类型',
    align: 'center',
    width: 120,
    render: (scope: { row: OperateConfig }) => OperateTypeText[scope.row.operateType]
  },
  {
    prop: 'operateName',
    label: '按钮名称',
    align: 'center',
    render: NameInputComponent,
    renderProps: { onUpdate: updateRowData }
  },
  {
    prop: 'showFlag',
    label: '是否显示',
    align: 'center',
    render: VisibilitySwitchComponent,
    renderProps: { onUpdate: updateRowData }
  }
])

// 排序处理
const handleSortEnd = (oldIndex: number, newIndex: number) => {
  if (oldIndex === newIndex) return
  const item = tableData.value.splice(oldIndex, 1)[0]
  tableData.value.splice(newIndex, 0, item)
  tableData.value.forEach((item, index) => { item.sort = index + 1 })
}

// 更新行数据
const updateRowData = (updatedRow: OperateConfig) => {
  const index = tableData.value.findIndex(item => item.operateType === updatedRow.operateType)
  if (index !== -1) tableData.value[index] = updatedRow
}

// 获取数据
const getDataFieldConfListByManageId = async () => {
  const res = await LabelApi.getOperateConfigList({ manageId: query.labelId as string })
  tableData.value = res.length ? res : generateOperationMock(query.labelId as string)
}

// 提交表单
const submitForm = () => {
  const submitData = tableData.value.map((item, index) => ({
    ...item,
    operateName: item.operateName.trim(),
    sort: index
  }))

  if (submitData.some(item => !item.operateName)) {
    ElMessage.warning('请填写所有按钮名称')
    return
  }

  LabelApi.updateOperateConfigList(submitData)
    .then(() => ElMessage.success('配置已保存'))
    .catch(() => ElMessage.error('保存失败'))
}

defineExpose({ submitForm, getTableData: () => tableData.value })

onMounted(() => getDataFieldConfListByManageId())
</script>