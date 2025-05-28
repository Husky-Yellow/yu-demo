import { useFormDesignerStore, FormItem } from '@/store/modules/formDesigner';
import { storeToRefs } from 'pinia';
import { cloneDeep } from 'lodash-es';

// 假设这些是您的组件映射和默认属性
const COMPONENT_MAP: Record<string, any> = {
  // ... 您的组件映射，例如：
  'input': { component: 'el-input', props: { placeholder: '请输入' } },
  'select': { component: 'el-select', props: { placeholder: '请选择' } },
  // ... 其他组件
};

export function useFormDesigner() {
  const formDesignerStore = useFormDesignerStore();
  const { formItems, selectedItem, usedComponents } = storeToRefs(formDesignerStore);

  // 拖拽相关状态，现在由 Pinia 管理
  const currentDraggedComponent = ref<FormItem | null>(null);

  // 计算属性，直接从 store 获取
  const getComponent = (type: string) => COMPONENT_MAP[type]?.component || 'div';

  // 拖拽开始事件
  const handleDragStart = (event: DragEvent, component: FormItem) => {
    console.group('handleDragStart');
    console.log(component);
    currentDraggedComponent.value = cloneDeep(component);
    event.dataTransfer!.effectAllowed = 'move';
    console.groupEnd();
  };

  // 拖拽进入目标区域事件
  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
  };

  // 拖拽悬停事件
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  // 拖拽结束事件
  const handleDragEnd = (event: DragEvent) => {
    currentDraggedComponent.value = null;
  };

  // 放置组件事件
  const handleDrop = (event: DragEvent) => {
    console.groupEnd();
    console.group('111111111');
    console.log(currentDraggedComponent.value);
    
    event.preventDefault();
    if (currentDraggedComponent.value) {
      const newFormItem: FormItem = {
        ...currentDraggedComponent.value,
        id: Date.now().toString(), // 简单的唯一ID生成
      };
      console.log(newFormItem);
      
      formDesignerStore.addFormItem(newFormItem);
      formDesignerStore.markComponentUsed(newFormItem.type);
      formDesignerStore.selectItem(newFormItem);
    }
    console.groupEnd();
  };

  // 选择表单项
  const handleSelectItem = (item: FormItem) => {
    formDesignerStore.selectItem(item);
  };

  // 删除表单项
  const handleDeleteItem = (id: string) => {
    formDesignerStore.removeFormItem(id);
  };

  // 清空表单
  const handleClearForm = () => {
    formDesignerStore.clearFormDesigner();
  };

  // 更新表单项属性
  const handleUpdateItem = (updatedItem: FormItem) => {
    formDesignerStore.updateFormItem(updatedItem);
  };

  return {
    formItems,
    selectedItem,
    usedComponents,
    getComponent,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragEnd,
    handleDrop,
    handleSelectItem,
    handleDeleteItem,
    handleClearForm,
    handleUpdateItem,
  };
}