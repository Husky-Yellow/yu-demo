import { defineStore } from 'pinia'
import { FormDesignerFormItem, FormDesignerOption } from '@/types/formDesigner'

export const useFormDesignerStore = defineStore('formDesigner', {
  state: () => ({
    formItems: [] as FormDesignerFormItem[], // 存储所有表单项的数组
    selectedItem: undefined as FormDesignerFormItem | undefined, //  当前选中的表单项
    usedComponents: new Set<string>(), // 已使用组件ID的集合，用于跟踪组件使用情况
    currentDraggedComponent: null as FormDesignerFormItem | null // 当前正在拖拽的组件
  }),
  actions: {
    /**
     * 辅助方法：根据ID查找并删除表单项
     * @param id 要删除的表单项ID
     */
    findAndRemove(id: string) {
      const idx = this.formItems.findIndex((item) => item.id === id)
      idx !== -1 && this.formItems.splice(idx, 1)
      this.selectItem(undefined)
    },

    /**
     * 添加表单项到设计器
     * @param item 要添加的表单项
     */
    addFormItem(item: FormDesignerFormItem) {
      this.formItems.push(item)
      console.log('addFormItem', this.formItems);
      
    },

    /**
     * 移除表单项
     * 支持通过对象引用或索引两种方式删除
     * 对于网格项，会同时清理其包含的所有列组件
     * @param item 要删除的表单项对象
     * @param index 要删除的表单项索引
     */
    removeFormItem(item?: FormDesignerFormItem, index: number = -1) {
      if (!item && index === -1) return
      this.selectItem(undefined)
      const id = item?.id
      if (item?.isGrid && item.columns?.length) {
        item.columns
          .map((column) => column.id)
          .filter(Boolean)
          .forEach((columnId) => {
            columnId && this.usedComponents.delete(columnId)
          })
        id && this.findAndRemove(id)
      } // 处理普通项
      else if (id) {
        this.findAndRemove(id)
        this.usedComponents.delete(id)
      }
      // 按索引删除
      else if (index !== -1 && index < this.formItems.length) {
        this.formItems.splice(index, 1)
      }
    },

    /**
     * 选中指定的表单项
     * @param item 要选中的表单项，传undefined则清除选中状态
     */
    selectItem(item: FormDesignerFormItem | undefined) {
      this.selectedItem = item
    },

    /**
     * 更新表单项
     * 根据ID查找并替换表单项
     * @param updatedItem 更新后的表单项
     */
    updateFormItem(updatedItem: FormDesignerFormItem) {
      const index = this.formItems.findIndex((item) => item.id === updatedItem.id)
      if (index !== -1) {
        this.formItems.splice(index, 1, updatedItem)
      }
    },

    /**
     * 标记组件为已使用状态
     * @param componentId 组件ID
     */
    markComponentUsed(componentId: string) {
      this.usedComponents.add(componentId)
    },

    /**
     * 标记组件为未使用状态
     * @param componentId 组件ID
     */
    markComponentUnused(componentId: string) {
      this.usedComponents.delete(componentId)
    },

    /**
     * 清空表单设计器
     * 重置所有状态到初始值
     */
    clearFormDesigner() {
      this.formItems = []
      this.selectedItem = undefined
      this.usedComponents.clear()
    },

    /**
     * 设置当前正在拖拽的组件
     * @param value 拖拽的组件对象或null
     */
    setCurrentDraggedComponent(value: FormDesignerFormItem | null) {
      this.currentDraggedComponent = value
    },

    /**
     * 为选中的表单项添加选项
     * 主要用于下拉框、单选框等需要选项的组件
     * @param option 要添加的选项
     */
    addOptionToSelectedItem(option: Record<string, any>) {
      if (this.selectedItem) {
        if (!this.selectedItem.props) {
          this.selectedItem.props = {}
        }
        if (!this.selectedItem.props.options) {
          this.selectedItem.props.options = []
        }
        this.selectedItem.props.options = [
          ...this.selectedItem.props.options,
          option as FormDesignerOption
        ]
      }
    },

    /**
     * 从选中的表单项中移除指定索引的选项
     * @param optionKey 要移除的选项索引
     */
    removeOptionFromSelectedItem(optionKey: number) {
      if (this.selectedItem) {
        if (this.selectedItem.props?.options) {
          this.selectedItem.props.options = this.selectedItem.props.options.filter(
            (_, index) => index !== optionKey
          )
        }
      }
    },
    /**
     * 重新排序表单项
     * @param fromIndex 源索引
     * @param toIndex 目标索引
     */
    reorderFormItems(fromIndex: number, toIndex: number) {
      if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= this.formItems.length ||
        toIndex >= this.formItems.length
      ) {
        return
      }
      // 直接在原数组上操作以确保响应式更新
      const [movedItem] = this.formItems.splice(fromIndex, 1)
      this.formItems.splice(toIndex, 0, movedItem)
    },
    /**
     * 删除网格中的某个元素
     * 特点是保留DOM结构，只清空内容
     * @param gridIndex 网格行索引
     * @param columnIndex 列索引
     */
    removeGridItem(gridIndex: number, columnIndex: number) {
      console.log(gridIndex, columnIndex)

      if (gridIndex >= 0 && gridIndex < this.formItems.length) {
        const gridItem = this.formItems[gridIndex]
        if (
          gridItem.isGrid &&
          gridItem.columns &&
          columnIndex >= 0 &&
          columnIndex < gridItem.columns.length
        ) {
          // 获取要删除的元素
          const removedItem = gridItem.columns[columnIndex]

          // 增强的usedComponents清理逻辑
          if (removedItem) {
            // 如果有id，从usedComponents中删除
            if (removedItem.id) {
              this.usedComponents.delete(removedItem.id)
            }

            // 清空选中状态
            if (this.selectedItem && this.selectedItem.id === removedItem.id) {
              this.selectItem(undefined)
            }
          }

          // 不删除元素，而是重置为空对象，保留DOM结构
          gridItem.columns[columnIndex] = {
            id: '',
            type: 'div',
            icon: undefined,
            label: '',
            props: {}
          }
        }
      }
    }
  }
})
