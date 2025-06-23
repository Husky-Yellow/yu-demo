<template>
  <div class="flex gap-4 h-[calc(100vh-200px)] bg-gray-100 p-4">
    <!-- Left Panel: Available Fields -->
    <div class="w-50 flex-shrink-0 bg-white rounded shadow-sm p-4 h-full overflow-y-auto">
      <h3 class="text-base font-semibold mb-4 border-b border-gray-100 pb-[10px]">数据字段</h3>
      <div class="flex flex-col gap-2">
        <div
          v-for="element in availableFields"
          :key="element.type"
          class="field-item"
          :class="{ disabled: isFieldUsed(element.type) }"
          :draggable="!isFieldUsed(element.type)"
          @dragstart="handleDragStart($event, element)"
          @dragend="handleDragEnd"
        >
          <el-icon><Rank /></el-icon>
          <span>{{ element.label }}</span>
        </div>
      </div>
    </div>

    <!-- Center Panel: Form Canvas -->
    <div class="panel center-panel">
      <div class="canvas-toolbar">
        <el-button type="success" @click="oneClickLayout">一键布局</el-button>
        <el-button type="primary" @click="saveLayout">保存布局</el-button>
      </div>
      <div class="canvas-droppable-area" @dragover.prevent @drop="handleDropOnCanvas">
        <draggable
          v-if="formRows.length > 0"
          v-model="formRows"
          class="form-canvas"
          group="rows-group"
          handle=".row-drag-handle"
          item-key="id"
          :disabled="isDraggingNewField"
        >
          <template #item="{ element: row, index: rowIndex }">
            <div
              v-if="row.fields"
              class="form-row-wrapper"
              :class="{ 'active-row': isRowSelected(row) }"
            >
              <div class="row-actions">
                <el-icon
                  v-if="row.fields.length === 1 && !row.showPlaceholder"
                  title="添加新列"
                  class="row-action-icon"
                  @click="addColumn(row)"
                >
                  <Plus />
                </el-icon>
                <el-icon title="拖拽整行" class="row-action-icon row-drag-handle"><Rank /></el-icon>
                <el-icon
                  title="删除整行"
                  class="row-action-icon row-delete-icon"
                  @click="deleteRow(rowIndex)"
                >
                  <Delete />
                </el-icon>
              </div>
              <div class="field-drop-container">
                <draggable
                  v-model="row.fields"
                  class="field-drop-zone"
                  group="fields-group"
                  item-key="id"
                >
                  <template #item="{ element: field }">
                    <div class="form-field-col">
                      <div
                        class="form-field-wrapper"
                        :class="{ active: selectedField?.id === field.id }"
                        @click="selectField(field)"
                      >
                        <div class="field-actions">
                          <el-icon
                            title="删除字段"
                            class="delete-icon"
                            @click.stop="deleteField(row, field)"
                          >
                            <Delete />
                          </el-icon>
                        </div>
                        <el-form-item :label="field.label" :required="field.required">
                          <component
                            :is="getFieldComponent(field.type)"
                            :placeholder="field.placeholder"
                            style="width: 100%"
                          />
                        </el-form-item>
                      </div>
                    </div>
                  </template>
                </draggable>
                <div
                  v-if="row.showPlaceholder"
                  class="placeholder-drop-zone form-field-col"
                  @dragover.prevent
                  @drop.stop="handleDropOnPlaceholder(row, $event)"
                >
                  <el-icon><Plus /></el-icon>
                  <span>将字段拖到此处</span>
                </div>
              </div>
            </div>
          </template>
        </draggable>
        <div v-else class="empty-canvas-placeholder">
          <el-icon><Plus /></el-icon>
          <span>将左侧字段拖到此处创建新行</span>
        </div>
      </div>
    </div>

    <!-- Right Panel: Field Properties -->
    <div class="panel right-panel">
      <h3 class="text-base font-semibold mb-4 border-b border-gray-100 pb-[10px]">字段配置</h3>
      <div v-if="selectedField" class="properties-form">
        <el-form label-position="top">
          <el-form-item label="标题">
            <el-input v-model="selectedField.label" />
          </el-form-item>
          <el-form-item label="占位提示">
            <el-input v-model="selectedField.placeholder" />
          </el-form-item>
          <el-form-item label="是否必填">
            <el-switch v-model="selectedField.required" />
          </el-form-item>
          <el-divider>字段联动设置</el-divider>
          <el-form-item>
            <template #label>
              <span>
                启用联动
                <el-tooltip content="当前字段会根据其他字段的某个值来判断是否显示" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </span>
            </template>
            <el-switch v-model="selectedField.linkage.enabled" />
          </el-form-item>

          <template v-if="selectedField.linkage.enabled">
            <el-form-item label="选择联动字段">
              <el-select
                :model-value="selectedField && selectedField.linkage ? selectedField.linkage.targetFieldId ?? '' : ''"
                placeholder="选择要关联的字段"
                style="width: 100%"
                clearable
                @update:model-value="val => { if(selectedField && selectedField.linkage) selectedField.linkage.targetFieldId = val }"
              >
                <el-option
                  v-for="field in otherFields"
                  :key="field.id"
                  :label="field.label"
                  :value="String(field.id)"
                />
              </el-select>
            </el-form-item>
            <template v-if="selectedField.linkage.targetFieldId">
              <el-form-item label="当值等于">
                <el-select
                  v-model="selectedField.linkage.targetFieldValue"
                  placeholder="选择触发联动的字段值"
                  style="width: 100%"
                  clearable
                >
                  <el-option
                    v-for="option in linkedFieldOptions"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="联动效果">
                <el-select
                  v-model="selectedField.linkage.effect"
                  placeholder="选择联动效果"
                  style="width: 100%"
                >
                  <el-option label="显示当前字段" value="show" />
                  <el-option label="隐藏当前字段" value="hide" />
                </el-select>
              </el-form-item>
            </template>
          </template>
        </el-form>
      </div>
      <div v-else class="no-selection">
        <p>请选择一个字段进行配置</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import {
  ElInput,
  ElSelect,
  ElSwitch,
  ElForm,
  ElFormItem,
  ElIcon,
  ElButton,
  ElMessageBox,
  ElMessage
} from 'element-plus'
import { Rank, Delete, Plus, QuestionFilled } from '@element-plus/icons-vue'

