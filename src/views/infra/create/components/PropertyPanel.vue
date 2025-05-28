<template>
  <div class="w-1/3 bg-white p-2 rounded shadow border">
    <h2 class="text-lg font-bold mb-4">属性设置</h2>
    {{ selectedItem }}
    <template v-if="selectedItem">
      <div class="space-y-4">
        <div class="form-item">
          <label class="block mb-1">标签文本</label>
          <el-input v-model="selectedItem.props.label" placeholder="请输入标签文本"/>
        </div>
        
        <div class="form-item">
          <label class="block mb-1">占位提示</label>
          <el-input v-model="selectedItem.placeholder" placeholder="请输入占位提示"/>
        </div>

        <div class="form-item">
          <el-checkbox v-model="selectedItem.props.required">必填</el-checkbox>
        </div>

        <!-- 根据类型显示不同的属性设置 -->
        <template v-if="selectedItem.type === 'select' || selectedItem.type === 'radio' || selectedItem.type === 'checkbox'">
          <div class="form-item">
            <label class="block mb-1">选项设置</label>
            <div v-for="(option, index) in selectedItem.props.options" :key="index" class="flex gap-2 mb-2">
              <el-input v-model="option.label" placeholder="选项文本"/>
              <el-input v-model="option.value" placeholder="选项值"/>
              <el-button type="danger" @click="removeOption(index)">删除</el-button>
            </div>
            <el-button type="primary" @click="addOption">添加选项</el-button>
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

<script setup>
defineOptions({ name: 'InfraCreatePropertyPanel' })
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
const { 
  selectedItem,
  addOption,
  removeOption 
} = useFormDesigner()
watch(selectedItem, (newVal) => {
  console.log('selectedItem changed:', newVal);
  // 执行其他操作
});

</script>