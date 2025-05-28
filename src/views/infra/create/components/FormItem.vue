<template>
  <div class="relative">
    <el-form-item :label="item.label || ''" @click="$emit('select', item)">
      <component
        :is="getComponent(item.type)"
        v-bind="item.props"
        :placeholder="item.placeholder || '请输入'">
        <OptionsRenderer 
          v-if="['select','radio','checkbox'].includes(item.type)" 
          :type="item.type" 
          :options="item.props.options" />
      </component>
      
      <el-button 
        v-if="!item.isGrid"
        type="danger" 
        :icon="Delete" 
        circle 
        class="absolute -top-8 -right-10 p-1"
        @click="$emit('remove', index)" />
    </el-form-item>
  </div>
</template>

<script setup>
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
import OptionsRenderer from './OptionsRenderer.vue'
import { Delete } from '@element-plus/icons-vue'
const { getComponent } = useFormDesigner()
defineProps({
  item: Object,
  index: Number
})
</script>