// --- Types ---
interface FormField {
  id: string
  type: string
  label: string
  placeholder?: string
  required?: boolean
  options?: { label: string; value: any }[]
  linkage: {
    enabled: boolean
    targetFieldId: string | null
    targetFieldValue: any | null
    effect: 'show' | 'hide'
    condition: 'equals' | 'not_equals'
  }
}

interface Placeholder {
  id: string
  type: 'placeholder'
}

type RowItem = FormField | Placeholder

interface FormRow {
  id: string
  fields: RowItem[]
  showPlaceholder?: boolean
}

interface Linkage {
  enabled: boolean
  targetFieldId: string | null
  targetFieldValue: string | null
  effect: 'show' | 'hide'
  condition: 'equals' | 'not_equals'
}

// --- State ---
const availableFields = ref([
  { type: 'text', label: '单行文本' },
  { type: 'textarea', label: '多行文本' },
  {
    type: 'select',
    label: '下拉选择',
    options: [
      { label: '选项一', value: 'option1' },
      { label: '选项二', value: 'option2' }
    ]
  },
  {
    type: 'select',
    label: '证件类型',
    options: [
      { label: '公民身份证', value: 'id_card' },
      { label: '护照', value: 'passport' }
    ]
  },
  { type: 'date', label: '日期选择' }
])

const formRows = ref<FormRow[]>([])
const selectedField = ref<FormField | null>(null)
const isDraggingNewField = ref(false)
let idCounter = 0

// --- State for Save/Load Demo ---
const savedLayout = ref<FormRow[] | null>(null)

// --- Computed ---
const usedFieldTypes = computed(() => {
  return new Set(formRows.value.flatMap((row) => row.fields.map((field) => field.type)))
})

const otherFields = computed(() => {
  if (!selectedField.value) return []
  const allFormFields = formRows.value
    .flatMap((row) => row.fields)
    .filter((field): field is FormField => 'type' in field && (field as FormField).type !== 'placeholder')
  const currentFieldId = selectedField.value.id
  return allFormFields.filter(
    (field) =>
      field.id !== currentFieldId && Array.isArray(field.options) && field.options.length > 0
  )
})

