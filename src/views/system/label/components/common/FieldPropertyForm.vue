<template>
  <el-form label-position="top">
    <el-form-item label="标题">
      <el-input v-model="localField.label" />
    </el-form-item>
    <el-form-item label="占位提示">
      <el-input v-model="localField.placeholder" />
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="localField.required" />
    </el-form-item>
    <el-divider>字段联动设置</el-divider>
    <el-form-item>
      <template #label>
        <span>
          启用联动
          <el-tooltip content="当前字段会根据其他字段的某个值来判断是否显示" placement="top">
            <el-icon><QuestionFilled /></el-icon>
          </el-tooltip>
        </span>
      </template>
      <el-switch v-model="localField.linkage.enabled" />
    </el-form-item>

    <template v-if="localField.linkage.enabled">
      <el-form-item label="选择联动字段">
        <el-select
          :model-value="
            localField && localField.linkage ? (localField.linkage.targetFieldId ?? '') : ''
          "
          placeholder="选择要关联的字段"
          style="width: 100%"
          clearable
          @update:model-value="
            (val) => {
              if (localField && localField.linkage) localField.linkage.targetFieldId = val
            }
          "
        >
          <el-option
            v-for="field in otherFields"
            :key="(field as any).id"
            :label="(field as any).label"
            :value="String((field as any).id)"
          />
        </el-select>
      </el-form-item>
      <template v-if="localField.linkage.targetFieldId">
        <el-form-item label="当值等于">
          <el-select
            v-model="localField.linkage.targetFieldValue"
            placeholder="选择触发联动的字段值"
            style="width: 100%"
            clearable
          >
            <el-option
              v-for="option in linkedFieldOptions"
              :key="(option as any).value"
              :label="(option as any).label"
              :value="(option as any).value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="联动效果">
          <el-select
            v-model="localField.linkage.effect"
            placeholder="选择联动效果"
            style="width: 100%"
          >
            <el-option label="显示当前字段" value="show" />
            <el-option label="隐藏当前字段" value="hide" />
          </el-select>
        </el-form-item>
      </template>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSwitch,
  ElDivider,
  ElTooltip,
  ElSelect,
  ElOption,
  ElIcon
} from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'

const props = defineProps({
  field: {
    type: Object,
    required: true
  },
  otherFields: {
    type: Array,
    required: true
  },
  linkedFieldOptions: {
    type: Array,
    default: () => [],
    required: true
  }
})
const emit = defineEmits(['update:field'])

const localField = ref({ ...props.field })

watch(
  () => props.field,
  (val) => {
    localField.value = { ...val }
  },
  { deep: true }
)

watch(
  localField,
  (val) => {
    emit('update:field', { ...val })
  },
  { deep: true }
)
</script>
