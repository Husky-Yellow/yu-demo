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
      <el-input v-model="form.formatSearch" placeholder="输入字典编号/名称" suffix-icon="Search" style="width: 100%; margin-bottom: 10px" />
      <el-table :data="filteredDictData" border>
        <el-table-column prop="dictCode" label="字典编号" />
        <el-table-column prop="dictName" label="字典名称" />
        <el-table-column prop="valueCount" label="字典值数量" />
        <el-table-column label="选择">
          <template #default="scope">
            <el-radio v-model="form.selectedDictCode" :label="scope.row.dictCode" />
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, computed, watch, defineProps, defineEmits } from 'vue';

const sizeOptions = [
  { label: '小于等于1M', value: 1 },
  { label: '小于等于5M', value: 5 },
  { label: '小于等于10M', value: 10 },
  { label: '小于等于50M', value: 50 },
  { label: '小于等于100M', value: 100 }
];

interface DictData {
  dictCode: string;
  dictName: string;
  valueCount: number;
}

const props = defineProps<{
  modelValue?: {
    maxSize: number;
    maxCount: number;
    formatSearch: string;
    selectedDictCode: string;
  }
}>();
const emit = defineEmits(['update:modelValue']);

const form = reactive({
  maxSize: props.modelValue?.maxSize || 10,
  maxCount: props.modelValue?.maxCount || 1,
  formatSearch: props.modelValue?.formatSearch || '',
  selectedDictCode: props.modelValue?.selectedDictCode || ''
});

// 假数据，实际可用接口替换
const dictData = reactive<DictData[]>([
  { dictCode: 'jpeg', dictName: 'JPEG图片', valueCount: 1 },
  { dictCode: 'bmp', dictName: 'BMP图片', valueCount: 1 },
  { dictCode: 'jpg', dictName: 'JPG图片', valueCount: 1 },
  { dictCode: 'png', dictName: 'PNG图片', valueCount: 1 },
  { dictCode: 'pdf', dictName: 'PDF文档', valueCount: 1 }
]);

const filteredDictData = computed(() => {
  if (!form.formatSearch) return dictData;
  return dictData.filter(item =>
    item.dictCode.includes(form.formatSearch) || item.dictName.includes(form.formatSearch)
  );
});

watch(form, (val) => {
  emit('update:modelValue', { ...val });
}, { deep: true });
</script>