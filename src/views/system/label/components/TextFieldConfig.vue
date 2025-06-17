<template>
  <el-form :model="form" label-width="150px">
    <el-form-item label="文本类型" required>
      <el-radio-group v-model="form.textType">
        <el-radio label="single">单行文本</el-radio>
        <el-radio label="multi">多行文本</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" required>
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio label="check">校验</el-radio>
        <el-radio label="noCheck">不校验</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="数据校验" required>
      <el-radio-group v-model="form.dataValidation">
        <el-radio label="none">不校验</el-radio>
        <el-radio label="custom">自定义正则代码</el-radio>
        <el-radio label="idCard">身份证校验</el-radio>
        <el-radio label="creditCode">统一社会信用代码校验</el-radio>
        <el-radio label="mobile">手机号校验</el-radio>
        <el-radio label="phone">电话号码校验</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue?: {
    textType: string;
    duplicateCheck: string;
    dataValidation: string;
  }
}>();
const emit = defineEmits(['update:modelValue']);

const form = reactive({
  textType: props.modelValue?.textType || 'single',
  duplicateCheck: props.modelValue?.duplicateCheck || 'check',
  dataValidation: props.modelValue?.dataValidation || undefined,
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>