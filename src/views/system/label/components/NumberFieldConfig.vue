<template>
  <el-form :model="form" label-width="150px">
    <el-form-item label="数字类型" required>
      <el-radio-group v-model="form.numberType">
        <el-radio v-for="item in NumberTypeOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" required>
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio v-for="item in DuplicateCheckOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {
  NumberTypeOptions,
  DuplicateCheckOptions,
  NumberType,
  DuplicateCheck
} from '@/config/constants/enums/field'

interface NumberFieldForm {
  numberType: NumberType;
  duplicateCheck: DuplicateCheck;
}

const props = defineProps<{
  modelValue?: NumberFieldForm;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: NumberFieldForm]
}>();

const form = reactive<NumberFieldForm>({
  numberType: props.modelValue?.numberType || 'integer',
  duplicateCheck: props.modelValue?.duplicateCheck || 'noCheck'
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>