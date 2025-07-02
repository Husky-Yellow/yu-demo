<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="140px">
    <el-form-item label="选择上传大小" prop="sizeLimit">
      <el-radio-group v-model="form.sizeLimit">
        <el-radio v-for="(item, index) in FileSizeOptions" :key="index" :value="index">
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选择最大上传数" prop="countLimit">
      <el-radio-group v-model="form.countLimit">
        <el-radio v-for="n in 9" :key="n" :value="n">{{ n }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选择上传格式" prop="allowedTypes">
      <el-checkbox-group v-model="form.allowedTypes">
        <el-checkbox v-for="(item, index) in FileFormatOptions" :key="item.value" :label="item.value" :value="index">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FileSizeOptions, FileFormatOptions, FieldType } from '@/config/constants/enums/field'
import type { FormInstance, FormRules } from 'element-plus'
import { convertObjectToArray } from '@/utils'
import { defaultUploadFieldForm, UploadFieldForm } from '@/config/constants/enums/fieldDefault'
defineOptions({ name: 'UploadFieldConfig' })
const props = defineProps<{
  modelValue?: UploadFieldForm & { allowedTypes: string | string[] }
}>();

const formRef = ref<FormInstance>()
const form = reactive({
  ...defaultUploadFieldForm,
  ...(props.modelValue ? Object.fromEntries(
    Object.keys(defaultUploadFieldForm).map(key => {
      const value = props.modelValue?.[key as keyof UploadFieldForm] ?? defaultUploadFieldForm[key as keyof UploadFieldForm]

      // 特殊处理 allowedTypes：如果是字符串就转换成数组
      if (key === 'allowedTypes') {
        if (typeof value === 'string') {
          return [key, value ? (value as string).split(',') : []]
        }
        return [key, Array.isArray(value) ? value : []]
      }

      return [key, value]
    })
  ) : {})
}) as UploadFieldForm & { allowedTypes: string[] };

// 表单验证规则
const rules: FormRules = {
  sizeLimit: [
    { required: true, message: '请选择上传大小', trigger: 'change' }
  ],
  countLimit: [
    { required: true, message: '请选择最大上传数', trigger: 'change' }
  ],
  allowedTypes: [
    { type: 'array',required: true, message: '请选择上传格式', trigger: 'change' },
    {
      validator: (_rule, value, callback) => {
        if (!value || value.length === 0) {
          callback(new Error('请至少选择一个上传格式'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}

// 验证方法
const validate = async () => {
  if (!formRef.value) return false
  try {
    await formRef.value.validate()
    return true
  } catch (error) {
    return false
  }
}

// 转换表单数据用于提交
const convertFormForSubmission = () => {
  const arr = convertObjectToArray(JSON.parse(JSON.stringify(form)))
  const typeMap = {
    sizeLimit: 2,
    countLimit: 2,
    allowedTypes: 2,
  }
  const optionsJsonMap = {
    sizeLimit: FileSizeOptions,
    countLimit: Array(9).fill(0).map((_, index) => index + 1),
    allowedTypes: FileFormatOptions,
  }
  return arr.map((item) => ({
    ...item,
    type: typeMap[item.name as keyof typeof typeMap],
    fieldType: FieldType.ATTACHMENT,
    optionsJson: Object.fromEntries(
        (optionsJsonMap[item.name as keyof typeof optionsJsonMap] || []).map((item, index) => [index, item.value])
      )
  }))
}

// 暴露给父组件的方法
defineExpose({
  validate,
  formRef,
  convertFormForSubmission
})
</script>