const linkedFieldOptions = computed(() => {
  if (!selectedField.value || !selectedField.value.linkage.targetFieldId) {
    return []
  }
  const allFormFields = formRows.value
    .flatMap((row) => row.fields)
    .filter((field): field is FormField => 'type' in field && (field as FormField).type !== 'placeholder')
  const targetField = allFormFields.find(
    (field) => field.id === selectedField.value!.linkage.targetFieldId
  )
  return targetField?.options || []
})

watch(
  () => selectedField.value?.linkage.targetFieldId,
  (newVal, oldVal) => {
    if (newVal !== oldVal && selectedField.value) {
      selectedField.value.linkage.targetFieldValue = null
    }
  }
)

// --- Drag & Drop Handlers ---

const handleDragStart = (event: DragEvent, field: { type: string }) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('field-type', field.type)
    isDraggingNewField.value = true
  }
}

const handleDragEnd = () => {
  isDraggingNewField.value = false
}

const handleDropOnCanvas = (event: DragEvent) => {
  if (!isDraggingNewField.value) return

  const fieldType = event.dataTransfer?.getData('field-type')
  if (!fieldType) return

  const field = availableFields.value.find((f) => f.type === fieldType)
  if (field && !isFieldUsed(fieldType)) {
    const newField = cloneField(field)
    formRows.value.push({
      id: `row-${++idCounter}`,
      fields: [newField],
      showPlaceholder: false
    })
    selectField(newField)
  }
}

const handleDropOnPlaceholder = (row: FormRow, event: DragEvent) => {
  event.stopPropagation() // Prevent drop event from bubbling up to the canvas
  const fieldType = event.dataTransfer?.getData('field-type')
  if (!fieldType) return

  const field = availableFields.value.find((f) => f.type === fieldType)
  if (field && !isFieldUsed(fieldType)) {
    const newField = cloneField(field)
    row.fields.push(newField)
    row.showPlaceholder = false
  }
}

// --- Layout Management ---

