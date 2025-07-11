import { ref, computed } from 'vue'
import Sortable from 'sortablejs'
import type { TableInstance } from 'element-plus'
import * as FieldConfApi from '@/api/system/data/field-conf'
import { generateUUID } from '@/utils'
import { BooleanEnum } from '@/config/constants/enums/label'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { omit } from 'lodash-es'

// 类型定义
export interface FieldTableData extends LabelFieldConfig {
  uuid: string
}

/**
 * 字段管理组合式函数
 * @param manageId 管理ID
 * @returns 字段管理相关的状态和方法
 */
export const useFieldManagement = (manageId: string) => {
  const message = useMessage()

  const tableRef = ref<TableInstance | null>(null)
  const multipleSelection = ref<LabelFieldConfig[]>([])
  const sortable = ref<Sortable | null>(null)
  const tableData = ref<FieldTableData[]>([])
  const isLoading = ref(false)

  // 计算属性
  const filteredTableData = computed(() =>
    tableData.value.filter(item => item.parentCode === '0')
  )

  const canEdit = computed(() => multipleSelection.value.length === 1)

  const canDelete = computed(() => {
    const selection = multipleSelection.value[0]
    return multipleSelection.value.length === 1 && !selection?.id
  })

  const selectable = (row: LabelFieldConfig): boolean =>
    ![BooleanEnum.TRUE].includes(row.bizType)

  /**
   * 获取字段配置列表
   */
  const getDataFieldConfListByManageId = async (): Promise<void> => {
    isLoading.value = true
    try {
      const res = await FieldConfApi.getFieldConfigList({ manageId })
      tableData.value = (res || []).map(item => ({
        ...item,
        uuid: item.id ? item.id : generateUUID()
      }))
    } catch (error) {
      console.error('获取字段配置列表失败:', error)
      message.error('获取数据失败，请稍后重试')
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 初始化拖拽排序
   */
  const initSortable = (): void => {
    nextTick(() => {
      const tableEl = (tableRef.value as any)?.$el.querySelector(
        '.field-sortable-table-container .el-table__body-wrapper tbody'
      )

      if (tableEl && !sortable.value) {
        sortable.value = new Sortable(tableEl, {
          animation: 150,
          handle: '.el-table__row',
          ghostClass: 'sortable-ghost',
          chosenClass: 'sortable-chosen',
          dragClass: 'sortable-drag',
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt
            if (oldIndex !== newIndex && oldIndex !== null && newIndex !== null) {
              const item = tableData.value.splice(oldIndex, 1)[0]
              tableData.value.splice(newIndex, 0, item)
            }
          }
        })
      }
    })
  }

  /**
   * 销毁拖拽排序
   */
  const destroySortable = (): void => {
    if (sortable.value) {
      sortable.value.destroy()
      sortable.value = null
    }
  }

  /**
   * 保存表格数据
   */
  const saveTableData = async (): Promise<boolean> => {
    const data = tableData.value.map((item, index) =>
      omit({ ...item, sort: index + 1 }, ['uuid'])
    )

    isLoading.value = true

    try {
      await FieldConfApi.updateFieldConfigList(data)
      message.success('保存成功')
      await getDataFieldConfListByManageId()
      return true
    } catch (error) {
      console.error('保存失败:', error)
      message.error('保存失败，请稍后重试')
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    tableRef,
    multipleSelection,
    tableData,
    isLoading,
    filteredTableData,
    canEdit,
    canDelete,
    selectable,
    getDataFieldConfListByManageId,
    initSortable,
    destroySortable,
    saveTableData
  }
}