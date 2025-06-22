<template>
  <el-dialog v-model="dialogVisible" title="选择文本字段" width="500px" @close="handleClose">
    <el-input v-model="searchKeyword" placeholder="搜索字段" class="mb-2" />
    <el-table ref="tableRef" :data="filteredFields" @selection-change="handleSelectionChange" height="300px">
      <el-table-column type="selection" width="55" />
      <el-table-column property="label" label="字段名" />
    </el-table>
    <template #footer>
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { ElTable } from 'element-plus'
import { ElDialog, ElInput, ElTableColumn, ElButton } from 'element-plus'

const props = defineProps<{
  modelValue: boolean
  fieldList: Array<{ key: string; label: string; type: string }>
  excludedKeys?: string[]
  selectedKeysProp?: string[]
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const dialogVisible = ref(props.modelValue)
const searchKeyword = ref('')
const selectedFields = ref<any[]>([])
const tableRef = ref<InstanceType<typeof ElTable>>()

watch(
  () => props.modelValue,
  (val) => {
    dialogVisible.value = val
    if (val) {
      nextTick(() => {
        const preSelected = filteredFields.value.filter(f => props.selectedKeysProp?.includes(f.key))
        preSelected.forEach(row => {
          tableRef.value?.toggleRowSelection(row, true)
        })
      })
    } else {
      searchKeyword.value = ''
      tableRef.value?.clearSelection()
    }
  }
)

const filteredFields = computed(() => {
  return props.fieldList.filter((field) => {
    const isTextType = field.type === 'string'
    const isNotExcluded = !props.excludedKeys?.includes(field.key)
    const matchesSearch = field.label.toLowerCase().includes(searchKeyword.value.toLowerCase())
    return isTextType && isNotExcluded && matchesSearch
  })
})

function handleSelectionChange(selection: any[]) {
  selectedFields.value = selection
}

function handleConfirm() {
  const selectedKeys = selectedFields.value.map((f) => f.key)
  emit('confirm', selectedKeys)
  handleClose()
}

function handleClose() {
  emit('update:modelValue', false)
}
</script>
<style scoped>
.mb-2 {
  margin-bottom: 8px;
}
</style> 