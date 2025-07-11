<template>
  <Dialog v-model="dialogVisible" title="添加基础字段" width="70%" @close="handleClose">
    <el-row :gutter="4">
      <el-col :span="10">
        <el-card>
          <template #header>表单配置</template>
          <el-form
            ref="fieldForm"
            :model="form"
            :rules="rules"
            label-width="150px"
            :disabled="formDisabled"
          >
            <el-form-item label="Code" prop="code">
              <el-input
                v-model.trim="form.code"
                placeholder="请输入字段 Code"
                :disabled="codeInputDisabled"
              />
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
                  :value="Number(type)"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="字段长度" prop="length">
              <el-input v-model.number="form.length" placeholder="请输入字段长度" />
            </el-form-item>
            <el-form-item label="是否为敏感字段" prop="encFlag">
              <el-radio-group v-model="form.encFlag">
                <el-radio
                  v-for="option in BooleanOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-show="form.encFlag === BooleanEnum.TRUE"
              label="加密类型"
              prop="encType"
            >
              <el-radio-group v-model="form.encType" placeholder="请选择加密类型">
                <el-radio v-for="item in EncFlagOptions" :key="item.value" :value="item.value">{{
                  item.label
                }}</el-radio>
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
            <TextFieldConfig
              ref="textFieldConfigRef"
              v-model="form.fieldConfExt"
              :disabled="formDisabled"
            />
          </template>
          <!-- 数字 -->
          <template v-else-if="form.fieldType === FieldType.NUMBER">
            <NumberFieldConfig
              ref="numberFieldConfigRef"
              v-model="form.fieldConfExt"
              :disabled="formDisabled"
            />
          </template>
          <!-- 单选、多选 -->
          <template
            v-else-if="form.fieldType === FieldType.RADIO || form.fieldType === FieldType.CHECKBOX"
          >
            <RadioFieldConfig ref="radioFieldConfigRef" v-model="form.fieldConfExt" :disabled="formDisabled" :fieldType="form.fieldType" />
          </template>
          <!-- 日期、日期区间 -->
          <template
            v-else-if="form.fieldType === FieldType.DATE || form.fieldType === FieldType.DATE_RANGE"
          >
            <DatePrecisionConfig
              ref="datePrecisionConfigRef"
              :type="form.fieldType"
              v-model="form.fieldConfExt"
              :disabled="formDisabled"
            />
          </template>
          <!-- 地址、区域、标签 -->
          <template
            v-else-if="
              form.fieldType === FieldType.ADDRESS ||
              form.fieldType === FieldType.REGION
            "
          >
            展示地址、区域的图片
          </template>
          <template v-else-if="form.fieldType === FieldType.TAG">
            <LabelFidldConfig ref="labelFidldConfigRef" v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
          <!-- 文件 -->
          <template v-else>
            <UploadFieldConfig ref="uploadFieldConfigRef" v-model="form.fieldConfExt" :disabled="formDisabled" />
          </template>
        </el-card>
      </el-col>
    </el-row>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button v-show="!formDisabled" type="primary" @click="handleSubmit">确 认</el-button>
      </span>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import * as FieldConfApi from '@/api/system/data/field-conf'
import TextFieldConfig from './config/TextFieldConfig.vue'
import NumberFieldConfig from './config/NumberFieldConfig.vue'
import RadioFieldConfig from './config/RadioFieldConfig.vue'
import DatePrecisionConfig from './config/DatePrecisionConfig.vue'
import UploadFieldConfig from './config/UploadFieldConfig.vue'
import LabelFidldConfig from './config/LabelFidldConfig.vue'
import {
  FieldType,
  FieldTypeLabel,
  EncFlagOptions
} from '@/config/constants/enums/field'
import {
  BusinessType,
  BooleanOptions,
} from '@/config/constants/enums/label'
import {
  BooleanEnum,
} from '@/config/constants/enums/label'
import { defaultFieldConfExt } from '@/config/constants/enums/fieldDefault'
import { convertArrayToObject, convertObjectToArray } from '@/utils'
import { omit } from 'lodash-es'
// 1. 类型定义
type FieldConfigRef = {
  validate: () => Promise<boolean>
  convertFormForSubmission: () => any
}

const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:data'])

// 表单引用
const fieldForm = ref(null)
// 弹窗显示状态
const dialogVisible = ref(false)

// 表单初始值
const defaultForm = () => ({
  manageId: query.manageId as string,
  code: '', // 字段值
  name: '', // 字段名称
  remark: '', // 字段说明
  fieldType: FieldType.TEXT, // 字段类型
  bizType: BusinessType.BASIC, // 字段业务类型 0-系统 1-基础 2-业务
  length: undefined, // 字段长度
  encFlag: BooleanEnum.FALSE, // 0-不加密1-加密
  encType: BooleanEnum.FALSE, // 0-全文加密1-证件号码加密2-手机号码加密
  addFlag: BooleanEnum.FALSE, // 是否新增表单;0-否 1-是
  editFlag: BooleanEnum.FALSE, // 是否编辑表单;0-否 1-是
  appViewFlag: BooleanEnum.FALSE, // 是否移动端展示;0-否 1-是
  pcViewFlag: BooleanEnum.FALSE, // 是否PC端展示;0-否 1-是
  parentCode: "0", // 父级字段编码 当单选、多选时、额外的对象是有这个值
  fieldConfExt: { ...defaultFieldConfExt }
})
const formDisabled = ref(false)
const codeInputDisabled = ref(false)
const tableData = ref<any[]>([])
const textFieldConfigRef = ref<FieldConfigRef>()
const numberFieldConfigRef = ref<FieldConfigRef>()
const radioFieldConfigRef = ref<FieldConfigRef>()
const datePrecisionConfigRef = ref<FieldConfigRef>()
const uploadFieldConfigRef = ref<FieldConfigRef>()
const labelFidldConfigRef = ref<FieldConfigRef>()
// 响应式表单数据
const form = reactive(defaultForm())

