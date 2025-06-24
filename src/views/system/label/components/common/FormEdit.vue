<template>
  <el-radio-group v-show="tab.name === 'formEdit'" v-model="activeMode" @change="fetchFormData">
    <el-radio-button :value="1">新增表单</el-radio-button>
    <el-radio-button :value="2">编辑表单</el-radio-button>
  </el-radio-group>
  <div v-loading="loading" class="flex gap-4 h-[calc(100vh-200px)] bg-gray-100 p-2 mt-2">
    <div class="w-50 flex-shrink-0 bg-white rounded shadow-sm p-4 h-full overflow-y-auto">
      <h3 class="text-base font-semibold border-b border-gray-100 pb-[10px]">数据字段</h3>
      <div class="flex flex-col">
        <FieldPoolItem
          v-for="element in availableFields"
          :key="element.id"
          :draggable="!isFieldUsed(element.id!)"
          @dragstart="handleDragStart($event, element)"
          @dragend="handleDragEnd"
          :hasKeyString="'id'"
          :element="element"
          :isFieldUsed="isFieldUsed"
        />
      </div>
    </div>

    <!-- Center Panel: Form Canvas -->
    <div class="bg-white rounded shadow-sm p-4 h-full overflow-y-auto flex-grow flex flex-col">
      <div class="mb-4 flex-shrink-0">
        <el-button type="success" @click="oneClickLayout">一键布局</el-button>
        <el-button type="primary" @click="viewLinkage">查看关联关系</el-button>
      </div>
      <div class="flex-grow flex flex-col" @dragover.prevent @drop="handleDropOnCanvas">
        <draggable
          v-if="formRows.length > 0"
          v-model="formRows"
          class="flex-grow min-h-[calc(100%-16px)] p-2 rounded"
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
                <el-icon title="拖拽整行" class="row-action-icon row-drag-handle">
                  <Rank />
                </el-icon>
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
                        <el-form-item :label="field.name" :required="field.required">
                          <component
                            :is="getFieldComponent(field.fieldType)"
                            v-bind="getFieldComponentType(field)"
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
                  <el-icon>
                    <Plus />
                  </el-icon>
                  <span>将字段拖到此处</span>
                </div>
              </div>
            </div>
          </template>
        </draggable>
        <div
          v-else
          class="empty-canvas-placeholder flex-grow flex flex-col justify-center items-center h-full border-2 border-dashed border-gray-300 rounded text-gray-500 text-sm"
        >
          <el-icon>
            <Plus />
          </el-icon>
          <span>将左侧字段拖到此处创建新行</span>
        </div>
      </div>
    </div>

    <div
      v-show="tab.name === 'formEdit'"
      class="w-[280px] flex-shrink-0 bg-white rounded shadow-sm p-4 h-full overflow-y-auto"
    >
      <h3 class="text-base font-semibold mb-4 border-b border-gray-100 pb-[10px]">字段配置</h3>
      <div v-if="selectedField">
        <FieldPropertyForm
          :field="selectedField"
          :other-fields="otherFields"
          :linked-field-options="linkedFieldOptions"
          @update:field="updateField"
        />
      </div>
      <div v-else class="flex justify-center items-center h-full text-gray-400 text-center">
        <p>请选择一个字段进行配置</p>
      </div>
    </div>
  </div>
  <LinkageRelationDialog
    v-model="linkageRelationDialogVisible"
    :form-rows="formRows"
  />
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import draggable from 'vuedraggable'
import { ElFormItem, ElIcon, ElButton, ElMessageBox, ElMessage } from 'element-plus'
import { Rank, Delete, Plus } from '@element-plus/icons-vue'
import { useFormEditHandlers, FormRow } from '@/hooks/web/useFormEditHandlers'
import type {  LabelDragField } from '@/config/constants/enums/fieldDefault'
import FieldPropertyForm from './FieldPropertyForm.vue'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import LinkageRelationDialog from './LinkageRelationDialog.vue'

const props = defineProps({
  tab: {
    type: Object,
    required: true
  }
})

const { query } = useRoute() // 查询参数
const activeMode = ref<0| 1 | 2>(1) // 0 编辑 1 为新增 2 为详情

const availableFields = ref<LabelDragField[]>([])

const formRows = ref<FormRow[]>([])
const formData = ref<any>(null) // 接口返回来的表单配置 null 为需要调创建
const linkageRelationDialogVisible = ref(false)
const selectedField = ref<LabelDragField | null>(null)
const isDraggingNewField = ref(false)
const loading = ref(false)

const usedFieldIds = computed(() => {
  return new Set(formRows.value.flatMap((row) => row.fields.map((field) => field.id)))
})

