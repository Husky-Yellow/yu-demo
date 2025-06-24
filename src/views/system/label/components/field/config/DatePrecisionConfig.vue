<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Code2" required v-show="type === FieldType.DATE_RANGE">
      <el-input v-model="form.code2" />
    </el-form-item>
    <el-form-item label="日期精度" required>
      <el-radio-group v-model="form.datePrecision">
        <el-radio
          v-for="item in datePrecisionOptions"
          :key="item.value"
          :label="item.value"
        >
          {{ item.label }} <span style="color: #888; font-size: 12px;">例：{{ item.example }}</span>
        </el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FieldType } from '@/config/constants/enums/field';
const datePrecisionOptions = [
  { label: '选至年', value: 'year', example: 'YYYY' },
  { label: '选至月', value: 'month', example: 'YYYY/MM' },
  { label: '选至日', value: 'date', example: 'YYYY/MM/DD' },
  { label: '选至时', value: 'hour', example: 'YYYY/MM/DD HH:00' },
  { label: '选至分', value: 'minute', example: 'YYYY/MM/DD HH:mm' },
  { label: '选至秒', value: 'second', example: 'YYYY/MM/DD HH:mm:ss' }
];

const props = defineProps<{
  modelValue?: {
    datePrecision: string;
    code2: string;
  }
  type: FieldType;
}>();
const emit = defineEmits(['update:modelValue']);

const form = reactive({
  datePrecision: props.modelValue?.datePrecision || 'date',
  code2: props.modelValue?.code2 || '',
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>