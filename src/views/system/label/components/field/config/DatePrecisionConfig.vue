<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
    <el-form-item label="Code2" required v-show="type === FieldType.DATE_RANGE" prop="code2">
      <el-input v-model="form.code2" />
    </el-form-item>
    <el-form-item label="日期精度" required>
      <el-radio-group v-model="form.datePrecision">
        <el-radio
          v-for="item in LableDatePrecisionOptions"
          :key="item.value"
          :value="item.value"
        >
          {{ item.label }} <span style="color: #888; font-size: 12px;">例：{{ item.example }}</span>
        </el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { FieldType, LableDatePrecisionOptions } from '@/config/constants/enums/field';
import { defaultDatePrecisionForm, DatePrecisionForm } from '@/config/constants/enums/fieldDefault';
import { convertObjectToArray } from '@/utils'
defineOptions({ name: 'DatePrecisionConfig' })
const props = defineProps<{
  modelValue?: DatePrecisionForm;
  type: FieldType;
}>();
const emit = defineEmits(['update:modelValue']);

const formRef = ref<FormInstance>()
const form = reactive<DatePrecisionForm>({
  ...defaultDatePrecisionForm,
  ...(props.modelValue ? Object.fromEntries(
    Object.keys(defaultDatePrecisionForm).map(key => [key, props.modelValue?.[key as keyof DatePrecisionForm] ?? defaultDatePrecisionForm[key as keyof DatePrecisionForm]])
  ) : {})
})
const rules: FormRules = {
  code2: [{ required: true, message: '请输入code2', trigger: 'blur' }],
}

const convertFormForSubmission = () => {
  const arr = convertObjectToArray(JSON.parse(JSON.stringify(form)))
  const optionsJsonMap = {
    datePrecision: LableDatePrecisionOptions,
  }
  return arr.map((item) => ({
    ...item,
    fieldType: props?.type,
    optionsJson: JSON.stringify(Object.fromEntries(
        (optionsJsonMap[item.name as keyof typeof optionsJsonMap] || []).map((item, index) => [index, item.value])
      ))
  }))
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


// 暴露给父组件
defineExpose({
  validate,
  formRef,
  convertFormForSubmission
})
</script>