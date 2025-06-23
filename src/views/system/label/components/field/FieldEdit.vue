<template>
  <el-dialog v-model="dialogVisible" title="添加基础字段" width="60%" @close="handleClose">
    <el-row :gutter="10">
      <el-col :span="10">
        <el-card>
          <template #header>表单配置</template>
          <el-form ref="fieldForm" :model="form" :rules="rules" label-width="150px" :disabled="formDisabled">
            <el-form-item label="Code" prop="code">
              <el-input v-model.trim="form.code" placeholder="请输入字段 Code" :disabled="codeInputDisabled" />
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
                <el-radio v-for="option in BooleanOptions" :key="option.value" :label="option.value">
                  {{ option.label }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-show="form.encFlag === BooleanEnum.TRUE" label="加密类型" prop="encType">
              <el-radio-group v-model="form.encType" placeholder="请选择加密类型">
                <el-radio v-for="item in EncFlagOptions" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
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
            <TextFieldConfig v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
          <!-- 数字 -->
          <template v-else-if="form.fieldType === FieldType.NUMBER">
            <NumberFieldConfig v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
          <!-- 单选、多选 -->
          <template
            v-else-if="form.fieldType === FieldType.RADIO || form.fieldType === FieldType.CHECKBOX"
          >
            <RadioFieldConfig :disabled="formDisabled" />
          </template>
          <!-- 日期、日期区间 -->
          <template
            v-else-if="form.fieldType === FieldType.DATE || form.fieldType === FieldType.DATE_RANGE"
          >
            <DatePrecisionConfig :type="form.fieldType" v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
          <!-- 地址、区域、标签 -->
          <template
            v-else-if="
              form.fieldType === FieldType.ADDRESS ||
              form.fieldType === FieldType.REGION ||
              form.fieldType === FieldType.TAG
            "
          >
            展示地址、区域、标签的图片
          </template>
          <!-- 文件 -->
          <template v-else>
            <UploadFieldConfig v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
        </el-card>
      </el-col>
    </el-row>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import TextFieldConfig from './config/TextFieldConfig.vue'
import NumberFieldConfig from './config/NumberFieldConfig.vue'
import RadioFieldConfig from './config/RadioFieldConfig.vue'
import DatePrecisionConfig from './config/DatePrecisionConfig.vue'
import UploadFieldConfig from './config/UploadFieldConfig.vue'
import { FieldType, FieldTypeLabel, BooleanOptions, BooleanEnum, EncFlagOptions } from '@/config/constants'

const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:data'])

// 表单引用
const fieldForm = ref(null)
// 弹窗显示状态
const dialogVisible = ref(false)

// fieldJson 初始值
const defaultFieldConfExt = () => ({
  textType: 'single',
  duplicateCheck: 'noCheck',
  dataValidation: 'none',
  numberType: 'integer',
  datePrecision: 'date',
  code2: '',
  maxSize: 0,
  maxCount: 0,
  formatSearch: '',
  selectedDictCode: ''
} as const)

// 表单初始值
const defaultForm = () => ({
  manageId: query.id as string,
  code: '',
  name: '',
  remark: '',
  fieldType: FieldType.TEXT,
  length: '',
  encFlag: BooleanEnum.FALSE,
  encType: 0,
  addFlag: 0,
  editFlag: 0,
  appViewFlag: 0,
  pcViewFlag: 0,
  fieldConfExt: defaultFieldConfExt()
})
const formDisabled = ref(false)
const codeInputDisabled = ref(false)
// 响应式表单数据
const form = reactive(defaultForm())

// 校验规则
const rules = reactive({
  code: [{ required: true, message: '请输入 Code', trigger: 'blur' }],
  name: [{ required: true, message: '请输入字段名称', trigger: 'blur' }],
  fieldType: [{ required: true, message: '请选择字段类型', trigger: 'change' }],
  length: [{ required: true, message: '请输入字段长度', trigger: 'blur' }]
})

// 提交表单
const handleSubmit = () => {
  (fieldForm.value as any).validate((valid: boolean) => {
    if (valid) {
      const submitData = {
        ...form,
        // 深拷贝 fieldJson，防止外部修改影响本地
        fieldConfExt: JSON.parse(JSON.stringify(form.fieldConfExt))
      }
      emits('update:data', submitData)
      handleClose()
    } else {
      console.log('表单校验不通过')
    }
  })
}

// 重置表单
const resetForm = () => {
  // 先重置所有字段为默认值
  const defaultValues = defaultForm()
  for (const key in form) {
    form[key] = defaultValues[key]
  }
  // 确保 fieldConfExt 被正确重置
  form.fieldConfExt = { ...defaultFieldConfExt() }
  // 重置表单验证状态
  ;(fieldForm.value as any)?.resetFields()
}

// 关闭弹窗
const handleClose = () => {
  resetForm()
  dialogVisible.value = false
}

// 打开弹窗（支持回显）
const open = (type: 'add' | 'edit' | 'show', row?: any) => {
  formDisabled.value = type === 'show'
  codeInputDisabled.value = type === 'edit'
  if (row) {
    Object.assign(form, row, {
      // fieldJson 也要深拷贝，防止引用污染
      fieldConfExt: row.fieldConfExt
        ? JSON.parse(JSON.stringify(row.fieldConfExt))
        : defaultFieldConfExt()
    })
  } else {
    resetForm()
  }
  dialogVisible.value = true
}

defineExpose({ open })
</script>
