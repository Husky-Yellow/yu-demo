import { useFormDesignerStore } from '@/store/modules/formDesigner';
import { storeToRefs } from 'pinia';
import { cloneDeep } from 'lodash-es';
import { FormDesignerFormItem } from "@/types/formDesigner";


// 假设这些是您的组件映射和默认属性
const COMPONENT_MAP: Record<string, any> = {
  // ... 您的组件映射，例如：
  'input': { component: 'el-input', props: { placeholder: '请输入' } },
  'select': { component: 'el-select', props: { placeholder: '请选择' } },
  'date-picker': { component: 'el-date-picker', props: { placeholder: '请选择日期' } },
  'checkbox': { component: 'el-checkbox', props: { label: '复选框' } },
  'radio': { component: 'el-radio', props: { label: '单选框' } },
  'slider': { component: 'el-slider', props: { min: 0, max: 100, step: 1 } },
  'switch': { component: 'el-switch', props: { label: '开关' } },
  'rate': { component: 'el-rate', props: { max: 5 } },
  'progress': { component: 'el-progress', props: { percentage: 50 } },
  'time-picker': { component: 'el-time-picker', props: { placeholder: '请选择时间' } },
  // ... 其他组件
};

export function useFormDesigner() {
  const formDesignerStore = useFormDesignerStore();
  const { formItems, selectedItem, usedComponents, currentDraggedComponent,  } = storeToRefs(formDesignerStore);

  // 计算属性，直接从 store 获取
  const getComponent = (type: string) => COMPONENT_MAP[type]?.component || 'div';

  // 拖拽开始事件
  const handleDragStart = (event: DragEvent, component: FormDesignerFormItem) => {
    formDesignerStore.setCurrentDraggedComponent(cloneDeep(component));
    event.dataTransfer!.effectAllowed = 'move';
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
  const handleDragEnd = () => {
    formDesignerStore.setCurrentDraggedComponent(null);
  };

  // 放置组件事件
  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    
    if (currentDraggedComponent.value) {
      const newFormItem: FormDesignerFormItem = {
        ...currentDraggedComponent.value,
        id: Date.now().toString(), // 简单的唯一ID生成
      };
      formDesignerStore.addFormItem(newFormItem);
      formDesignerStore.markComponentUsed(newFormItem.type);
      formDesignerStore.selectItem(newFormItem);
    }
  };

  // 选择表单项
  const handleSelectItem = (item: FormDesignerFormItem) => {
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
  const handleUpdateItem = (updatedItem: FormDesignerFormItem) => {
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