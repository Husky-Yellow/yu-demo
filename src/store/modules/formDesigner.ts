import { defineStore } from 'pinia';
import { FormDesignerFormItem, FormDesignerOption } from "@/types/formDesigner";


export const useFormDesignerStore = defineStore('formDesigner', {
  state: () => ({
    formItems: [] as FormDesignerFormItem[],
    selectedItem: null as FormDesignerFormItem | null,
    usedComponents: new Set<string>(),
    currentDraggedComponent: null as FormDesignerFormItem | null, // 拖拽相关状态，现在由
  }),
  getters: {
    getUsedComponents(): Set<string> {
      return this.usedComponents
    },
    getCurrentDraggedComponent(): FormDesignerFormItem | null {
      return this.currentDraggedComponent
    }
  },
  actions: {
    addFormItem(item: FormDesignerFormItem) {
      this.formItems.push(item);
    },
    removeFormItem(id: string) {
      this.formItems = this.formItems.filter(item => item.id !== id);
      if (this.selectedItem && this.selectedItem.id === id) {
        this.selectedItem = null;
      }
    },
    selectItem(item: FormDesignerFormItem | null) {
      this.selectedItem = item;
    },
    updateFormItem(updatedItem: FormDesignerFormItem) {
      const index = this.formItems.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.formItems.splice(index, 1, updatedItem);
      }
    },
    markComponentUsed(componentType: string) {
      this.usedComponents.add(componentType);
    },
    markComponentUnused(componentType: string) {
      this.usedComponents.delete(componentType);
    },
    clearFormDesigner() {
      this.formItems = [];
      this.selectedItem = null;
      this.usedComponents.clear();
    },
    setCurrentDraggedComponent(value: FormDesignerFormItem | null) {
      this.currentDraggedComponent = value;
    },
    addOptionToSelectedItem(option: Record<string, any>) {
      if (this.selectedItem) {
        if (!this.selectedItem.props) {
          this.selectedItem.props = {};
        }
        if (!this.selectedItem.props.options) {
          this.selectedItem.props.options = [];
        }
        this.selectedItem.props.options = [...this.selectedItem.props.options, option as FormDesignerOption];
      }
    },
    removeOptionFromSelectedItem(optionKey: number) {
      if (this.selectedItem) {
        if (this.selectedItem.props?.options) {
          this.selectedItem.props.options = this.selectedItem.props.options.filter((_, index) => index !== optionKey);
        }
      }
    }
  }
});