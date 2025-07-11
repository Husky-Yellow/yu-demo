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
        :data="tableData.filter(item => item.parentCode === '0')"
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
import {
  FieldType,
} from '@/config/constants'
import {
  BooleanEnum,
} from '@/config/constants/enums/label'
import { defaultFieldConfExt } from '@/config/constants/enums/fieldDefault'
import type { TableInstance } from 'element-plus'
import * as LabelApi from '@/api/system/label'
defineOptions({ name: 'SystemLabelFieldAdd' })

const isLoading = ref(false)
const tableRef = ref<TableInstance>()
const multipleSelection = ref<any[]>([])  // 多选
const selectable = (row: any) => ![BooleanEnum.TRUE].includes(row.bizType) // 系统标签不能选中


const handleSelectionChange = (selection: any[]) => {
  multipleSelection.value = selection
}

const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:data'])

// 表单引用
const fieldForm = ref(null)
// 弹窗显示状态
const dialogVisible = ref(false)

// 表单初始值
const defaultForm = () => ({
  manageId: query.manageId as string,
  code: '', // 字段值
  name: '', // 字段名称
  remark: '', // 字段说明
  fieldType: FieldType.TEXT, // 字段类型
  bizType: BooleanEnum.FALSE, // 字段业务类型 0-系统 1-基础
  length: undefined, // 字段长度
  encFlag: BooleanEnum.FALSE, // 0-不加密1-加密
  encType: BooleanEnum.FALSE, // 0-全文加密1-证件号码加密2-手机号码加密
  addFlag: BooleanEnum.FALSE, // 是否新增表单;0-否 1-是
  editFlag: BooleanEnum.FALSE, // 是否编辑表单;0-否 1-是
  appViewFlag: BooleanEnum.FALSE, // 是否移动端展示;0-否 1-是
  pcViewFlag: BooleanEnum.FALSE, // 是否PC端展示;0-否 1-是
  parentCode: "0", // 父级字段编码 当单选、多选时、额外的对象是有这个值
  fieldConfExt: { ...defaultFieldConfExt }
})
const tableData = ref<any[]>([])
// 响应式表单数据
const form = reactive(defaultForm())

// 提交表单
const handleSubmit = async () => {


  handleClose()
}

// 重置表单
const resetForm = () => {
  const defaultValues = defaultForm()
  Object.keys(form).forEach(key => {
    delete form[key]
  })
  Object.assign(form, defaultValues)
  form.fieldConfExt = { ...defaultFieldConfExt }
  ;(fieldForm.value as any)?.resetFields()
}

// 关闭弹窗
const handleClose = () => {
  resetForm()
  dialogVisible.value = false
}

// 打开弹窗（支持回显）
const open = async (type: 'add' | 'edit' | 'show', row?: any, openTableData?: any) => {
  console.log(type, row, openTableData);
  dialogVisible.value = true
  const res = await LabelApi.getBaseFieldList({ manageId: query.rootId as string })
  console.log('res',res)
  tableData.value = res
}

defineExpose({ open })
</script>
