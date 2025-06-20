<template>
  <el-form :model="form" label-width="150px">
    <el-form-item label="文本类型" required>
      <el-radio-group v-model="form.textType">
        <el-radio v-for="item in TextTypeOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" required>
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio v-for="item in DuplicateCheckOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="数据校验" required>
      <el-radio-group v-model="form.dataValidation">
        <el-radio v-for="item in DataValidationOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {
  TextTypeOptions,
  DuplicateCheckOptions,
  DataValidationOptions,
  TextType,
  DuplicateCheck,
  DataValidation
} from '@/config/constants/enums/field'

interface TextFieldForm {
  textType: TextType;
  duplicateCheck: DuplicateCheck;
  dataValidation: DataValidation;
}

const props = defineProps<{
  modelValue?: TextFieldForm;
}>();
const emit = defineEmits(['update:modelValue']);

const form = reactive<TextFieldForm>({
  textType: props.modelValue?.textType || 'single',
  duplicateCheck: props.modelValue?.duplicateCheck || 'check',
  dataValidation: props.modelValue?.dataValidation || 'none',
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>