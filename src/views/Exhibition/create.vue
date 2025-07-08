<template>
  <ContentWrap>
    <!-- 动态表单 -->
    <el-form ref="formRef" :model="formData" label-width="100px" :rules="formRules">
      <template v-for="fieldGroup in fieldGroups" :key="fieldGroup.id">
        <!-- 使用行布局，每行最多显示2个字段 -->
        <el-row :gutter="20">
          <el-col
            v-for="field in fieldGroup.fields"
            :key="field.id"
            :span="getFieldSpan(fieldGroup)"
            v-show="isFieldVisible(field)"
          >
            <el-form-item :label="field.name" :prop="field.code" :required="field.required">
              <!-- 输入框 -->
              <el-input
                v-if="field.fieldType === 1"
                v-model="formData[field.code]"
                :placeholder="field.placeholder || `请输入${field.name}`"
                :maxlength="field.length"
                :type="field.fieldConfExtDOList[0].value === '1' ? 'textarea' : 'text'"
                :rows="field.fieldConfExtDOList[0].value === '1' ? 2 : 1"
              />
              <!-- 下拉框 -->
              <el-select
                v-else-if="field.fieldType === 2"
                v-model="formData[field.code]"
                :placeholder="`请选择${field.name}`"
              >
                <el-option
                  v-for="option in getFieldOptions(field)"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
              <!-- 时间选择器 -->
              <el-date-picker
                v-else-if="field.fieldType === 6"
                v-model="formData[field.code]"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :format="getPickerFormat(field)"
                :value-format="getPickerFormat(field)"
                :placeholder="field.placeholder || `请选择${field.name}`"
              />
              <!-- 单个时间选择器 -->
              <el-date-picker
                class="w-full"
                v-else-if="field.fieldType === 5"
                v-model="formData[field.code]"
                                  :type="getPickerType(field)"
                  :format="getPickerFormat(field)"
                  :value-format="getPickerFormat(field)"
                :placeholder="field.placeholder || `请选择${field.name}`"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </template>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>
</template>

<script setup lang="ts">
defineOptions({ name: 'ExhibitionCreate' })
import * as LabelApi from '@/api/system/label'
import * as DataApi from '@/api/system/data'
import { FormRules } from 'element-plus'
import { useDatePicker } from '@/hooks/useDatePicker'
import { validatePatternMapNumber } from '@/utils/formRules'

const route = useRoute()
const router = useRouter()

// 使用日期选择器 composable
const { getPickerType, getPickerFormat } = useDatePicker()

const formRef = ref()
const fieldGroups = ref<any[]>([])
const formData = ref<any>({})
const formRules = reactive<FormRules>({})

// 身份证不可以编辑

// 获取字段选项
const getFieldOptions = (field: any): Array<{ label: string; value: string | number }> => {
  // 根据字段配置返回选项
  if (field.code === 'gender') {
    return [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
      { label: '其他', value: 'other' }
    ]
  }
  if (field.code === 'education') {
    return [
      { label: '小学', value: 'primary' },
      { label: '初中', value: 'junior' },
      { label: '高中', value: 'senior' },
      { label: '大专', value: 'college' },
      { label: '本科', value: 'bachelor' },
      { label: '硕士', value: 'master' },
      { label: '博士', value: 'doctor' }
    ]
  }
  if (field.code === 'status') {
    return [
      { label: '在职', value: 'active' },
      { label: '离职', value: 'inactive' },
      { label: '实习', value: 'intern' }
    ]
  }
  // 默认返回空数组
  return []
}

// 布局配置常量
const LAYOUT_CONFIG = {
  FULL_WIDTH: 24,    // 占满整行
  HALF_WIDTH: 12,    // 占半行
  THIRD_WIDTH: 8,    // 占1/3行
  QUARTER_WIDTH: 6   // 占1/4行
} as const

// 获取字段占用的列数
const getFieldSpan = (fieldGroup: any): number => {
  // 安全获取字段数量
  const fieldCount = fieldGroup?.fields?.length || 0

  // 布局规则：
  // - 0个字段：不显示
  // - 1个字段：占满整行
  // - 2个字段：每行2个字段
  // - 3个以上字段：每行2个字段
  switch (fieldCount) {
    case 0:
      return 0
    case 1:
      return LAYOUT_CONFIG.FULL_WIDTH
    default:
      return LAYOUT_CONFIG.HALF_WIDTH
  }
}

