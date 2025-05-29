<template>
  <div class="w-1/5 bg-white p-4 rounded shadow border">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件" name="components">
        <el-collapse v-model="activeNames">
          <el-collapse-item 
            v-for="section in sections" 
            :key="section.name"
            :title="section.title" 
            :name="section.name">
            <div class="space-y-2">
              <div
                v-for="item in section.list" 
                :key="item.type"
                class="p-2 border rounded cursor-move transition-colors" 
                :class="{ 'opacity-50': isComponentUsed(item.id) }"
                :draggable="!isComponentUsed(item.id)"
                @dragstart="handleDragStart($event, item)" 
                @dragend="handleDragEnd">
                <div class="flex items-center">
                  <el-icon class="mr-2"><component :is="item.icon" /></el-icon>
                  <span>{{ item.label }}</span>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'InfraCreateComponentList' })
import {
  Document,
  List,
  Check,
  Grid
} from '@element-plus/icons-vue'
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
import { useFormDesignerStore } from '@/store/modules/formDesigner';
import { FormDesignerFormItem } from "@/types/formDesigner";

const activeName = ref('components')
const activeNames = ref(['1'])
const { handleDragStart, handleDragEnd } = useFormDesigner()

const { usedComponents } = useFormDesignerStore();

const isComponentUsed = (type) => {
  return usedComponents.has(type);
};

const componentList = shallowRef<FormDesignerFormItem[]>([
  {
    id: '1',
    type: 'input',
    label: '姓名',
    icon: Document,
    props: {
      label: '',
      required: false
    }
  },
  {
    id: '2',
    type: 'select',
    label: '身份',
    icon: List,
    props: {
      label: '',
      required: false,
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
      ]
    }
  },
  {
    id: '3',
    type: 'radio',
    label: '政治面貌',
    icon: Check,
    props: {
      label: '',
      required: false,
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
      ]
    }
  },
  {
    id: '4',
    type: 'checkbox',
    label: '复选框组',
    icon: Check,
    props: {
      label: '',
      required: false,
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
      ]
    }
  },
])
const styleList = shallowRef([
  {
    id: 'grid',
    type: 'grid',
    label: '栅格布局',
    icon: Grid,
    isGrid: true,
    columns: [
      { span: 12 },
      { span: 12 }
    ]
  }
])

const sections = [
  { 
    name: '1', 
    title: '业务组件', 
    list: componentList.value 
  },
  { 
    name: '2', 
    title: '布局组件', 
    list: styleList.value 
  }
]
</script>