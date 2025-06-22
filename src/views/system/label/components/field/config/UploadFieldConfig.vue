<template>
  <el-form :model="form" label-width="140px">
    <el-form-item label="选择上传大小" required>
      <el-radio-group v-model="form.maxSize">
        <el-radio v-for="item in sizeOptions" :key="item.value" :label="item.value">
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选择最大上传数" required>
      <el-radio-group v-model="form.maxCount">
        <el-radio v-for="n in 9" :key="n" :label="n">{{ n }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选择上传格式" required>
      <el-checkbox-group v-model="form.formatSearch">
        <el-checkbox v-for="item in formatOptions" :key="item.value" :label="item.value" :value="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">

const sizeOptions = [
  { label: '小于等于1M', value: 1 },
  { label: '小于等于5M', value: 5 },
  { label: '小于等于10M', value: 10 },
  { label: '小于等于50M', value: 50 },
  { label: '小于等于100M', value: 100 }
];

// jpeg、bmp、jpg、png、pdf 
const formatOptions = [
  { label: 'jpeg', value: 'jpeg' },
  { label: 'bmp', value: 'bmp' },
  { label: 'jpg', value: 'jpg' },
  { label: 'png', value: 'png' },
  { label: 'pdf', value: 'pdf' }
];


const props = defineProps<{
  modelValue?: {
    maxSize: number;
    maxCount: number;
    formatSearch: string[];
    selectedDictCode: string;
  }
}>();
const emit = defineEmits(['update:modelValue']);

const form = reactive({
  maxSize: props.modelValue?.maxSize || 10,
  maxCount: props.modelValue?.maxCount || 1,
  formatSearch: props.modelValue?.formatSearch || [],
  selectedDictCode: props.modelValue?.selectedDictCode || ''
});


watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>