<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="800">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="岗位名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入岗位名称" />
      </el-form-item>
      <el-form-item label="所属部门" prop="deptId">
        <el-tree-select
          v-model="formData.deptId"
          :data="deptTree"
          :props="defaultProps"
          check-strictly
          default-expand-all
          placeholder="请选择所属部门"
          value-key="id"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="formData.status" clearable placeholder="请选择状态">
          <el-option
            v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="close">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { CommonStatusEnum } from '@/utils/constants'
import type { FormInstance, FormRules } from 'element-plus'

defineOptions({ name: 'SystemJobAddForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

// 响应式数据
const deptTree = ref<any[]>([]) // 部门树形结构
const dialogVisible = ref(false) // 弹窗是否展示
const dialogTitle = ref('') // 弹窗标题
const formLoading = ref(false) // 表单加载状态
const formType = ref<'create' | 'update'>('create') // 表单类型
const formRef = ref<FormInstance>() // 表单引用

// 表单数据
const formData = ref<JobApi.JobBase>({
  id: undefined,
  name: '',
  deptId: 0, // 所属部门
  status: CommonStatusEnum.ENABLE,
})

// 表单验证规则
const formRules: FormRules = reactive({
  name: [
    { required: true, message: '岗位名称不能为空', trigger: 'blur' },
    { min: 2, max: 50, message: '岗位名称长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  deptId: [
    { required: true, message: '请选择所属部门', trigger: 'change' }
  ],
})

// 事件定义
const emit = defineEmits<{
  success: [] // 操作成功事件
}>()

/**
 * 打开弹窗
 * @param type 表单类型：create - 新增；update - 修改
 * @param id 岗位ID（修改时必传）
 */
const open = async (type: 'create' | 'update', id?: string) => {
  dialogVisible.value = true
  dialogTitle.value = t(`action.${type}`)
  formType.value = type
  resetForm()

  // 获取部门树数据
  await getDeptTree()

  // 修改时，设置数据
  if (type === 'update' && id) {
    formLoading.value = true
    try {
      const data = await JobApi.getPost(id)
      formData.value = { ...data }
    } catch (error) {
      message.error('获取岗位信息失败')
      console.error('获取岗位信息失败:', error)
    } finally {
      formLoading.value = false
    }
  }
}

/**
 * 提交表单
 */
const submitForm = async () => {
  if (!formRef.value) return

  // 校验表单
  const valid = await formRef.value.validate()
  if (!valid) return

  // 提交请求
  formLoading.value = true
  try {
    if (formType.value === 'create') {
      await JobApi.createJob(formData.value)
      message.success('新增成功')
    } else {
      await JobApi.updatePost(formData.value)
      message.success('修改成功')
    }

    dialogVisible.value = false
    emit('success')
  } catch (error) {
    console.error('提交失败:', error)
    message.error('操作失败，请重试')
  } finally {
    formLoading.value = false
  }
}

/**
 * 获取部门树数据
 */
const getDeptTree = async () => {
  try {
    const data = await DeptApi.getAllSimpleDeptList()
    const rootDept = {
      id: 0,
      name: '顶级部门',
      children: handleTree(data)
    }
    deptTree.value = [rootDept]
  } catch (error) {
    console.error('获取部门树失败:', error)
    message.error('获取部门数据失败')
  }
}

/**
 * 重置表单
 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    name: '',
    deptId: 0,
    status: CommonStatusEnum.ENABLE,
  }
  formRef.value?.resetFields()
}

const close = () => {
  dialogVisible.value = false
  resetForm()
}

// 暴露方法
defineExpose({ open })
</script>
