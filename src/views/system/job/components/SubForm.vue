<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="岗位姓名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入岗位姓名" />
      </el-form-item>
      <el-form-item label="归属组织" prop="deptId">
        <el-tree-select
          v-model="formData.deptId"
          :data="deptList"
          :props="defaultProps"
          check-strictly
          node-key="id"
          placeholder="请选择归属组织"
        />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formData.status" class="!w-240px">
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemJobSubForm' })
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'
import { FormRules } from 'element-plus'


// 定义组件属性
const props = defineProps({
  /** 初始加载数据的API函数 */
  loadApi: {
    type: Function,
    required: true
  },
    /** 自定义数据处理函数 */
  dataHandler: {
    type: Function,
    default: (data: any[]) => data
  }
});


const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  name: '',
  deptId: '',
  status: 1
})
const formRules = reactive<FormRules>({
  name: [{ required: true, message: '用户名称不能为空', trigger: 'blur' }],
  deptId: [{ required: true, message: '用户昵称不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref
const deptList = ref<Tree[]>([]) // 树形结构

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = '新增'
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await JobApi.getPost(id)
    } finally {
      formLoading.value = false
    }
  }
   const res = await props.loadApi();
    deptList.value = props.dataHandler(res);
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as JobApi.JobDetailData
    if (formType.value === 'create') {
      await JobApi.createJob(data)
      message.success('新增成功')
    } else {
      await JobApi.updatePost(data)
      message.success('修改成功')
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    name: '',
    deptId: '',
    status: 1
  }
  formRef.value?.resetFields()
}
</script>
