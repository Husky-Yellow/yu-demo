<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加基础字段"
    width="80%"
    @close="handleClose"
  >
    <el-row :gutter="10">
      <el-col :span="10">
        <el-card>
          <template #header>表单配置</template>
          <el-form
            ref="fieldForm"
            :model="form"
            :rules="rules"
            label-width="150px"
          >
            <el-form-item label="Code" prop="code">
              <el-input v-model="form.code" placeholder="请输入字段 Code" />
            </el-form-item>
            <el-form-item label="字段名称" prop="fieldName">
              <el-input v-model="form.fieldName" placeholder="请输入字段名称" />
            </el-form-item>
            <el-form-item label="字段描述" prop="fieldDesc">
              <el-input
                type="textarea"
                v-model="form.fieldDesc"
                placeholder="请输入字段描述"
                :rows="3"
              />
            </el-form-item>
            <el-form-item label="字段类型" prop="fieldType">
              <el-select v-model="form.fieldType" placeholder="请选择字段类型">
                <el-option
                  v-for="(label, type) in FieldTypeLabel"
                  :key="type"
                  :label="label"
                  :value="type"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="字段长度" prop="fieldLength">
              <el-input v-model="form.fieldLength" placeholder="请输入字段长度" />
            </el-form-item>
            <el-form-item label="是否为敏感字段" prop="isSensitive">
              <el-radio-group v-model="form.isSensitive">
                <el-radio label="是">是</el-radio>
                <el-radio label="否">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          <template #header>字段配置</template>
          <template v-if="form.fieldType === FieldType.TEXT">
            <TextFieldConfig />
          </template>
          <template v-else>
            <!-- 这个位置 根据 fieldType 展示不同的组件 -->
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
                    v-model="selectedDict"
                    :label="scope.row.dictCode"
                  />
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-card>
      </el-col>
    </el-row>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { FieldType, FieldTypeLabel } from '@/types/field';
import TextFieldConfig from './TextFieldConfig.vue';

// 字典数据类型定义
interface DictData {
  dictCode: string;
  dictName: string;
  valueCount: number;
}

// 表单数据
const form = reactive({
  code: '',
  fieldName: '',
  fieldDesc: '',
  fieldType: FieldType.TEXT, // 默认单选
  fieldLength: '',
  isSensitive: '否'
});

// 表单校验规则
const rules = reactive({
  code: [
    { required: true, message: '请输入 Code', trigger: 'blur' }
  ],
  fieldName: [
    { required: true, message: '请输入字段名称', trigger: 'blur' }
  ],
  fieldType: [
    { required: true, message: '请选择字段类型', trigger: 'change' }
  ],
  fieldLength: [
    { required: true, message: '请输入字段长度', trigger: 'blur' }
  ],
  isSensitive: [
    { required: true, message: '请选择是否为敏感字段', trigger: 'change' }
  ]
});

// 弹窗显示状态
const dialogVisible = ref(false);
// 字典搜索关键字
const dictSearch = ref('');
// 字典数据（假数据）
const dictData = ref<DictData[]>([
  { dictCode: '000001', dictName: '行政区域', valueCount: 186 },
  { dictCode: '000002', dictName: '行政区域', valueCount: 0 },
  { dictCode: '000003', dictName: '行政区域', valueCount: 0 },
  { dictCode: '000004', dictName: '行政区域', valueCount: 0 },
]);
// 选中的字典项
const selectedDict = ref<DictData | null>(null);

// 计算过滤后的字典数据
const filteredDictData = computed(() => {
  if (!dictSearch.value) return dictData.value;
  return dictData.value.filter(item =>
    item.dictCode.includes(dictSearch.value) || item.dictName.includes(dictSearch.value)
  );
});

// 提交表单
const handleSubmit = () => {
  (fieldForm.value as any).validate((valid: boolean) => {
    if (valid) {
      // 这里可进行接口调用等逻辑，提交表单数据
      console.log('表单数据：', form);
      console.log('选中字典：', selectedDict.value);
      dialogVisible.value = false;
    } else {
      console.log('表单校验不通过');
    }
  });
};

// 关闭弹窗
const handleClose = () => {
  // 重置表单
  form.code = '';
  form.fieldName = '';
  form.fieldDesc = '';
  form.fieldType = FieldType.TEXT;
  form.fieldLength = '';
  form.isSensitive = '否';
  selectedDict.value = null;
  dictSearch.value = '';
  (fieldForm.value as any).resetFields();
};

/** 打开弹窗 */
const open = async () => {
  console.log('弹窗内部');
  dialogVisible.value = true;
};

// 表单引用
const fieldForm = ref(null);

// 提供 open 方法，用于外部调用打开弹窗
defineExpose({ open });
</script>
