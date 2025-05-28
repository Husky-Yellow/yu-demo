export type FormComponentType = 'input' | 'select' | 'radio' | 'checkbox' | 'grid' | 'div'

export interface FormItem {
  type: FormComponentType
  props: Record<string, any>
  placeholder?: string
  isGrid?: boolean
  columns?: FormItem[]
  used?: boolean
}

export type ComponentMap = Record<FormComponentType, string>

const COMPONENT_MAP: ComponentMap = {
  input: 'el-input',
  select: 'el-select',
  radio: 'el-radio-group',
  checkbox: 'el-checkbox-group',
  grid: 'el-row',
  div: 'el-col'
}

/**
 * 表单设计器hook，提供表单构建、拖拽、配置等核心功能
 */
export function useFormDesigner() {
  const formItems = shallowRef<FormItem[]>([]) // 表单项列表，使用shallowRef优化性能
  const selectedItem = ref<FormItem | null>(null) // 当前选中的表单项

  /**
   * 根据组件类型获取对应的Element Plus组件名
   * @param type 组件类型(input/select/radio/checkbox/grid)
   * @returns 对应的Element Plus组件名
   */
  const getComponent = (type: FormComponentType) => COMPONENT_MAP[type] || 'div'

  /**
   * 设置拖拽相关的事件处理器
   * @returns 包含拖拽开始和结束处理器的对象
   */
  const setupDragHandlers = () => {
    /**
     * 拖拽开始事件处理
     * @param event 拖拽事件对象
     * @param item 被拖拽的表单项
     */
    const handleDragStart = (event: DragEvent, item: FormItem) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData(
          'application/json',
          JSON.stringify({
            ...item,
            type: item.type,
            props: { ...item.props },
            isGrid: item.isGrid || false
          })
        )
        event.dataTransfer.effectAllowed = 'move'
      }
      item.used = true
    }

    /**
     * 拖拽结束事件处理
     * @param item 被拖拽的表单项
     */
    const handleDragEnd = (item: FormItem) => {
      if (!item.isGrid) {
        item.used = false
      }
    }

    return { handleDragStart, handleDragEnd }
  }

  const { handleDragStart, handleDragEnd } = setupDragHandlers()

  /**
   * 选中表单项
   * @param item 要选中的表单项
   */
  const selectItem = (item: FormItem) => {
    selectedItem.value = item
  }

  /**
   * 删除表单项
   * @param index 要删除的表单项索引
   */
  const removeItem = (index: number) => {
    const newItems = [...formItems.value] // 创建新数组
    newItems.splice(index, 1) // 修改新数组
    formItems.value = newItems
  }

  /**
   * 处理拖拽放置事件
   * @param event 拖拽事件对象
   * @param rowIndex 行索引(可选)
   * @param colIndex 列索引(可选)
   */
  const handleDrop = (event: DragEvent, rowIndex?: number, colIndex?: number) => {
    event.preventDefault()

    if (!event.dataTransfer) return
    const data = event.dataTransfer.getData('application/json')
    if (!data) return

    const dragItem = JSON.parse(data)
    const newItem = {
      ...dragItem,
      type: dragItem.type,
      props: { ...dragItem.props },
      placeholder: '请输入'
    }

    // 如果是栅格单元格内的拖拽
    if (typeof rowIndex === 'number' && typeof colIndex === 'number') {
      const newItems = [...formItems.value]
      newItems[rowIndex].columns = newItems[rowIndex].columns ? [...newItems[rowIndex].columns] : []
      newItems[rowIndex].columns[colIndex] = newItem
      formItems.value = newItems
    } else {
      // 普通区域的拖拽
      formItems.value = [...formItems.value, newItem]
    }
  }

  /**
   * 删除栅格单元格内的表单项
   * @param rowIndex 行索引
   * @param colIndex 列索引
   */
  const removeGridItem = (rowIndex: number, colIndex: number) => {
    const newItems = [...formItems.value]
    
    if (newItems[rowIndex]?.columns) {
      if (newItems[rowIndex].columns[colIndex]) {
        newItems[rowIndex].columns[colIndex] = {
          type: 'div',
          props: {},
          placeholder: ''
        }
        formItems.value = newItems
      }
    }
    selectedItem.value = null
  }

  const handleDragStartRow = (event: DragEvent, rowIndex: number) => {
    console.log('handleDragStartRow', rowIndex,event);
    
    event.stopImmediatePropagation();
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', rowIndex.toString())
      event.dataTransfer.effectAllowed = 'move'
    }
  }
  
  const handleDragOverRow = (event: DragEvent) => {
    console.log('handleDragOverRow', event);
    event.stopImmediatePropagation();
    event.preventDefault()
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
    }
  }
  
  const handleDropRow = (event: DragEvent, targetRowIndex: number) => {
    console.log('handleDropRow', targetRowIndex,event);
    event.stopImmediatePropagation();
    event.preventDefault()
    
    if (!event.dataTransfer) return
    const sourceRowIndex = parseInt(event.dataTransfer.getData('text/plain'))
    if (isNaN(sourceRowIndex) || sourceRowIndex === targetRowIndex) return
  
    // 移动行
    const newItems = [...formItems.value]
    const [movedItem] = newItems.splice(sourceRowIndex, 1)
    newItems.splice(targetRowIndex, 0, movedItem)
    formItems.value = newItems
  }

  return {
    formItems,
    selectedItem,
    handleDragStart,
    removeItem,
    selectItem,
    removeGridItem,
    handleDragEnd,
    handleDrop,
    getComponent,


    handleDragStartRow,
    handleDragOverRow,
    handleDropRow
  }
}
