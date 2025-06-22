<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="150px">
    <el-form-item label="文本类型" prop="textType" >
      <el-radio-group v-model="form.textType">
        <el-radio v-for="item in TextTypeOptions" :key="item.value" :label="item.value">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" prop="duplicateCheck" >
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio v-for="item in DuplicateCheckOptions" :key="item.value" :label="item.value">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="数据校验" prop="dataValidation" >
      <el-radio-group v-model="form.dataValidation">
        <el-radio v-for="item in DataValidationOptions" :key="item.value" :label="item.value">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 当数据校验为"自定义正则"时显示 -->
    <template v-if="form.dataValidation === 'custom'">
      <el-form-item label="输入正则代码" prop="regex" >
        <el-input 
          v-model="form.regex" 
          placeholder="请输入正则表达式" 
        />
      </el-form-item>
    </template>
    <template v-if="form.dataValidation !== 'none'">
      <el-form-item label="触发提示" prop="prompt" >
        <el-input v-model="form.prompt" :placeholder="promptMap[form.dataValidation]" />
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {
  TextTypeOptions,
  DuplicateCheckOptions,
  DataValidationOptions,
  TextType,
  DuplicateCheck,
  DataValidation,
} from '@/config/constants/enums/field'

const promptMap = {
  'none': '请输入正确的手机号',
  'mobile': '请输入正确的手机号',
  'email': '请输入正确的邮箱',
  'custom': '请输入正确的正则表达式',
  'phone': '请输入正确的手机号',
}

interface TextFieldForm {
  textType: TextType
  duplicateCheck: DuplicateCheck
  dataValidation: DataValidation
  regex?: string // 正则表达式
  prompt?: string // 提示信息
}

const props = defineProps<{
  modelValue?: TextFieldForm
}>()
const emit = defineEmits(['update:modelValue'])

const form = reactive<TextFieldForm>({
  textType: props.modelValue?.textType || 'single',
  duplicateCheck: props.modelValue?.duplicateCheck || 'check',
  dataValidation: props.modelValue?.dataValidation || 'none',
  regex: props.modelValue?.regex || '',
  prompt: props.modelValue?.prompt || ''
})

// 表单验证规则
const rules: FormRules = {
  textType: [{ required: true, message: '请选择文本类型', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }],
  dataValidation: [{ required: true, message: '请选择数据校验', trigger: 'change' }],
  regex: [
    { required: true, message: '请输入正则表达式', trigger: 'blur' },
    { 
      validator: (rule, value, callback) => {
        if (form.dataValidation === 'custom' && value) {
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
      validator: (rule, value, callback) => {
        if (form.dataValidation !== 'none' && !value) {
          callback(new Error('请输入触发提示'))
        } else {
          callback()
        }
      }
    }
  ]
}

const formRef = ref<FormInstance>()

watch(
  form,
  (val) => {
    emit('update:modelValue', { ...val })
  },
  { deep: true }
)

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

// 暴露给父组件
defineExpose({
  validate,
  formRef
})
</script>