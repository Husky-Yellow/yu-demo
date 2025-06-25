<template>
  <el-dialog v-model="dialogVisible" title="选择文本字段" width="500px" @close="handleClose">
    <el-input v-model="searchKeyword" placeholder="搜索字段" class="mb-2" />
    <el-table ref="tableRef" :data="filteredFields" @selection-change="handleSelectionChange" height="300px">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="字段名" />
    </el-table>
    <template #footer>
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import type { ElTable } from 'element-plus'
import { FieldType } from '@/config/constants/enums/field'

const props = defineProps<{
  modelValue: boolean
  fieldList: LabelFieldConfig[]
  excludedKeys?: string[]
  selectedKeysProp?: string[]
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const dialogVisible = ref(props.modelValue)
const searchKeyword = ref('')
const selectedFields = ref<LabelFieldConfig[]>([])
const tableRef = ref<InstanceType<typeof ElTable>>()

watch(
  () => props.modelValue,
  (val) => {
    dialogVisible.value = val
    if (val) {
      nextTick(() => {
        const preSelected = filteredFields.value.filter(f => props.selectedKeysProp?.includes(f.id!))
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
  return props.fieldList.filter((field: LabelFieldConfig) => {
    const isTextType = field.fieldType === FieldType.TEXT || field.fieldType === FieldType.NUMBER
    // const isNotExcluded = !props.excludedKeys?.includes(field.id!)
    const matchesSearch = field.code.toLowerCase().includes(searchKeyword.value.toLowerCase())
    return isTextType && matchesSearch
  })
})

function handleSelectionChange(selection: LabelFieldConfig[]) {
  selectedFields.value = selection
}

function handleConfirm() {
  // 如果一个没选中，则不触发 给出消息提示
  if (selectedFields.value.length === 0) {
    ElMessage.error('请选择字段')
    return
  }
  const selectedKeys = selectedFields.value.map((f) => f.id!)
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