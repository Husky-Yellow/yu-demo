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
            <el-button :icon="Search" @click="filterTable" />
          </template>
        </el-input>
        <el-table ref="tableRef" :data="tableData" style="width: 100%" height="400">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="岗位" />
          <el-table-column prop="detail" label="操作" >
            <template #default="scope">
              <el-button type="primary" text @click="handleClose(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
import { defaultProps, treeToList, findNode } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'

defineOptions({ name: 'SystemSubscriberSubPositionForm' })

const props = defineProps({
  postIds: {
    type: Array as PropType<string[]>,
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
const treeRef = ref<TreeInstance>()
const tableRef = ref()
const tableData = ref<DeptApi.DeptNode[]>([])

const formLoading = ref(false)
watch(filterTreeText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: DeptApi.DeptNode) => {
  if (!value) return true
  return data.name.includes(value)
}

const handleNodeClick = async (data: DeptApi.DeptNode) => {
  const { type } = data
  if (type !== DeptApi.DeptType.POSITION) return
  tableData.value.push(data)
}

const handleClose = (tag: DeptApi.DeptNode) => {
  tableData.value = tableData.value.filter(item => item.id !== tag.id)
}

const filterTable = () => {
  tableData.value = tableData.value.filter(item => item.name.includes(filterTableText.value))
}

// 打开弹窗的方法
const open = async () => {
  dialogVisible.value = true
  // 修改时，设置数据
  // if (id) {
  formLoading.value = true
  tableData.value = []
  if (props.postIds?.length > 0) {
    props.postIds.forEach(item => {
      const node = findNode(deptTree.value, i => `${i.id}` === `${item}`)
      if (node) {
        tableData.value.push(node)
      }
    })
  }
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
const reset = () => {
  tableData.value = []
  dialogVisible.value = false
}
// 提交表单的方法
const submitForm = async () => {
  formLoading.value = true
  try {
    const postIds = tableData.value.map(item => item.id)

    // 发送操作成功的事件
    emit('success', postIds)
    reset()
  } finally {
    formLoading.value = false
  }
}



// 对外暴露 open 方法
defineExpose({ open })
</script>