// 判断字段是否应该显示
const isFieldVisible = (field: any) => {
  const linkage = field.linkage
  if (!linkage || !linkage.enabled) {
    return true // 没有关联配置或未启用，默认显示
  }

  const targetFieldId = linkage.targetFieldId
  const targetFieldValue = linkage.targetFieldValue
  const condition = linkage.condition

  if (!targetFieldId) {
    return true
  }

  // 找到目标字段的值
  let targetValue = null
  for (const group of fieldGroups.value) {
    for (const f of group.fields) {
      if (f.id === targetFieldId) {
        targetValue = formData.value[f.code]
        break
      }
    }
    if (targetValue !== null) break
  }

  // 根据条件判断是否显示
  switch (condition) {
    case 'equals':
      return targetValue === targetFieldValue
    case 'notEquals':
      return targetValue !== targetFieldValue
    case 'contains':
    case 'notContains':
    case 'startsWith':
    case 'endsWith':
      return String(targetValue).includes(String(targetFieldValue))
    default:
      return true
  }
}

// 创建必填验证规则
const createRequiredRule = (fieldName: string) => ({
  required: true,
  message: `请输入${fieldName}`,
  trigger: 'blur'
})

// 创建正则验证规则
const createRegexRule = (regex: string, prompt: string) => ({
  validator: (_rule: any, value: string, callback: (msg?: string) => void) => {
    if (!value) return callback()
    try {
      if (!new RegExp(regex).test(value)) return callback(prompt)
      callback()
    } catch {
      callback('正则表达式有误')
    }
  },
  trigger: 'blur'
} as any)

// 生成表单验证规则
const generateFormRules = (fields: any[]): FormRules => {
  return fields.reduce((rules: FormRules, field) => {
    const ruleArr: any[] = []

    // 必填验证
    if (field.required) ruleArr.push(createRequiredRule(field.name))

    // 自定义正则验证
    if(field.fieldType === 1){
      if (field.fieldConfExtObj?.dataValidation === '1' && field.fieldConfExtObj?.regex) {
        const { regex, prompt = '格式不正确' } = field.fieldConfExtObj
        ruleArr.push(createRegexRule(regex, prompt))
      }
      else {
        const regex = validatePatternMapNumber[field.fieldConfExtObj?.dataValidation]
        ruleArr.push(createRegexRule(regex, '格式不正确'))
      }
    }

    if (ruleArr.length) rules[field.code] = ruleArr
    return rules
  }, {})
}

// 处理提交
const handleSubmit = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      const manageId = '1938148839818596353'
      console.log('表单数据:', formData.value)
      // 处理时间范围字段
      fieldGroups.value.forEach(group => {
        group.fields.forEach((field: any) => {
          if (field.fieldType === 6) {
            const val = formData.value[field.code]
            if (Array.isArray(val) && val.length === 2) {
              // code 存第一个时间
              formData.value[field.code] = val[0]
              // code2 存第二个时间
              formData.value[`${field.code}2`] = val[1]
            }
          }
        })
      })
      DataApi.createBusinessData({
        businessJson: formData.value,
        manageId
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      // 这里处理提交逻辑
    } else {
      console.log('表单验证失败')
    }
  })
}

// 处理取消
const handleCancel = () => {
  router.back()
}

