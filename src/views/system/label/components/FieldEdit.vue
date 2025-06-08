<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加基础字段"
    width="80%"
    @close="handleClose"
  >
    <div class="dialog-content">
      <!-- 左侧表单区域 -->
      <div class="form-panel">
        <el-form
          ref="fieldForm"
          :model="form"
          :rules="rules"
          label-width="100px"
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
              <el-option label="单选" value="radio" />
              <el-option label="多选" value="checkbox" />
              <el-option label="文本" value="text" />
              <el-option label="数字" value="number" />
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
      </div>

      <!-- 右侧字典选择区域 -->
      <div class="dict-panel">
        <h3>字段配置</h3>
        <el-input
          v-model="dictSearch"
          placeholder="输入字典编号/名称"
          suffix-icon="Search"
          style="width: 100%; margin-bottom: 10px"
        />
        <el-table
          :data="filteredDictData"
          border
          style="width: 100%"
          height="calc(100% - 40px)"
        >
          <el-table-column
            prop="dictCode"
            label="字典编号"
            width="120"
          />
          <el-table-column
            prop="dictName"
            label="字典名称"
          />
          <el-table-column
            prop="valueCount"
            label="字典值数量"
            width="120"
          />
          <el-table-column
            label="选择"
            width="80"
          >
            <template #default="scope">
              <el-radio
                v-model="selectedDict"
                :label="scope.row"
              />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确认添加</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup  lang="ts">
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
  fieldType: 'radio', // 默认单选
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
  { dictCode: '000005', dictName: '人员类型', valueCount: 12 },
  { dictCode: '000006', dictName: '证件类型', valueCount: 8 },
  { dictCode: '000007', dictName: '数据来源', valueCount: 5 },
  { dictCode: '000008', dictName: '用户状态', valueCount: 3 }
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
  form.fieldType = 'radio';
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

<style scoped>
.dialog-content {
  display: flex;
  height: 450px;
}

.form-panel {
  flex: 1;
  padding-right: 20px;
}

.dict-panel {
  flex: 1;
  padding-left: 20px;
  border-left: 1px solid #ebeef5;
}

.dialog-footer {
  text-align: right;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
}
</style>