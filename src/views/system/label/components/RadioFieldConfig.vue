<template>
     <el-input
              v-model="dictSearch"
              placeholder="输入字典编号/名称"
              suffix-icon="Search"
              style="width: 100%; margin-bottom: 10px"
            />
            <el-table
              :data="filteredDictData"
              border
            >
              <el-table-column
                prop="dictCode"
                label="字典编号"
              />
              <el-table-column
                prop="dictName"
                label="字典名称"
              />
              <el-table-column
                prop="valueCount"
                label="字典值数量"
              />
              <el-table-column
                label="选择"
              >
                <template #default="scope">
                  <el-radio
                    v-model="selectedDictCode"
                    :label="scope.row.dictCode"
                  />
                </template>
              </el-table-column>
            </el-table>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface DictData {
  dictCode: string;
  dictName: string;
  valueCount: number;
}

interface RadioFieldConfig {
  dictCode: string;
}

const props = defineProps<{
  modelValue?: RadioFieldConfig;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: RadioFieldConfig];
}>();

// 字典搜索关键字
const dictSearch = ref('');

// 选中的字典编号
const selectedDictCode = ref(props.modelValue?.dictCode || '');

// 字典数据（示例数据，实际应该从接口获取）
const dictData = ref<DictData[]>([
  { dictCode: '000001', dictName: '行政区域', valueCount: 186 },
  { dictCode: '000002', dictName: '行政区域', valueCount: 0 },
  { dictCode: '000003', dictName: '行政区域', valueCount: 0 },
  { dictCode: '000004', dictName: '行政区域', valueCount: 0 },
]);

// 计算过滤后的字典数据
const filteredDictData = computed(() => {
  if (!dictSearch.value) return dictData.value;
  return dictData.value.filter(item =>
    item.dictCode.includes(dictSearch.value) ||
    item.dictName.includes(dictSearch.value)
  );
});

// 监听选中值变化
watch(selectedDictCode, (newVal) => {
  emit('update:modelValue', {
    dictCode: newVal
  });
});

// 监听外部值变化
watch(() => props.modelValue, (newVal) => {
  if (newVal?.dictCode !== selectedDictCode.value) {
    selectedDictCode.value = newVal?.dictCode || '';
  }
}, { deep: true });
</script>