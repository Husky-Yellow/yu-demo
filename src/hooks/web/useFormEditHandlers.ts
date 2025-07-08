import { Ref, ComputedRef } from 'vue'
import { FieldType, TextTypeOptions } from '@/config/constants/enums/field'
import { LabelDragField } from '@/config/constants/enums/fieldDefault'
import * as LabelApi from '@/api/system/label'
import { convertArrayToObject } from '@/utils'



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

/**
 * 表单编辑处理
 * @param isDraggingNewField 是否拖拽新字段
 * @param availableFields 可用字段
 * @param formRows 表单行
 * @param selectedField 选中的字段
 * @param usedFieldIds 已使用的字段ID
 */
export function useFormEditHandlers({
  isDraggingNewField,
  availableFields,
  formRows,
  selectedField,
  usedFieldIds,
}: UseFormEditHandlersOptions) {
  /**
   * 拖拽开始
   * @param event 事件
   * @param field 字段
   */
  const handleDragStart = (event: DragEvent, field: LabelDragField) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('field-id', field.id)
      isDraggingNewField.value = true
    }
  }

  /**
   * 拖拽结束
   */
  const handleDragEnd = () => {
    isDraggingNewField.value = false
  }

  /**
   * 拖拽到画布
   * @param event 事件
   */
  const handleDropOnCanvas = async (event: DragEvent) => {
    if (!isDraggingNewField.value) return
    const fieldId = event.dataTransfer?.getData('field-id')
    if (!fieldId) return
    const field = availableFields.value.find((f) => f.id === fieldId)
    // 获取字段详情
    const detail = await LabelApi.getFieldConfigDetail({ 'id': fieldId as string })
    // todo zhaokun 如果是单选、多选、则需要特殊处理 再调词典查询接口
    if (detail.fieldType === FieldType.RADIO || detail.fieldType === FieldType.CHECKBOX) {
      // const data = await DictTypeApi.getDictDataPage({
      //   pageNo: 1,
      //   pageSize: 10,
      //   dictType: detail.name,
      // })
      // console.log('res', data)
    }

    if (field && !isFieldUsed(fieldId)) {

      const fieldConfExtObj = convertArrayToObject(detail.fieldConfExtDOList)

      const newField = cloneField({
        ...detail,
        ...field,
        fieldConfExtObj
      }) as LabelDragField
      formRows.value.push({
        id: field.id,
        fields: [newField],
        showPlaceholder: false
      })
      selectField(newField)
    }
  }

  /**
   * 拖拽到占位符
   * @param row 行
   * @param event 事件
   */
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

  /**
   * 克隆字段
   * @param field 字段
   * @returns 克隆后的字段
   */
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

  /**
   * 判断字段是否被使用
   * @param fieldId 字段ID
   * @returns 是否被使用
   */
  const isFieldUsed = (fieldId: string): boolean => {
    return usedFieldIds.value.has(fieldId)
  }

  /**
   * 选择字段
   * @param field 字段
   */
  const selectField = (field: LabelDragField) => {
    selectedField.value = field
  }


  /**
   * 判断行是否被选中
   * @param row 行
   * @returns 是否被选中
   */
  const isRowSelected = (row: FormRow): boolean => {
    return !!(selectedField.value && row.fields.some((f) => (f as LabelDragField).id === selectedField.value!.id))
  }

  /**
   * 添加列
   * @param row 行
   */
  const addColumn = (row: FormRow) => {
    if (row.fields.length < 2) {
      row.showPlaceholder = true
    }
  }

  /**
   * 删除行
   * @param rowIndex 行索引
   */
  const deleteRow = (rowIndex: number) => {
    const deletedRow = formRows.value[rowIndex]
    if (selectedField.value && isRowSelected(deletedRow)) {
      selectedField.value = null
    }
    formRows.value.splice(rowIndex, 1)
  }

  /**
   * 删除字段
   * @param row 行
   * @param field 字段
   */
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
  }
}