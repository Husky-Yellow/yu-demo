<template>
  <div class="container flex gap-2">
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
    <el-form class="container flex gap-4 border rounded-lg" disabled>
      <div class="flex-1 bg-white p-1 rounded shadow min-h-[600px] border">
        <div class="p-1 min-h-[760px]" @dragover.prevent @drop="(e) => handleDrop(e)">
          <template v-if="formItems.length === 0">
            <div class="h-full flex items-center justify-center text-gray-400"> 拖拽组件到这里 </div>
          </template>
          <div v-else class="space-y-4">
            <div class="relative">
              <div
                v-for="(row, rowIndex) in formItems"
                :key="rowIndex"
                class="border-2 border-dashed relative border-gray-300 relative m-t-4 grid gap-2"
                :class="[row.isGrid ? 'grid-row grid-cols-[20px_1fr_1fr] min-h-[100px]' : 'form-row grid-cols-[20px_1fr]']"
                @click="selectItem(row)"
                draggable="true"
                @dragstart.stop="(e) => handleDragStartRow(e, rowIndex)"
                @dragover.prevent.stop="handleDragOverRow"
                @drop.stop="(e) => handleDropRow(e, rowIndex)"
              >
                <template v-if="row.isGrid">
                  <div class="drag-handle cursor-move flex items-center h-full">
                    <el-icon><Rank /></el-icon>
                  </div>
                  <div
                    v-for="(item, colIndex) in row.columns"
                    :key="colIndex"
                    class="grid-item relative p-2 border rounded border-2 border-dashed border-gray-300"
                    @dragover.prevent.stop
                    @drop.stop="(e) => handleDropGridItem(e, rowIndex, colIndex)"
                  >
                    <FormItemRenderer :item="item" :index="colIndex" @select="selectItem(row)" />
                    <div
                      class="grid-item-tools absolute top-0 right-0 shadow-sm rounded-bl p-1"
                    >
                      <el-button
                        type="danger"
                        size="small"
                        :icon="Delete"
                        circle
                        @click="removeGridItem(rowIndex, colIndex)"
                      />
                    </div>
                  </div>
                  <div class="absolute -top-5 -right-4 p-1">
                    <el-button size="small" type="danger" :icon="Delete" circle @click="removeFormItem(row, rowIndex)" />
                  </div>
                </template>
                <template v-else>
                  <div class="drag-handle cursor-move p-t-1">
                    <el-icon><Rank /></el-icon>
                  </div>
                  <FormItemRenderer :key="rowIndex" :item="row" :index="rowIndex" @select="selectItem(row)">
                    <template #delete-btn>
                      <div class="absolute -top-5 -right-4 p-1">
                        <el-button
                          type="danger"
                          size="small"
                          :icon="Delete"
                          circle
                          @click.stop="removeFormItem(row)"
                        />
                      </div>
                    </template>
                  </FormItemRenderer>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  List,
  Check,
  Grid,
  Delete, 
  Rank 
} from '@element-plus/icons-vue'
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
import { useFormDesignerStore } from '@/store/modules/formDesigner';
import { FormDesignerFormItem } from "@/types/formDesigner";
import { storeToRefs } from 'pinia'
import FormItemRenderer from '@/components/FormDesigner/src/components/FormItemRenderer.vue'

const activeName = ref('components')
const activeNames = ref(['1'])
const { 
  handleDragStart, 
  handleDragEnd,   
  handleDrop,
  handleDragStartRow,
  handleDragOverRow,
  handleDropRow,
  handleDropGridItem 
} = useFormDesigner()


const store = useFormDesignerStore()
const { formItems, usedComponents } = storeToRefs(store)
const { selectItem, removeFormItem, removeGridItem } = store

const isComponentUsed = (type) => {
  return usedComponents.value.has(type);
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
const styleList = shallowRef<FormDesignerFormItem[]>([
  {
    id: 'grid',
    type: 'grid',
    label: '栅格布局',
    icon: Grid,
    isGrid: true,
    columns: [
      {
        span: 12,
        type: 'number',
        props: undefined,
        icon: undefined
      },
      {
        span: 12,
        type: 'number',
        props: {
          label: '',
        },
        icon: undefined
      }
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

<style scoped>
</style>