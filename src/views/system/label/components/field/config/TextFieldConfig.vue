<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="150px">
    <el-form-item label="文本类型" prop="textType" >
      <el-radio-group v-model="form.textType">
        <el-radio v-for="(item, index) in TextTypeOptions" :key="item.value" :value="index">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" prop="duplicateCheck" >
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio v-for="(item, index) in DuplicateCheckOptions" :key="item.value" :value="index">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="数据校验" prop="dataValidation" >
      <el-radio-group v-model="form.dataValidation">
        <el-radio v-for="(item, index) in DataValidationOptions" :key="index" :value="index">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <template v-if="form.dataValidation === 2">
      <el-form-item label="输入正则代码" prop="regex" >
        <el-input
          v-model="form.regex"
          placeholder="请输入正则表达式"
        />
      </el-form-item>
    </template>
    <template v-if="form.dataValidation !== 0">
      <el-form-item label="触发提示" prop="prompt" >
        <el-input v-model="form.prompt" :placeholder="promptMap[form.dataValidation]" />
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import {
  TextTypeOptions,
  DuplicateCheckOptions,
  DataValidationOptions,
  FieldType
} from '@/config/constants/enums/field'
import { defaultTextFieldForm, TextFieldForm } from '@/config/constants/enums/fieldDefault'
import { convertObjectToArray } from '@/utils'
defineOptions({ name: 'TextFieldConfig' })
const promptMap = {
  'none': '请输入正确的手机号',
  'mobile': '请输入正确的手机号',
  'email': '请输入正确的邮箱',
  'custom': '请输入正确的正则表达式',
  'phone': '请输入正确的手机号',
}


const props = defineProps<{
  modelValue?: TextFieldForm
}>()

const form = reactive<TextFieldForm>({
  ...defaultTextFieldForm,
  ...(props.modelValue ? Object.fromEntries(
    Object.keys(defaultTextFieldForm).map(key => [key, props.modelValue?.[key as keyof TextFieldForm] ?? defaultTextFieldForm[key as keyof TextFieldForm]])
  ) : {})
})
const formRef = ref<FormInstance>()

// 表单验证规则
const rules: FormRules = {
  textType: [{ required: true, message: '请选择文本类型', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }],
  dataValidation: [{ required: true, message: '请选择数据校验', trigger: 'change' }],
  regex: [
    { required: true, message: '请输入正则表达式', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (form.dataValidation === 2 && value) {
          try {
            new RegExp(value)
            callback()
          } catch (error) {
            callback(new Error('正则表达式格式不正确'))
          }
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  prompt: [
    {
      required: true,
      message: '请输入触发提示',
      trigger: 'blur',
      validator: (_rule, value, callback) => {
        if (form.dataValidation !== 0 && !value) {
          callback(new Error('请输入触发提示'))
        } else {
          callback()
        }
      }
    }
  ]
}

// 暴露验证方法
const validate = async () => {
  if (!formRef.value) return false
  try {
    await formRef.value.validate()
    return true
  } catch (error) {
    return false
  }
}


const convertFormForSubmission = () => {
  const arr = convertObjectToArray(JSON.parse(JSON.stringify(form)))
  const optionsJsonMap = {
    textType: TextTypeOptions,
    duplicateCheck: DuplicateCheckOptions,
    dataValidation: DataValidationOptions,
  }
  const typeMap = {
    textType: 2,
    duplicateCheck:2,
    dataValidation: 2,
    regex: 1,
    prompt: 1,
  }
  return arr.map((item) => ({
    ...item,
    type: typeMap[item.name as keyof typeof typeMap],
    fieldType: FieldType.TEXT,
    optionsJson: Object.fromEntries(
        (optionsJsonMap[item.name as keyof typeof optionsJsonMap] || []).map((item, index) => [index, item.value])
      )
  }))

}

// 暴露给父组件
defineExpose({
  validate,
  formRef,
  convertFormForSubmission
})
</script>