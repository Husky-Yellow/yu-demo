<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="120px"
    >
      <el-form-item label="组织名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入组织名称" />
      </el-form-item>
      <el-form-item label="上级部门" prop="parentId">
        <el-tree-select
          v-model="formData.parentId"
          :data="deptTree"
          :props="defaultProps"
          check-strictly
          default-expand-all
          placeholder="请选择上级部门"
          value-key="deptId"
        />
      </el-form-item>
      <el-form-item label="同级显示排序" prop="sort">
        <el-input-number v-model="formData.sort" :min="0" controls-position="right" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import { FormRules } from 'element-plus'

defineOptions({ name: 'SystemorGanizationForm' })

// 常量定义
const FORM_TYPES = {
  ADD_CHILD: 'addChild',
  CREATE: 'create',
  UPDATE: 'update'
} as const

type FormType = typeof FORM_TYPES[keyof typeof FORM_TYPES]

const message = useMessage() // 消息弹窗

// 组件状态
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref<FormType | ''>('') // 表单的类型：create - 新增；update - 修改
const formData = ref<DeptApi.DeptFormData>({
  id: undefined,
  parentId: 0,
  name: "",
  sort: 0,
  status: 0
})
const formRules = reactive<FormRules<DeptApi.DeptFormData>>({
  name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }],
  sort: [{ required: true, message: '显示排序不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref
const deptTree = ref() // 树形结构


/**
 * 打开表单弹窗并初始化表单数据
 * @param {FORM_TYPES} type - 操作类型
 * @param {DeptFormData | DeptVO} [row] - 行数据对象
 */
 const open = async (type: FormType, row?: DeptApi.DeptFormData) => {
  dialogVisible.value = true
  formType.value = type
  dialogTitle.value = {
    [FORM_TYPES.ADD_CHILD]: '增加子级',
    [FORM_TYPES.CREATE]: '新增',
    [FORM_TYPES.UPDATE]: '编辑'
  }[type]

  resetForm()

  if (row) {
    formLoading.value = true
    try {
      if (type === FORM_TYPES.ADD_CHILD) {
        formData.value = {
          ...row,
          name: '',
          parentId: row.id ?? 0,
          sort: 1,
          status: 0,
          id: undefined
        }
      } else {
        formData.value = { ...row }
      }
    } finally {
      formLoading.value = false
    }
  }

  await getDeptTree()
}

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  try {
    await formRef.value?.validate()
    if (!formRef.value || !formType.value) return

    formLoading.value = true

    const actions = {
      [FORM_TYPES.CREATE]: {
        api: DeptApi.createDept,
        message: '新增成功'
      },
      [FORM_TYPES.ADD_CHILD]: {
        api: DeptApi.createDept,
        message: '新增子级成功'
      },
      [FORM_TYPES.UPDATE]: {
        api: DeptApi.updateDept,
        message: '修改成功'
      }
    }

    const action = actions[formType.value]
    if (!action) return

    await action.api(formData.value)
    message.success(action.message)

    dialogVisible.value = false
    emit('success')
  } catch (error) {
    message.error('操作失败，请重试')
    throw error
  } finally {
    formLoading.value = false
  }
}
/**
 * 重置表单
 */
 const resetForm = () => {
  formData.value = {
    id: undefined,
    status: 0,
    parentId: 0,
    name: '',
    sort: 0,
  }
  formRef.value?.resetFields()
}

/**
 * 获取部门树数据
 */
const getDeptTree = async () => {
  deptTree.value = []
  const data = await DeptApi.getSimpleDeptList()
  const rootDept: Tree = {
    id: 0,
    name: '顶级部门',
    children: handleTree(data)
  }
  deptTree.value.push(rootDept)
}

defineExpose({ open })
</script>
