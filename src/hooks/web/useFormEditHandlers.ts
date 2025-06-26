import { Ref, ComputedRef, markRaw } from 'vue'
import { ElInput, ElSelect, ElDatePicker, ElUpload, ElInputNumber } from 'element-plus'
import { FieldType } from '@/config/constants/enums/field'
import { LabelDragField } from '@/config/constants/enums/fieldDefault'
import * as LabelApi from '@/api/system/label'

export interface Placeholder {
  id: string
  type: 'placeholder'
}

export type RowItem = LabelDragField | Placeholder

export interface FormRow {
  id: string
  fields: RowItem[]
  showPlaceholder?: boolean // 是否展示占位符 单列多列使用
}

interface UseFormEditHandlersOptions {
  isDraggingNewField: Ref<boolean>
  availableFields: Ref<LabelDragField[]>
  formRows: Ref<FormRow[]>
  selectedField: Ref<LabelDragField | null>
  usedFieldIds: ComputedRef<Set<string>>
}

export function useFormEditHandlers({
  isDraggingNewField,
  availableFields,
  formRows,
  selectedField,
  usedFieldIds,
}: UseFormEditHandlersOptions) {
  const handleDragStart = (event: DragEvent, field: LabelDragField) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('field-id', field.id)
      isDraggingNewField.value = true
    }
  }

  const handleDragEnd = () => {
    isDraggingNewField.value = false
  }

  const handleDropOnCanvas = async (event: DragEvent) => {
    if (!isDraggingNewField.value) return
    const fieldId = event.dataTransfer?.getData('field-id')
    if (!fieldId) return
    const field = availableFields.value.find((f) => f.id === fieldId)
    const detail = await LabelApi.getFieldConfigDetail({ 'id': fieldId as string })
    // 如果是单选、多选、标签，则需要特殊处理 再调接口

    if (field && !isFieldUsed(fieldId)) {

      const fieldConfExtObj = detail.fieldConfExtDOList.find(item => item.name === "textType")?.value

      const newField = cloneField({
        ...detail,
        ...field,
        fieldConfExtObj: {
          value: fieldConfExtObj,
        }
      }) as LabelDragField
      formRows.value.push({
        id: field.id,
        fields: [newField],
        showPlaceholder: false
      })
      selectField(newField)
    }
  }

  const handleDropOnPlaceholder = (row: FormRow, event: DragEvent) => {
    event.stopPropagation()
    const fieldId = event.dataTransfer?.getData('field-id')
    if (!fieldId) return
    const field = availableFields.value.find((f) => f.id === fieldId)
    if (field && !isFieldUsed(fieldId)) {
      const newField = cloneField(field) as LabelDragField
      row.fields.push(newField)
      row.showPlaceholder = false
    }
  }

  const cloneField = (field: LabelDragField) => {
    return {
      ...field,
      id: field.id,
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

  const isFieldUsed = (fieldId: string): boolean => {
    return usedFieldIds.value.has(fieldId)
  }

  const selectField = (field: LabelDragField) => {
    selectedField.value = field
  }

  const isRowSelected = (row: FormRow): boolean => {
    return !!(selectedField.value && row.fields.some((f) => (f as LabelDragField).id === selectedField.value!.id))
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
    const fieldIndex = row.fields.findIndex((f) => (f as LabelDragField).id === (field as LabelDragField).id)
    if (fieldIndex === -1) return
    if (selectedField.value && selectedField.value.id === (field as LabelDragField).id) {
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
  // 单选、多选、标签
  const getFieldComponent = (type: FieldType) => {
    console.log('getFieldComponent', type)
    // 上传组件， 数字组件
    switch (type) {
      case FieldType.TEXT:
        return markRaw(ElInput)
      case FieldType.NUMBER:
        return markRaw(ElInputNumber)
      case FieldType.RADIO:
      case FieldType.CHECKBOX:
        return markRaw(ElSelect)
      case FieldType.DATE:
      case FieldType.DATE_RANGE:
        return markRaw(ElDatePicker)
      case FieldType.ATTACHMENT:
        return markRaw(ElUpload)
      default:
        return markRaw(ElInput)
    }
  }
  // 对于一些特定的，比如文本域，日期区间，需要特殊处理
  const getFieldComponentType = (field: LabelDragField) => {
    console.log('getFieldComponentType', field)

    switch (field.fieldType) {
      case FieldType.TEXT:
        if (field.fieldConfExtObj?.value === 'multi') {
          return {
            type: 'textarea',
            rows: 2
          }
        }
        return null
      case FieldType.DATE_RANGE:
        return {
          type: 'daterange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期'
        }
      default:
        return null
    }
  }

  return {
    isDraggingNewField,
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
  }
}