import { defineStore } from 'pinia';

export interface FormItem {
  id: string;
  type: string;
  label: string;
  icon: string;
  options: Record<string, any>;
  // 更多属性根据实际需求添加
}

export const useFormDesignerStore = defineStore('formDesigner', {
  state: () => ({
    formItems: [] as FormItem[],
    selectedItem: null as FormItem | null,
    usedComponents: new Set<string>()
  }),
  getters: {
    getUsedComponents(): Set<string> {
      return this.usedComponents
    }
  },
  actions: {
    addFormItem(item: FormItem) {
      this.formItems.push(item);
    },
    removeFormItem(id: string) {
      this.formItems = this.formItems.filter(item => item.id !== id);
      if (this.selectedItem && this.selectedItem.id === id) {
        this.selectedItem = null;
      }
    },
    selectItem(item: FormItem | null) {
      this.selectedItem = item;
    },
    updateFormItem(updatedItem: FormItem) {
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
    }
  }
});