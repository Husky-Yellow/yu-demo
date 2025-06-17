<template>
  <el-form :model="form" label-width="150px">
    <el-form-item label="数字类型" required>
      <el-radio-group v-model="form.numberType">
        <el-radio label="integer">整数</el-radio>
        <el-radio label="decimal">小数</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否进行查重校验" required>
      <el-radio-group v-model="form.duplicateCheck">
        <el-radio label="check">校验</el-radio>
        <el-radio label="noCheck">不校验</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

const props = defineProps<{
  modelValue?: {
    numberType: string;
    duplicateCheck: string;
  }
}>();

const emit = defineEmits<{
  'update:modelValue': [value: {
    numberType: string;
    duplicateCheck: string;
  }]
}>();

const form = reactive({
  numberType: props.modelValue?.numberType || 'integer',
  duplicateCheck: props.modelValue?.duplicateCheck || 'noCheck'
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>