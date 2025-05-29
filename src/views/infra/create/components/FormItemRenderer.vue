<template>
  <el-form-item :label="item.label" @click.stop="$emit('select', item)"  class="relative select-none">
    <component
      :is="getComponent(item.type)"
      v-bind="item.props"
      :placeholder="item.placeholder || '请输入'">
      <template v-if="item.type === 'select' || item.type === 'radio' || item.type === 'checkbox'">
        <OptionsRenderer :type="item.type" :options="item.props?.options || []" />
      </template>
    </component>
    <slot name="delete-btn" ></slot>
  </el-form-item>
</template>

<script setup lang="ts">
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
import OptionsRenderer from './OptionsRenderer.vue'
import { FormDesignerFormItem } from "@/types/formDesigner";

defineProps<{
  item: FormDesignerFormItem
  index: number
  showDelete?: boolean
}>()

defineEmits<{
  select: [item: FormDesignerFormItem]
}>()

const { getComponent } = useFormDesigner()
</script>