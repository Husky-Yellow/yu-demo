<template>
  <Dialog v-model="dialogVisible" title="选择岗位" append-to-body>
    <el-input
      v-model="filterText"
      class="w-60 mb-2"
      placeholder="Filter keyword"
    />

    <el-tree
      ref="treeRef"
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      show-checkbox
      @check-change="handleCheckChange"
    />
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { TreeInstance } from 'element-plus'
import { handleTree } from '@/utils/tree'
import * as PostApi from '@/api/system/post'
import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'

defineOptions({ name: 'SystemSubscriberSubPositionForm' })

defineProps({
  jobList: {
    type: Array as PropType<JobApi.JobDetailData[]>,
    required: true
  }
})

// 定义树节点的数据结构
interface Tree {
  [key: string]: any
}

// 定义响应式变量
const filterText = ref('')
const treeRef = ref<TreeInstance>()
const dialogVisible = ref(false)
const formLoading = ref(false)
const formData = ref({
  postIds: []
})
const formRef = ref()
const deptList = ref<Tree[]>([])
const postList = ref([] as PostApi.PostVO[])

// 树节点属性配置
const defaultProps = {
  children: 'children',
  label: 'label'
}

// 树形结构数据示例
const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1'
          },
          {
            id: 10,
            label: 'Level three 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1'
      },
      {
        id: 6,
        label: 'Level two 2-2'
      }
    ]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1'
      },
      {
        id: 8,
        label: 'Level two 3-2'
      }
    ]
  }
]
// 监听搜索框输入，过滤树节点
watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

// 树节点过滤方法
const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}

// 树节点选中状态改变时的处理方法
const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  formData.value.postIds.push(data as unknown as never)
  // formData.value.postIds = []
  // data.forEach((key) => {
  //   formData.value.postIds.push(key as never)
  // })
}

// 打开弹窗的方法
const open = async () => {
  dialogVisible.value = true
  resetForm()
  // 修改时，设置数据
  // if (id) {
  formLoading.value = true
  try {
    // formData.value = await UserApi.getUser(id)
  } finally {
    formLoading.value = false
  }
  // }
  // 加载部门树
  deptList.value = handleTree(await DeptApi.getSimpleDeptList())
  // 加载岗位列表
  postList.value = await PostApi.getSimplePostList()
}

// 重置表单的方法
const resetForm = () => {
  formData.value = {
    postIds: []
  }
  formRef.value?.resetFields()
}

// 提交表单的方法
const emit = defineEmits(['success'])
const submitForm = async () => {
  // 提交请求
  formLoading.value = true
  try {
    // const data = formData.value as unknown as UserApi.UserVO
    // if (formType.value === 'create') {
    //   // await UserApi.createUser(data)
    //   message.success('新增成功')
    // } else {
    //   await UserApi.updateUser(data)
    //   message.success('修改成功')
    // }
    dialogVisible.value = false
    console.log('formData.value', formData.value);

    // 发送操作成功的事件
    emit('success', formData.value)
  } finally {
    formLoading.value = false
  }
}

// 对外暴露 open 方法
defineExpose({ open })
</script>