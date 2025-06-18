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
            <el-form-item v-show="form.encFlag === YesNoEnum.YES" label="加密类型" prop="bizType">
              <el-radio-group v-model="form.bizType" placeholder="请选择加密类型">
                <el-radio label="全文加密" value="MD5" />
                <el-radio label="证件号码加密" value="SHA-1" />
                <el-radio label="手机号码加密" value="SHA-256" />
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          <template #header>字段配置</template>
          <!-- 文本 -->
          <template v-if="form.fieldType === FieldType.TEXT">
            <TextFieldConfig v-model="form.fieldJson" />
          </template>
          <!-- 数字 -->
          <template v-else-if="form.fieldType === FieldType.NUMBER">
            <NumberFieldConfig v-model="form.fieldJson" />
          </template>
          <!-- 单选、多选 -->
          <template v-else-if="form.fieldType === FieldType.RADIO || form.fieldType === FieldType.CHECKBOX">
            <RadioFieldConfig />
          </template>
          <!-- 日期、日期区间 -->
          <template v-else-if="form.fieldType === FieldType.DATE || form.fieldType === FieldType.DATE_RANGE">
            <DatePrecisionConfig :type="form.fieldType" v-model="form.fieldJson" />
          </template>
          <!-- 地址、区域、标签 -->
          <template v-else-if="form.fieldType === FieldType.ADDRESS || form.fieldType === FieldType.REGION || form.fieldType === FieldType.TAG">
            展示地址、区域、标签的图片
          </template>
          <!-- 文件 -->
          <template v-else>
            <UploadFieldConfig v-model="form.fieldJson" />
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
import DatePrecisionConfig from './DatePrecisionConfig.vue';
import UploadFieldConfig from './UploadFieldConfig.vue';
const { query } = useRoute() // 查询参数

// 表单引用
const fieldForm = ref(null);
// 弹窗显示状态
const dialogVisible = ref(false);

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
    textType: 'single',
    duplicateCheck: 'noCheck',
    dataValidation: 'none',
    numberType: 'integer',
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

// 提交表单
const handleSubmit = () => {
  (fieldForm.value as any).validate((valid: boolean) => {
    if (valid) {
      // 这里可进行接口调用等逻辑，提交表单数据
      const submitData = {
        ...form,
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
  form.code = '';
  form.fieldType = FieldType.TEXT;
  form.length = '';
  form.encFlag = YesNoEnum.NO;
  form.bizType = '';
  form.fieldJson = {
    textType: 'single',
    duplicateCheck: 'noCheck',
    dataValidation: 'none',
    numberType: 'integer',
  };
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