const oneClickLayout = async () => {
  try {
    await ElMessageBox.confirm(
      '此操作将清空当前画布，并自动将所有可用字段按顺序布局。是否继续？',
      '一键布局确认',
      {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )

    const newRows: FormRow[] = []
    selectedField.value = null

    availableFields.value.forEach((field, index) => {
      const newField = cloneField(field)
      newRows.push({
        id: `row-${++idCounter}-${index}`,
        fields: [newField],
        showPlaceholder: false
      })
    })

    formRows.value = newRows
    ElMessage.success('已应用一键布局！')
  } catch (error) {
    if (error === 'cancel') {
      ElMessage.info('已取消一键布局操作。')
    } else {
      console.error('一键布局时出错:', error)
    }
  }
}

const getLayoutData = (): FormRow[] => {
  return JSON.parse(JSON.stringify(formRows.value))
}

const setLayoutData = (data: FormRow[]) => {
  if (!data || !Array.isArray(data)) {
    console.error('加载布局失败：提供了无效的数据。')
    return
  }
  formRows.value = JSON.parse(JSON.stringify(data))
  selectedField.value = null

  // Update idCounter to prevent future ID collisions
  let maxId = 0
  data.forEach((row) => {
    const rowIdNum = parseInt(row.id.split('-')[1])
    if (rowIdNum > maxId) maxId = rowIdNum
    row.fields.forEach((field) => {
      const fieldIdNum = parseInt(field.id.split('-')[1])
      if (fieldIdNum > maxId) maxId = fieldIdNum
    })
  })
  idCounter = maxId
}

const saveLayout = () => {
  const layoutData = getLayoutData()
  savedLayout.value = layoutData
  console.log('保存的布局数据:', layoutData)
  ElMessage.success('布局已保存到控制台！')
}


// --- Helper Methods ---

const cloneField = (field: any) => {
  return {
    ...field,
    id: `field-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
    required: false,
    placeholder: '',
    linkage: {
      enabled: false,
      targetFieldId: null,
      targetFieldValue: null,
      effect: 'show',
      condition: 'equals'
    }
  }
}

const isFieldUsed = (fieldType: string): boolean => {
  return usedFieldTypes.value.has(fieldType)
}

const selectField = (field: FormField) => {
  selectedField.value = field
}

const isRowSelected = (row: FormRow): boolean => {
  return !!(selectedField.value && row.fields.some((f) => (f as FormField).id === selectedField.value!.id))
}

const addColumn = (row: FormRow) => {
  if (row.fields.length < 2) {
    row.showPlaceholder = true
  }
}

const deleteRow = (rowIndex: number) => {
  const deletedRow = formRows.value[rowIndex]
  if (selectedField.value && isRowSelected(deletedRow)) {
    selectedField.value = null
  }
  formRows.value.splice(rowIndex, 1)
}

const deleteField = (row: FormRow, field: RowItem) => {
  const fieldIndex = row.fields.findIndex((f) => (f as FormField).id === (field as FormField).id)
  if (fieldIndex === -1) return

  if (selectedField.value && selectedField.value.id === (field as FormField).id) {
    selectedField.value = null
  }

  row.fields.splice(fieldIndex, 1)
  row.showPlaceholder = false

  if (row.fields.length === 0) {
    const rowIndex = formRows.value.findIndex((r) => r.id === row.id)
    if (rowIndex !== -1) {
      formRows.value.splice(rowIndex, 1)
    }
  }
}

const getFieldComponent = (type: string) => {
  switch (type) {
    case 'select':
      return ElSelect
    case 'date':
      return 'el-date-picker'
    case 'textarea':
      return 'el-input'
    default:
      return ElInput
  }
}

defineExpose({ getLayoutData, setLayoutData, oneClickLayout })
</script>

<style scoped>
.form-builder-container {
  display: flex;
  gap: 16px;
  height: calc(100vh - 200px);
  background-color: #f7f8fa;
  padding: 16px;
}

.panel {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.left-panel {
  width: 200px;
  flex-shrink: 0;
}

.center-panel {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.right-panel {
  width: 280px;
  flex-shrink: 0;
}

.canvas-toolbar {
  margin-bottom: 16px;
  flex-shrink: 0;
}

.canvas-droppable-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.field-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: grab;
  background-color: #fff;
  transition: background-color 0.2s, border-color 0.2s;
}

.field-item:hover {
  border-color: #409eff;
  color: #409eff;
}
.field-item.disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  color: #c0c4cc;
}

.form-canvas {
  flex-grow: 1;
  min-height: calc(100% - 16px);
  padding: 8px;
  border-radius: 4px;
}

.empty-canvas-placeholder {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 2px dashed #dcdfe6;
  border-radius: 4px;
  color: #a8abb2;
  font-size: 14px;
}
.empty-canvas-placeholder .el-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.form-row-wrapper {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  background-color: #fff;
}
.form-row-wrapper.active-row {
  border-color: #409eff;
}
.form-row-wrapper:hover .row-actions {
  opacity: 1;
  top: -15px;
}

.row-actions {
  position: absolute;
  top: -15px;
  right: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #409eff;
  color: white;
  padding: 4px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, top 0.2s;
  z-index: 10;
}
.row-action-icon {
  cursor: pointer;
  padding: 4px;
  font-size: 18px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.row-action-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.row-drag-handle {
  cursor: move;
}
.row-delete-icon:hover {
  color: #fdd;
}

.field-drop-container {
  display: flex;
  gap: 16px;
  width: 100%;
}
.field-drop-zone {
  display: flex;
  gap: 16px;
  flex: 1;
  min-height: 80px;
}

.form-field-col {
  transition: all 0.2s ease-in-out;
  height: 100%;
  flex: 1 1 0;
  min-width: 0;
  display: flex;
}
.form-field-col .form-field-wrapper {
  width: 100%;
}

.placeholder-drop-zone {
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a8abb2;
  cursor: pointer;
}
.placeholder-drop-zone:hover {
  border-color: #409eff;
  color: #409eff;
  background-color: #f0f9ff;
}

.form-field-wrapper {
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  transition: border-color 0.2s, background-color 0.2s;
  height: 100%;
}
.form-field-wrapper:hover {
  background-color: #f5f7fa;
}
.form-field-wrapper.active {
  border-color: #409eff;
  background-color: #ecf5ff;
}

.field-actions {
  position: absolute;
  top: 4px;
  right: 4px;
  display: none;
  gap: 8px;
}
.form-field-wrapper:hover .field-actions,
.form-field-wrapper.active .field-actions {
  display: flex;
}
.delete-icon {
  cursor: pointer;
  color: #f56c6c;
}
.delete-icon:hover {
  color: #f78989;
}

.no-selection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #909399;
  text-align: center;
}
</style>