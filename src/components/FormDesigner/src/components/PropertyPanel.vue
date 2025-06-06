<template>
  <div class="w-1/3 bg-white p-2 rounded shadow border">
    <h2 class="text-lg font-bold mb-4">属性设置</h2>
    <template v-if="selectedItem">
      <div class="space-y-4">
        <div class="form-item">
          <label class="block mb-1">占位提示</label>
          <el-input v-model="selectedItem.placeholder" placeholder="请输入占位提示"/>
        </div>

        <div class="form-item">
          <el-checkbox v-model="selectedItem.props.required">必填</el-checkbox>
        </div>

        <!-- 根据类型显示不同的属性设置 -->
        <template v-if="hasOptions">
          <div class="form-item">
            <label class="block mb-1">选项设置</label>
            <div v-for="(option, index) in selectedItem.props?.options || []" :key="index" class="flex gap-2 mb-2">
              <el-input v-model="option.label" placeholder="选项文本"/>
              <el-input :model-value="String(option.value)" @update:model-value="(val) => option.value = val" placeholder="选项值"/>
              <el-button type="danger" @click="removeOptionFromSelectedItem(index)">删除</el-button>
            </div>
            <el-button type="primary" @click="addOptionToSelectedItem">添加选项</el-button>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="text-gray-400 text-center">
        请选择一个组件进行设置
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'InfraCreatePropertyPanel' })
import { storeToRefs } from 'pinia'
import { useFormDesignerStore } from '@/store/modules/formDesigner';
const store = useFormDesignerStore()
const { selectedItem } = storeToRefs(store)

const { addOptionToSelectedItem, removeOptionFromSelectedItem } = store

const hasOptions = computed(() => {
  const type = selectedItem.value?.type
  return type === 'select' || type === 'radio' || type === 'checkbox'
})
</script>