const otherFields = computed(() => {
  if (!selectedField.value) return []
  const allFormFields = formRows.value
    .flatMap((row) => row.fields)
    .filter(
      (field): field is LabelDragField => 'type' in field && (field as LabelDragField).type !== 'placeholder'
    )
  const currentFieldId = selectedField.value.id
  return allFormFields.filter(
    (field) =>
      field.id !== currentFieldId && Array.isArray(field.fieldConfExtObj?.options) && field.fieldConfExtObj?.options.length > 0
  )
})

const linkedFieldOptions = computed(() => {
  if (!selectedField.value || !selectedField.value.linkage.targetFieldId) {
    return []
  }
  const allFormFields = formRows.value
    .flatMap((row) => row.fields)
    .filter(
      (field): field is LabelDragField => 'type' in field && (field as LabelDragField).type !== 'placeholder'
    )
  const targetField = allFormFields.find(
    (field) => field.id === selectedField.value!.linkage.targetFieldId
  )
  return targetField?.fieldConfExtObj?.options || []
})

watch(
  () => selectedField.value?.linkage.targetFieldId,
  (newVal, oldVal) => {
    if (newVal !== oldVal && selectedField.value) {
      selectedField.value.linkage.targetFieldValue = null
    }
  }
)

const {
  handleDragStart,
  handleDragEnd,
  handleDropOnCanvas,
  handleDropOnPlaceholder,
  cloneField,
  isFieldUsed,
  selectField,
  isRowSelected,
  addColumn,
  deleteRow,
  deleteField,
  getFieldComponent,
  getFieldComponentType
} = useFormEditHandlers({
  isDraggingNewField,
  availableFields,
  formRows,
  selectedField,
  usedFieldIds
})

const viewLinkage = () => {
  linkageRelationDialogVisible.value = true
}

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
    selectedField.value = null

    const details = await Promise.all(
      availableFields.value.map(field =>
        LabelApi.getFieldConfigDetail({ id: field.id as string })
      )
    )

    // 构建新行
    const newRows: FormRow[] = details.map((detail, idx) => {
      const field = availableFields.value[idx]
      const fieldConfExtObj = detail.fieldConfExtDOList.find(item => item.name === "textType")?.value

      const newField = cloneField({
        ...detail,
        ...field,
        fieldConfExtObj: { value: fieldConfExtObj }
      }) as LabelDragField

      return {
        id: field.id,
        fields: [newField],
        showPlaceholder: false
      }
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
  let maxId = 0
  data.forEach((row) => {
    const rowIdNum = parseInt(row.id.split('-')[1])
    if (rowIdNum > maxId) maxId = rowIdNum
    row.fields.forEach((field) => {
      const fieldIdNum = parseInt(field.id.split('-')[1])
      if (fieldIdNum > maxId) maxId = fieldIdNum
    })
  })
}

const updateField = (field: LabelDragField) => {
  // 改变选中字段的属性
  if (selectedField.value) {
    Object.assign(selectedField.value, field)
  }
}

const submitForm = async () => {
  const layoutData = getLayoutData()
  console.log('保存的布局数据:', layoutData)
  ElMessage.success('布局已保存到控制台！')
  loading.value = true
  try {
    const params = {
      manageId: query.labelId as string,
      formType: props.tab.name === 'formEdit' ? activeMode.value : 0,
      formJson: JSON.stringify(layoutData)
    }
    if (!formData.value?.id) {
      const id = await LabelApi.createViewFormConf(params)
      formData.value.id = id
    } else {
      await LabelApi.updateViewFormConf({ ...params, id: formData.value.id as string })
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

const fetchFormData = async () => {
  availableFields.value = []
  formRows.value = []
  formData.value = null
  linkageRelationDialogVisible.value = false
  selectedField.value = null
  isDraggingNewField.value = false


  loading.value = true
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId: query.labelId as string
  })
  const formConfData = await LabelApi.getViewFormConf({
    manageId: query.labelId as string,
    formType: props.tab.name === 'formEdit' ? activeMode.value : 0,
    id: query.id as string
  })
  availableFields.value = res
  formData.value = formConfData
  if (formConfData) {
    setLayoutData(JSON.parse(formConfData.formJson))
  }
  loading.value = false
}

// 生命周期钩子
onMounted(() => {
  fetchFormData()
})

defineExpose({ getLayoutData, setLayoutData, submitForm })
</script>

<style scoped>
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
  transition:
    opacity 0.2s,
    top 0.2s;
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
  min-height: 60px;
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
  padding: 12px 12px 0 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  transition:
    border-color 0.2s,
    background-color 0.2s;
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
  z-index: 1;
}
.delete-icon:hover {
  color: #f78989;
}
</style>
