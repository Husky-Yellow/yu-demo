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
              <el-input v-model.trim="form.code" placeholder="请输入字段 Code" />
            </el-form-item>
            <el-form-item label="字段名称" prop="name">
              <el-input v-model.trim="form.name" placeholder="请输入字段名称" />
            </el-form-item>
            <el-form-item label="字段描述" prop="remark">
              <el-input
                type="textarea"
                v-model.trim="form.remark"
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
            <el-form-item label="字段长度" prop="length">
              <el-input v-model.number="form.length" placeholder="请输入字段长度" />
            </el-form-item>
            <el-form-item label="是否为敏感字段" prop="encFlag">
              <el-radio-group v-model="form.encFlag">
                <el-radio
                  v-for="option in YesNoOptions"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          <template #header>字段配置</template>
          <template v-if="form.fieldType === FieldType.TEXT">
            <TextFieldConfig v-model="currentConfig" />
          </template>
          <template v-else-if="form.fieldType === FieldType.NUMBER">
            <NumberFieldConfig v-model="currentConfig" />
          </template>
          <template v-else>
            <!-- 这个位置 根据 fieldType 展示不同的组件 -->
            <RadioFieldConfig v-model="currentConfig" />
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
import { FieldType, FieldTypeLabel } from '@/config/constants';
import { YesNoOptions, YesNoEnum } from '@/config/constants'
import TextFieldConfig from './TextFieldConfig.vue';
import NumberFieldConfig from './NumberFieldConfig.vue';
import RadioFieldConfig from './RadioFieldConfig.vue';
const { query } = useRoute() // 查询参数


// 字段专属配置类型
interface TextFieldConfigType {
  textType: string;
  duplicateCheck: string;
  dataValidation: string;
}

interface NumberFieldConfigType {
  numberType: string;
  duplicateCheck: string;
}

// 表单引用
const fieldForm = ref(null);
// 弹窗显示状态
const dialogVisible = ref(false);

// 分别维护不同类型的配置
const textFieldConfig = ref<TextFieldConfigType>({
  textType: 'single',
  duplicateCheck: 'noCheck',
  dataValidation: 'none',
});

const numberFieldConfig = ref<NumberFieldConfigType>({
  numberType: 'integer',
  duplicateCheck: 'noCheck',
});
// 表单数据
const form = reactive({
  manageId: query.id as string, // 管理 ID
  code: '', // 字段编码
  name: '', // 字段名称
  remark: '', // 字段描述
  fieldType: FieldType.TEXT, // 字段类型
  length: '',  // 字段长度
  encFlag: YesNoEnum.NO, // 是否加密
  bizType: '', // 业务类型
  fieldJson: {

  }, // 字段配置
});

// 表单校验规则
const rules = reactive({
  code: [
    { required: true, message: '请输入 Code', trigger: 'blur' }
  ],
  name: [
    { required: true, message: '请输入字段名称', trigger: 'blur' }
  ],
  fieldType: [
    { required: true, message: '请选择字段类型', trigger: 'change' }
  ],
  length: [
    { required: true, message: '请输入字段长度', trigger: 'blur' }
  ],
});

// 根据字段类型使用对应的配置
const currentConfig = computed(() => {
  switch (form.fieldType) {
    case FieldType.TEXT:
      return textFieldConfig;
    case FieldType.NUMBER:
      return numberFieldConfig;
    default:
      return ref({});
  }
});

// 提交表单
const handleSubmit = () => {
  (fieldForm.value as any).validate((valid: boolean) => {
    if (valid) {
      // 这里可进行接口调用等逻辑，提交表单数据
      const submitData = {
        ...form,
        fieldConfig: currentConfig.value
      };
      console.log('表单数据：', submitData);
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
  form.fieldJson = {};
  form.fieldType = FieldType.TEXT;
  form.length = '';
  form.encFlag = YesNoEnum.NO;
  form.bizType = '';
  (fieldForm.value as any).resetFields();
};

/** 打开弹窗 */
const open = async () => {
  dialogVisible.value = true;
  // 还要回显数据
};



// 提供 open 方法，用于外部调用打开弹窗
defineExpose({ open });
</script>