const init = async () => {
  // const manageId = (route.meta.manageId as string) || '1938148839818596353'
  const manageId = '1938148839818596353'
  const formType = route.query.type === 'people' ? 1 : 2
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId
  })
  let filteredRes = res
  if (formType === 1) {
    filteredRes = res.filter((item) => item.addFlag)
  } else {
    filteredRes = res.filter((item) => item.editFlag)
  }
  const formConfData = await LabelApi.getViewFormConf({
    manageId,
    formType: formType
    // id: query.lableId as string
  })
  // const formJson = JSON.parse(formConfData.formJson)
  const formJson = [
    {
      id: '1940674274209079298',
      fields: [
        {
          id: '1940674274209079298',
          code: 'name',
          name: '姓名',
          sort: 8,
          length: 10,
          remark: '输入姓名',
          addFlag: 1,
          bizType: '0',
          encFlag: 0,
          encType: 0,
          linkage: {
            effect: 'show',
            enabled: false,
            condition: 'equals',
            targetFieldId: null,
            targetFieldValue: null
          },
          version: null,
          editFlag: 1,
          manageId: '1938148839818596353',
          required: true,
          fieldType: 1,
          createTime: 1751527778000,
          parentCode: '0',
          pcViewFlag: 1,
          appViewFlag: 1,
          placeholder: '',
          fieldConfExtObj: {
            value: '0'
          },
          fieldConfExtDOList: [
            {
              id: '1940674278269165569',
              code: null,
              name: 'textType',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940674274209079298',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751527779000,
              updateTime: 1751527779000,
              optionsJson: '{"0": "single", "1": "multi"}'
            },
            {
              id: '1940674278336274434',
              code: null,
              name: 'duplicateCheck',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940674274209079298',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751527779000,
              updateTime: 1751527779000,
              optionsJson: '{"0": "check", "1": "noCheck"}'
            },
            {
              id: '1940674278336274435',
              code: null,
              name: 'dataValidation',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940674274209079298',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751527779000,
              updateTime: 1751527779000,
              optionsJson:
                '{"0": "none", "1": "custom", "2": "idCard", "3": "creditCode", "4": "mobile", "5": "phone"}'
            },
            {
              id: '1940674278336274436',
              code: null,
              name: 'regex',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1940674274209079298',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751527779000,
              updateTime: 1751527779000,
              optionsJson: '{}'
            },
            {
              id: '1940674278336274437',
              code: null,
              name: 'prompt',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1940674274209079298',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751527779000,
              updateTime: 1751527779000,
              optionsJson: '{}'
            }
          ]
        }
      ],
      showPlaceholder: false
    },
    {
      id: '1940687680404234241',
      fields: [
        {
          id: '1940687680404234241',
          code: 'Idcard',
          name: '身份证',
          sort: 9,
          length: 20,
          remark: '身份证号',
          addFlag: 1,
          bizType: '0',
          encFlag: 0,
          encType: 0,
          linkage: {
            effect: 'show',
            enabled: false,
            condition: 'equals',
            targetFieldId: null,
            targetFieldValue: null
          },
          version: null,
          editFlag: 1,
          manageId: '1938148839818596353',
          required: false,
          fieldType: 1,
          createTime: 1751530974000,
          parentCode: '0',
          pcViewFlag: 1,
          appViewFlag: 1,
          placeholder: '',
          fieldConfExtObj: {
            value: '0'
          },
          fieldConfExtDOList: [
            {
              id: '1940687684137164801',
              code: null,
              name: 'textType',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940687680404234241',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751530975000,
              updateTime: 1751530975000,
              optionsJson: '{"0": "single", "1": "multi"}'
            },
            {
              id: '1940687684137164802',
              code: null,
              name: 'duplicateCheck',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940687680404234241',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751530975000,
              updateTime: 1751530975000,
              optionsJson: '{"0": "check", "1": "noCheck"}'
            },
            {
              id: '1940687684137164803',
              code: null,
              name: 'dataValidation',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1940687680404234241',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751530975000,
              updateTime: 1751530975000,
              optionsJson:
                '{"0": "none", "1": "custom", "2": "idCard", "3": "creditCode", "4": "mobile", "5": "phone"}'
            },
            {
              id: '1940687684137164804',
              code: null,
              name: 'regex',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1940687680404234241',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751530975000,
              updateTime: 1751530975000,
              optionsJson: '{}'
            },
            {
              id: '1940687684137164805',
              code: null,
              name: 'prompt',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1940687680404234241',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751530975000,
              updateTime: 1751530975000,
              optionsJson: '{}'
            }
          ]
        }
      ],
      showPlaceholder: false
    },
    {
      id: '1940968735346536450',
      fields: [
        {
          id: '1940968735346536450',
          code: 'time',
          name: '时间',
          sort: 11,
          length: 11,
          remark: '时间',
          addFlag: 1,
          bizType: '0',
          encFlag: 0,
          encType: 0,
          linkage: {
            effect: 'show',
            enabled: false,
            condition: 'equals',
            targetFieldId: null,
            targetFieldValue: null
          },
          version: null,
          editFlag: 1,
          manageId: '1938148839818596353',
          required: false,
          fieldType: 5,
          createTime: 1751597983000,
          parentCode: '0',
          pcViewFlag: 1,
          appViewFlag: 1,
          placeholder: '',
          fieldConfExtObj: {},
          fieldConfExtDOList: [
            {
              id: '1940968739465342978',
              code: null,
              name: 'datePrecision',
              type: 2,
              value: '2',
              creator: '1',
              deleted: false,
              fieldId: '1940968735346536450',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 5,
              createTime: 1751597984000,
              updateTime: 1751597984000,
              optionsJson:
                '"{\\"0\\":\\"选至年例：YYYY\\",\\"1\\":\\"选至月例：YYYY/MM\\",\\"2\\":\\"选至日例：YYYY/MM/DD\\",\\"3\\":\\"选至时例：YYYY/MM/DD HH:00\\",\\"4\\":\\"选至分例：YYYY/MM/DD HH:mm\\",\\"5\\":\\"选至秒例：YYYY/MM/DD HH:mm:ss\\"}"'
            },
            {
              id: '1940968739465342979',
              code: null,
              name: 'code2',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1940968735346536450',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 5,
              createTime: 1751597984000,
              updateTime: 1751597984000,
              optionsJson:
                '"{\\"0\\":\\"选至年例：YYYY\\",\\"1\\":\\"选至月例：YYYY/MM\\",\\"2\\":\\"选至日例：YYYY/MM/DD\\",\\"3\\":\\"选至时例：YYYY/MM/DD HH:00\\",\\"4\\":\\"选至分例：YYYY/MM/DD HH:mm\\",\\"5\\":\\"选至秒例：YYYY/MM/DD HH:mm:ss\\"}"'
            }
          ]
        },
        {
          id: '1940700568388911106',
          code: 'timearea',
          name: '时间段',
          addFlag: 1,
          bizType: '0',
          linkage: {
            effect: 'show',
            enabled: false,
            condition: 'equals',
            targetFieldId: null,
            targetFieldValue: null
          },
          editFlag: 1,
          manageId: '1938148839818596353',
          required: false,
          fieldType: 6,
          pcViewFlag: 1,
          placeholder: ''
        }
      ],
      showPlaceholder: false
    },
    {
      id: '1942099392298754049',
      fields: [
        {
          id: '1942099392298754049',
          code: 'textarea',
          name: '多行文本',
          sort: 13,
          length: 20,
          remark: '多行文本',
          addFlag: 1,
          bizType: '0',
          encFlag: 0,
          encType: 0,
          linkage: {
            effect: 'show',
            enabled: false,
            condition: 'equals',
            targetFieldId: null,
            targetFieldValue: null
          },
          version: null,
          editFlag: 1,
          manageId: '1938148839818596353',
          required: false,
          fieldType: 1,
          createTime: 1751867552000,
          parentCode: '0',
          pcViewFlag: 1,
          appViewFlag: 1,
          placeholder: '',
          fieldConfExtObj: {
            value: '1'
          },
          fieldConfExtDOList: [
            {
              id: '1942099394257494018',
              code: null,
              name: 'textType',
              type: 2,
              value: '1',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{"0": "single", "1": "multi"}'
            },
            {
              id: '1942099394257494019',
              code: null,
              name: 'duplicateCheck',
              type: 2,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{"0": "check", "1": "noCheck"}'
            },
            {
              id: '1942099394324602882',
              code: null,
              name: 'dataValidation',
              type: 2,
              value: '4',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson:
                '{"0": "none", "1": "custom", "2": "idCard", "3": "creditCode", "4": "mobile", "5": "phone"}'
            },
            {
              id: '1942099394324602883',
              code: null,
              name: 'regex',
              type: 1,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602884',
              code: null,
              name: 'prompt',
              type: 1,
              value: '手机号不符合规范',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602885',
              code: null,
              name: 'numberType',
              type: null,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602886',
              code: null,
              name: 'decimalPlaces',
              type: null,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602887',
              code: null,
              name: 'datePrecision',
              type: null,
              value: '0',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602888',
              code: null,
              name: 'code2',
              type: null,
              value: '',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394324602889',
              code: null,
              name: 'sizeLimit',
              type: null,
              value: '1',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394412683265',
              code: null,
              name: 'countLimit',
              type: null,
              value: '1',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            },
            {
              id: '1942099394412683266',
              code: null,
              name: 'allowedTypes',
              type: null,
              value: 'jpeg,bmp,jpg,png,pdf',
              creator: '1',
              deleted: false,
              fieldId: '1942099392298754049',
              updater: '1',
              parentId: null,
              tenantId: 1,
              checkType: null,
              fieldType: 1,
              createTime: 1751867553000,
              updateTime: 1751867553000,
              optionsJson: '{}'
            }
          ]
        }
      ],
      showPlaceholder: false
    },
    {
      id: '1942127082166820866',
      fields: [
        {
          id: '1942127082166820866',
          manageId: '1938148839818596353',
          code: 'zhengzhe',
          name: '正则2',
          remark: '正则2',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 20,
          encFlag: 0,
          addFlag: 1,
          editFlag: 1,
          appViewFlag: 1,
          pcViewFlag: 1,
          sort: 15,
          version: null,
          createTime: 1751874154000,
          parentCode: '0',
          fieldConfExtDOList: [
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531842',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'textType',
              value: '0',
              type: 2,
              optionsJson: '{"0": "single", "1": "multi"}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531843',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'duplicateCheck',
              value: '0',
              type: 2,
              optionsJson: '{"0": "check", "1": "noCheck"}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531844',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'dataValidation',
              value: '1',
              type: 2,
              optionsJson:
                '{"0": "none", "1": "custom", "2": "idCard", "3": "creditCode", "4": "mobile", "5": "phone"}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531845',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'regex',
              value: '^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$',
              type: 1,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531846',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'prompt',
              value: '写的不对',
              type: 1,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086650531847',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'numberType',
              value: '0',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640705',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'decimalPlaces',
              value: '0',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640706',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'datePrecision',
              value: '0',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640707',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'code2',
              value: '',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640708',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'sizeLimit',
              value: '1',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640709',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'countLimit',
              value: '1',
              type: null,
              optionsJson: '{}',
              checkType: null
            },
            {
              createTime: 1751874155000,
              updateTime: 1751874155000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1942127086717640710',
              fieldId: '1942127082166820866',
              fieldType: 1,
              parentId: null,
              code: null,
              name: 'allowedTypes',
              value: 'jpeg,bmp,jpg,png,pdf',
              type: null,
              optionsJson: '{}',
              checkType: null
            }
          ],
          fieldConfExtObj: {
            textType: '0',
            duplicateCheck: '0',
            dataValidation: '1',
            regex: '^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$',
            prompt: '写的不对',
            numberType: '0',
            decimalPlaces: '0',
            datePrecision: '0',
            code2: '',
            sizeLimit: '1',
            countLimit: '1',
            allowedTypes: 'jpeg,bmp,jpg,png,pdf'
          },
          required: false,
          placeholder: '',
          linkage: {
            enabled: false,
            targetFieldId: null,
            targetFieldValue: null,
            effect: 'show',
            condition: 'equals'
          }
        }
      ],
      showPlaceholder: false
    }
  ]
  const rawData = JSON.parse(formConfData.formJson)
  const allowedIds = filteredRes.map((item: any) => item.id)
  const filteredData = Array.isArray(rawData)
    ? rawData
        .map((group: any) => {
          // 过滤 fields
          const filteredFields = Array.isArray(group.fields)
            ? group.fields.filter((field: any) => allowedIds.includes(field.id))
            : []
          // 返回新分组对象
          return {
            ...group,
            fields: filteredFields,
            singleRow: filteredFields.length === 1 // 标记单行
          }
        })
        // 只保留 fields 不为空的分组
        .filter((group: any) => group.fields.length > 0)
    : rawData

  console.log('表单配置数据:', formJson)

  // 设置字段组数据
  if (filteredData && Array.isArray(filteredData)) {
    // 修正 fieldConfExtDOList 的 type 字段类型
    filteredData.forEach((group) => {
      group.fields.forEach((field: any) => {
        if (Array.isArray(field.fieldConfExtDOList)) {
          field.fieldConfExtDOList.forEach((item: any) => {
            item.type = item.type == null ? 0 : Number(item.type)
          })
        }
      })
    })
    fieldGroups.value = filteredData as unknown as any
    // 初始化表单数据
    formData.value = {}
    filteredData.forEach((group) => {
      group.fields.forEach((field: any) => {
        formData.value[field.code] = ''
      })
    })
    // 生成验证规则
    const allFields = formJson.flatMap((group: any) => group.fields).map((field: any) => ({
      ...field,
      fieldConfExtDOList: field.fieldConfExtDOList?.map((item: any) => ({
        ...item,
        type: item.type == null ? 0 : Number(item.type)
      })) || []
    }))
    Object.assign(formRules, generateFormRules(allFields))
  }
}

onMounted(() => {
  init()
})

// 监听表单数据变化，触发字段显示状态重新计算
watch(
  formData,
  () => {
    // 强制重新渲染，触发 isFieldVisible 重新计算
    nextTick(() => {
      // 这里可以添加额外的逻辑
    })
  },
  { deep: true }
)
</script>

<style scoped lang="scss"></style>
