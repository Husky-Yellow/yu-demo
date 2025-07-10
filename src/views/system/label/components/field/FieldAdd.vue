<template>
  <Dialog v-model="dialogVisible" title="添加基础字段" width="70%" @close="handleClose">
    <el-table
      v-loading="isLoading"
      ref="tableRef"
      :data="tableData.filter(item => item.parentCode === '0')"
      stripe
      class="field-sortable-table-container"
      row-key="uuid"
       height="640"
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
      <el-table-column prop="remark" label="字段说明" align="center" />
      <el-table-column prop="fieldType" label="字段类型" align="center" >
        <template #default="{ row }">
          {{ FieldTypeLabel[row.fieldType] }}
        </template>
      </el-table-column>
      <el-table-column prop="length" label="字段长度" align="center" width="100">
        <template #default="{ row }">
          {{ row.length }}
        </template>
      </el-table-column>
      <el-table-column prop="encFlag" label="是否加密" align="center" width="100">
        <template #default="{ row }">
          {{ row.encFlag ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="addFlag" label="新增表单" align="center" width="100">
        <template #default="{ row }">
          <el-checkbox v-model="row.addFlag" :true-value="1" :false-value="0" label="" />
        </template>
      </el-table-column>
      <el-table-column prop="editFlag" label="编辑表单" align="center" width="100">
        <template #default="{ row }">
          <el-checkbox v-model="row.editFlag" :true-value="1" :false-value="0" label="" />
        </template>
      </el-table-column>
      <el-table-column prop="appViewFlag" label="移动端列表" align="center" width="100">
        <template #default="{ row }">
          <div>
            <el-icon v-if="row.appViewFlag"><View /></el-icon>
            <el-icon v-else><Hide /></el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="pcViewFlag" label="管理端列表" align="center"  width="100">
        <template #default="{ row }">
          <div class="cursor-pointer">
            <el-icon v-if="row.pcViewFlag"><View /></el-icon>
            <el-icon v-else><Hide /></el-icon>
          </div>
        </template>
      </el-table-column>
    </el-table>
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
  FieldTypeLabel,
} from '@/config/constants'
import {
  BooleanEnum,
} from '@/config/constants/enums/label'
import { defaultFieldConfExt } from '@/config/constants/enums/fieldDefault'
import type { TableInstance } from 'element-plus'

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
}

defineExpose({ open })
</script>
