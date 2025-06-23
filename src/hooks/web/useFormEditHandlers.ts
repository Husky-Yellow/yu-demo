import { Ref, ComputedRef } from 'vue'
import { ElInput, ElSelect } from 'element-plus'

// --- Types ---
export interface FormField {
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

export interface Placeholder {
  id: string
  type: 'placeholder'
}

export type RowItem = FormField | Placeholder

export interface FormRow {
  id: string
  fields: RowItem[]
  showPlaceholder?: boolean
}

interface UseFormEditHandlersOptions {
  availableFields: Ref<any[]>
  formRows: Ref<FormRow[]>
  selectedField: Ref<FormField | null>
  usedFieldIds: ComputedRef<Set<string>>
}

export function useFormEditHandlers({
  availableFields,
  formRows,
  selectedField,
  usedFieldIds,
}: UseFormEditHandlersOptions) {
  const isDraggingNewField = { value: false }

  const handleDragStart = (event: DragEvent, field: { id: string }) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('field-id', field.id)
      isDraggingNewField.value = true
    }
  }

  const handleDragEnd = () => {
    isDraggingNewField.value = false
  }

  const handleDropOnCanvas = (event: DragEvent) => {
    if (!isDraggingNewField.value) return
    const fieldId = event.dataTransfer?.getData('field-id')
    if (!fieldId) return
    const field = availableFields.value.find((f) => f.id === fieldId)
    if (field && !isFieldUsed(fieldId)) {
      const newField = cloneField(field)
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
      const newField = cloneField(field)
      row.fields.push(newField)
      row.showPlaceholder = false
    }
  }

  const cloneField = (field: any) => {
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
    getFieldComponent
  }
}