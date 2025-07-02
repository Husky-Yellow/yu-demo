<template>
  <Dialog v-model="dialogVisible" title="选择岗位" append-to-body>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-input
          v-model="filterTreeText"
           class="w-60 mb-2"
          placeholder="请输入岗位"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
        <el-tree
          style="max-width: 600px"
          ref="treeRef"
          :data="deptTree"
          :props="{
            ...defaultProps,
            label: 'name',
            children: 'children'
          }"
          node-key="id"
          @node-click="handleNodeClick"
           :filter-node-method="filterNode"
          default-expand-all
        />
      </el-col>
      <el-col :span="12">
        <el-input
          v-model="filterTableText"
           class="w-60 mb-2"
          placeholder="请输入用户"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
        <el-table ref="tableRef" :data="tableData" style="width: 100%" height="400" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="nickname" label="用户名" />
        </el-table>
        <div class="flex gap-2">
          <el-tag v-for="tag in formData.postIds" :key="tag.id" closable :type="tag.type" @close="handleClose(tag)">
            {{ tag.nickname }}
          </el-tag>
        </div>
      </el-col>
    </el-row>

    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
// todo 数据回显，数据处理
import { Search } from '@element-plus/icons-vue'
import type { TreeInstance } from 'element-plus'
import { defaultProps, treeToList } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as UserApi from '@/api/system/user'

defineOptions({ name: 'SystemSubscriberSubPositionForm' })

defineProps({
  postIds: {
    type: Array as PropType<number[]>,
    required: true
  }
})

const emit = defineEmits(['success'])
// 树形结构数据示例
const dialogVisible = ref<boolean>(false)
const filterTreeText = ref('') //
const filterTableText = ref('') //
const postIdsMap = ref<Map<string, DeptApi.DeptNode>>(new Map())
const deptTree = ref<DeptApi.DeptNode[]>([])
const deptId = ref<string | undefined>(undefined)
const treeRef = ref<TreeInstance>()
const tableRef = ref()
const tableData = ref<UserApi.UserResp[]>([])

const formLoading = ref(false)

type UserWithDeptId = Omit<UserApi.UserResp, 'deptId'> & { deptId: string }

const formData = ref<{
  postIds: UserWithDeptId[]
}>({
  postIds: []
})

watch(filterTreeText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: DeptApi.DeptNode) => {
  if (!value) return true
  return data.name.includes(value)
}

const handleNodeClick = async (data: DeptApi.DeptNode) => {
  const { id, type } = data
  if (type !== DeptApi.DeptType.POSITION) return
  deptId.value = undefined
  tableRef.value?.clearSelection()
  const userList = await UserApi.getUserListByPostId(Number(id))
  deptId.value = String(id)
  tableData.value = userList
}

const handleSelectionChange = (selection: UserApi.UserResp[]) => {
  if (!deptId.value) return
  formData.value.postIds = selection.map(item => ({
    ...item,
    deptId: deptId.value!
  }))
}

const handleClose = (tag: UserApi.UserResp) => {
  // 从 formData.value.postIds 中删除 tag
  const index = formData.value.postIds.findIndex(item => item.id === tag.id)
  if (index > -1) {
    formData.value.postIds.splice(index, 1)
  }

  // 从 tableData.value 中删除 tag
  const rowIndex = tableData.value.findIndex(item => item.id === tag.id)
  if (rowIndex > -1) {
    tableRef.value?.toggleRowSelection(tableData.value[rowIndex], false)
  }
}

// 打开弹窗的方法
const open = async () => {
  dialogVisible.value = true
  resetForm()
  // 修改时，设置数据
  // if (id) {
  formLoading.value = true
  try {
    const deptTreeData = await DeptApi.getDeptTreeWithPost()
    deptTree.value = deptTreeData
      const postMap = new Map(
        (treeToList(deptTreeData) as DeptApi.DeptNode[])
          .map(item => [String(item.id), item])
      )
    postIdsMap.value = postMap
  } finally {
    formLoading.value = false
  }


}

// 重置表单的方法
const resetForm = () => {
  formData.value = {
    postIds: []
  }
}

// 提交表单的方法

const submitForm = async () => {
  // 提交请求
  formLoading.value = true
  try {
    const postIds = formData.value.postIds.map(item => ({
      ...item,
      id: item.id,
      deptId: Number(item.deptId),
      detail: postIdsMap.value.get(String(item.deptId))
    }))
    console.log('postIds', postIds)
    // dialogVisible.value = false
    // console.log('formData.value', formData.value)

    // 发送操作成功的事件
    // emit('success', formData.value)
  } finally {
    formLoading.value = false
  }
}

// 对外暴露 open 方法
defineExpose({ open })
</script>
