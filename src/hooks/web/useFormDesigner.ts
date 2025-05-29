import { useFormDesignerStore } from '@/store/modules/formDesigner'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash-es'
import { FormDesignerFormItem } from '@/types/formDesigner'

// 假设这些是您的组件映射和默认属性
const COMPONENT_MAP: Record<string, any> = {
  input: { component: 'el-input', props: { placeholder: '请输入' } },
  select: { component: 'el-select', props: { placeholder: '请选择' } },
  'date-picker': { component: 'el-date-picker', props: { placeholder: '请选择日期' } },
  checkbox: { component: 'el-checkbox', props: { label: '复选框' } },
  radio: { component: 'el-radio', props: { label: '单选框' } },
  slider: { component: 'el-slider', props: { min: 0, max: 100, step: 1 } },
  switch: { component: 'el-switch', props: { label: '开关' } },
  rate: { component: 'el-rate', props: { max: 5 } },
  progress: { component: 'el-progress', props: { percentage: 50 } },
  'time-picker': { component: 'el-time-picker', props: { placeholder: '请选择时间' } }
  // ... 其他组件
}

export function useFormDesigner() {
  /**
   * 记录当前正在拖拽的行索引
   * 用于行重排序功能
   */
  let draggedRowIndex: number | null = null
  /**
   * 获取表单设计器的Pinia存储实例
   */
  const formDesignerStore = useFormDesignerStore()
  /**
   * 从存储中解构响应式状态
   * formItems: 所有表单项数组
   * selectedItem: 当前选中的表单项
   * usedComponents: 已使用组件ID集合
   * currentDraggedComponent: 当前正在拖拽的组件
   */
  const { formItems, currentDraggedComponent } = storeToRefs(formDesignerStore)

  /**
   * 根据组件类型获取对应的实际组件名称
   * 如果找不到对应的组件，则返回'div'作为默认值
   *
   * @param {string} type - 组件类型标识
   * @returns {string} 实际组件名称
   */
  const getComponent = (type: string) => COMPONENT_MAP[type]?.component || 'div'

  /**
   * 处理拖拽开始事件
   * 设置当前被拖拽的组件并配置拖拽效果
   *
   * @param {DragEvent} event - 拖拽事件对象
   * @param {FormDesignerFormItem} component - 被拖拽的组件对象
   */
  const handleDragStart = (event: DragEvent, component: FormDesignerFormItem) => {
    formDesignerStore.setCurrentDraggedComponent(cloneDeep(component))
    event.dataTransfer!.effectAllowed = 'move'
  }

  /**
   * 处理拖拽进入目标区域事件
   * 阻止默认行为并设置拖拽效果为移动
   *
   * @param {DragEvent} event - 拖拽事件对象
   */
  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault()
    event.dataTransfer!.dropEffect = 'move'
  }

  /**
   * 处理拖拽悬停事件
   * 阻止默认行为以允许放置
   *
   * @param {DragEvent} event - 拖拽事件对象
   */
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  /**
   * 处理拖拽结束事件
   * 清空当前拖拽组件状态
   */
  const handleDragEnd = () => {
    formDesignerStore.setCurrentDraggedComponent(null)
  }

  /**
   * 处理组件放置事件
   * 将拖拽的组件添加到表单设计器中
   *
   * @param {DragEvent} event - 拖拽事件对象
   */
  const handleDrop = (event: DragEvent) => {
    event.preventDefault()

    if (currentDraggedComponent.value) {
      const newFormItem: FormDesignerFormItem = currentDraggedComponent.value
      formDesignerStore.addFormItem(newFormItem)
      if (newFormItem.type !== 'grid' && newFormItem.id) {
        formDesignerStore.markComponentUsed(newFormItem.id)
      }
      formDesignerStore.selectItem(newFormItem)
    }
  }

  /**
   * 处理表单项选择事件
   * 设置当前选中的表单项
   *
   * @param {FormDesignerFormItem} item - 要选中的表单项
   */
  const handleSelectItem = (item: FormDesignerFormItem) => {
    formDesignerStore.selectItem(item)
  }

  /**
   * 处理行拖拽开始事件
   * 记录被拖拽行的索引并设置拖拽数据
   *
   * @param {DragEvent} event - 拖拽事件对象
   * @param {number} index - 被拖拽行的索引
   */
  const handleDragStartRow = (event: DragEvent, index: number) => {
    draggedRowIndex = index
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', index.toString())
    }
  }

  /**
   * 处理行拖拽悬停事件
   * 阻止默认行为并设置拖拽效果为移动
   *
   * @param {DragEvent} event - 拖拽事件对象
   */
  const handleDragOverRow = (event: DragEvent) => {
    event.preventDefault()
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
    }
  }

  /**
   * 处理行拖拽放置事件
   * 实现表单项的重新排序
   *
   * @param {DragEvent} event - 拖拽事件对象
   * @param {number} targetIndex - 目标行索引
   */
  const handleDropRow = (event: DragEvent, targetIndex: number) => {
    event.preventDefault()

    if (draggedRowIndex !== null && draggedRowIndex !== targetIndex) {
      // 调用store中的重排序方法
      formDesignerStore.reorderFormItems(draggedRowIndex, targetIndex)
    }

    draggedRowIndex = null
  }

  /**
   * 处理网格内元素的拖拽放置
   * 将组件放置到指定网格的特定列中
   *
   * @param {DragEvent} event - 拖拽事件对象
   * @param {number} gridIndex - 网格行索引
   * @param {number} columnIndex - 网格列索引
   */
  const handleDropGridItem = (event: DragEvent, gridIndex: number, columnIndex: number) => {
    event.preventDefault()

    if (currentDraggedComponent.value) {
      const newFormItem: FormDesignerFormItem = currentDraggedComponent.value

      // 将新元素添加到指定grid的指定列
      const gridItem = formItems.value[gridIndex]
      if (gridItem.isGrid && gridItem.columns) {
        // 替换指定位置的元素
        gridItem.columns.splice(columnIndex, 1, newFormItem)

        // 标记组件已使用并选中
        if (newFormItem.type !== 'grid' && newFormItem.id) {
          formDesignerStore.markComponentUsed(newFormItem.id)
        }
        formDesignerStore.selectItem(newFormItem)
      }
    }

    // 清空拖拽状态
    formDesignerStore.setCurrentDraggedComponent(null)
  }

  return {
    getComponent, // 获取组件名称的方法
    handleDragStart, // 拖拽开始处理
    handleDragEnter, // 拖拽进入处理
    handleDragOver, // 拖拽悬停处理
    handleDragEnd, // 拖拽结束处理
    handleDrop, // 组件放置处理
    handleSelectItem, // 表单项选择处理
    handleDropRow, // 行放置处理
    handleDragOverRow, // 行拖拽悬停处理
    handleDragStartRow, // 行拖拽开始处理
    handleDropGridItem // 网格项放置处理
  }
}
