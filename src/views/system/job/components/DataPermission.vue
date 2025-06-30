<template>
  <div v-loading="loading">
    <div
      class="flex items-center justify-between"
      style="border-bottom: 1px solid #e5e7eb; padding: 12px 0"
    >
      <div style="font-weight: 700">区域名称</div>
    </div>
    <el-tree
      ref="treeRef"
      :data="deptOptions"
      :props="defaultProps"
      class="h-400px !overflow-y-scroll"
      empty-text="加载中，请稍候"
      node-key="id"
      show-checkbox
      default-expand-all
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'

const message = useMessage()
const emit = defineEmits(['success'])

const props = defineProps<{
  job: {
    dataScope?: number
    dataScopeDeptIds?: number[]
  }
}>()

const loading = ref(false)
const deptOptions = ref<any[]>([])
const treeRef = ref()

const getSelectedData = () => {
  return {
    dataScopeDeptIds: treeRef.value.getCheckedKeys(false)
  }
}

const setData = (_scope?: number, deptIds?: number[]) => {
  nextTick(() => {
    treeRef.value?.setCheckedKeys(deptIds || [])
  })
}

const saveForm = () => {
  console.log('saveForm')
  const data = getSelectedData()
  console.log('data',data);
  JobApi.updatePost({
    ...props.job,
    dataScopeDeptIds: data.dataScopeDeptIds,
  }).then(() => {
    message.success('保存成功')
    emit('success')
  }).catch(() => {
    message.error('保存失败')
  })
}

defineExpose({ saveForm })

onMounted(async () => {
  loading.value = true
  deptOptions.value = handleTree(await DeptApi.getAllSimpleDeptList())
  loading.value = false
  setData(props.job.dataScope, props.job.dataScopeDeptIds)
})
</script>
