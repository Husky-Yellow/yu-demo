<template>
  <el-tree
    ref="treeRef"
    :data="deptList"
    :expand-on-click-node="false"
        class="h-374px !overflow-y-scroll"
    :props="{
      ...defaultProps,
      children: 'childList',
      label: 'name'
    }"
    default-expand-all
    highlight-current
    node-key="id"
  />
</template>

<script lang="ts" setup>
import { ElTree } from 'element-plus'
import * as LabelManageApi from '@/api/system/data/label-manage'
import { defaultProps, handleTree2 } from '@/utils/tree'
defineOptions({ name: 'LabelFidldConfig' })

const { query } = useRoute() // 查询参数
const deptList = ref<Tree[]>([]) // 树形结构
const treeRef = ref<InstanceType<typeof ElTree>>()

/** 获得部门树 */
const getTree = async () => {
  const res = await LabelManageApi.getLabelManageTree({
    labelId: query.lableId as string
  })
  deptList.value = handleTree2(res)
}

/** 初始化 */
onMounted(async () => {
  await getTree()
})

const convertFormForSubmission = () => {}
const validate = async () => true

defineExpose({
  validate,
  convertFormForSubmission
})
</script>
