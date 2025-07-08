<template>
  <el-form :model="form" :rules="NumberFieldConfigFormRules" ref="formRef" label-width="150px">
    <el-form-item label="数字类型" required>
      <el-radio-group v-model="form.numberType">
        <el-radio v-for="(item, index) in NumberTypeOptions" :key="index" :value="`${item.value}`">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <template v-if="form.numberType === '1'">
      <el-form-item label="小数位数" required>
        <el-select
        v-model="form.decimalPlaces"
        placeholder="Select"
        class="!w-240px"
      >
          <el-option
            v-for="(item, index) in DecimalPlacesOptions"
            :key="index"
            :label="item.label"
            :value="`${item.value}`"
          />
      </el-select>
      </el-form-item>
    </template>
    <el-form-item label="是否进行查重校验" required>
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio v-for="(item, index) in DuplicateCheckOptions" :key="index" :value="`${item.value}`">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {
  FieldType,
  NumberTypeOptions,
  DuplicateCheckOptions,
  DecimalPlacesOptions
} from '@/config/constants/enums/field'
import { defaultNumberFieldForm, NumberFieldForm } from '@/config/constants/enums/fieldDefault'
import type { FormInstance } from 'element-plus'
import { convertObjectToArray } from '@/utils'
import { NumberFieldConfigFormRules } from '@/utils/formRules'

defineOptions({ name: 'NumberFieldConfig' })

const props = defineProps<{
  modelValue?: NumberFieldForm;
}>();


const form = reactive<NumberFieldForm>({
  ...defaultNumberFieldForm,
  ...(props.modelValue ? Object.fromEntries(
    Object.keys(defaultNumberFieldForm).map(key => [key, props.modelValue?.[key as keyof NumberFieldForm] ?? defaultNumberFieldForm[key as keyof NumberFieldForm]])
  ) : {})
})

const formRef = ref<FormInstance>()

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
    numberType: NumberTypeOptions,
    decimalPlaces: DecimalPlacesOptions,
    duplicateCheck: DuplicateCheckOptions,
  }
  const typeMap = {
    numberType: 2,
    decimalPlaces: 2,
    duplicateCheck: 2,
  }
  return arr.map((item) => ({
    ...item,
    fieldType: FieldType.NUMBER,
    type: typeMap[item.name as keyof typeof typeMap],
    optionsJson: JSON.stringify(
      Object.fromEntries(
        (optionsJsonMap[item.name as keyof typeof optionsJsonMap] || []).map((item, index) => [index, item.value])
      )
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