// 校验规则
const rules = reactive({
  code: [
    { required: true, message: '请输入 Code', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (codeInputDisabled.value) {
          return  callback()
        }
        if (tableData.value.find((item: any) => item.code === value)) {
          callback(new Error('Code 已存在'))
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  name: [
    { required: true, message: '请输入字段名称', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (codeInputDisabled.value) {
          return  callback()
        }
        if (tableData.value.find((item: any) => item.name === value)) {
          callback(new Error('字段名称已存在'))
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  bizType: [{ required: true, message: '请选择字段类型', trigger: 'change' }],
  length: [{ required: true, message: '请输入字段长度', trigger: 'blur', type: 'number' as const }]
})

// 字段类型与 ref 的映射
const emptyRef = ref<FieldConfigRef>()
const fieldRefMap: Record<FieldType, Ref<FieldConfigRef | undefined>> = {
  [FieldType.TEXT]: textFieldConfigRef,
  [FieldType.NUMBER]: numberFieldConfigRef,
  [FieldType.RADIO]: radioFieldConfigRef,
  [FieldType.CHECKBOX]: radioFieldConfigRef,
  [FieldType.DATE]: datePrecisionConfigRef,
  [FieldType.DATE_RANGE]: datePrecisionConfigRef,
  [FieldType.ADDRESS]: emptyRef,
  [FieldType.REGION]: emptyRef,
  [FieldType.TAG]: labelFidldConfigRef,
  [FieldType.ATTACHMENT]: uploadFieldConfigRef
}

async function validateAndConvertForm(form: { fieldType: FieldType }) {
  const fieldRef = fieldRefMap[form.fieldType]?.value
  if (!fieldRef) return true // 没有配置组件，直接通过
  const isValid = await fieldRef.validate()
  return isValid ? fieldRef.convertFormForSubmission() : false
}

const validateChildForm = async () => {
  if (!fieldForm.value) return false
  try {
    return await validateAndConvertForm(form)
  } catch {
    return false
  }
}

// 提交表单
const handleSubmit = async () => {
  const isRadioOrCheckbox = [FieldType.RADIO, FieldType.CHECKBOX].includes(form.fieldType)
  const isTag = form.fieldType === FieldType.TAG
  let fieldConfExtDOList: typeof defaultFieldConfExt | undefined = undefined
  if (!isTag) {
    fieldConfExtDOList = await validateChildForm()
    if (!fieldConfExtDOList) return
  } else {
    fieldConfExtDOList = convertObjectToArray(JSON.parse(JSON.stringify({ ...defaultFieldConfExt }))).map((item) => ({
      ...item,
      type: 1,
      fieldType: FieldType.TAG,
      optionsJson: '{}'
    }));

  }

  const valid = await (fieldForm.value as any).validate?.()
  if (!valid) return

  const submitData = { ...form, fieldConfExtDOList }
  emits('update:data', omit(submitData, 'fieldConfExt'))
  if (isRadioOrCheckbox) {
    const { code, name } = form
    const newSubmitData = {
      ...submitData,
      parentCode: code as string,
      code: `${code}_parent_code`,
      name: `${name}_parent_name`
    }
    emits('update:data', omit(newSubmitData, ['fieldConfExt', 'fieldConfExtDOList']))
  }

  handleClose()
}

// 重置表单
const resetForm = () => {
  const defaultValues = defaultForm()
  Object.keys(form).forEach(key => {
    delete form[key]
  })
  Object.assign(form, defaultValues)
  form.fieldConfExt = { ...defaultFieldConfExt }
  ;(fieldForm.value as any)?.resetFields()
}

// 关闭弹窗
const handleClose = () => {
  resetForm()
  dialogVisible.value = false
}

// 打开弹窗（支持回显）
const open = async (type: 'add' | 'edit' | 'show', row?: any, openTableData?: any) => {
  formDisabled.value = type === 'show'
  codeInputDisabled.value = type === 'edit'
  tableData.value = openTableData.map((item: any) => ({
    code: item.code,
    name: item.name
  }))
  resetForm()

  // 获取数据源
  const dataSource = row?.id
    ? await FieldConfApi.getFieldConfigDetail({ 'id': row.id as string })
    : row
  if (dataSource) {
    const isRadioOrCheckbox = dataSource.fieldType === FieldType.RADIO || dataSource.fieldType === FieldType.CHECKBOX

    const fieldConfExt = dataSource?.fieldConfExtDOList?.length
      ? (isRadioOrCheckbox
          ? dataSource.fieldConfExtDOList[0]
          : convertArrayToObject(JSON.parse(JSON.stringify(dataSource.fieldConfExtDOList))))
      : { ...defaultFieldConfExt }

    Object.assign(form, dataSource, { fieldConfExt })
  }

  dialogVisible.value = true
}

defineExpose({ open })
</script>
