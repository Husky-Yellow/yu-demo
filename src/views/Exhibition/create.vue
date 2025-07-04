<template>
  <div>
    <h1>创建</h1>
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
                 :format="getTimePickerFormat(field)"
                  :value-format="getTimePickerFormat(field)"
                  :placeholder="field.placeholder || `请选择${field.name}`"
                />
                <!-- 单个时间选择器 -->
                <el-date-picker
                  class="w-full"
                  v-else-if="field.fieldType === 5"
                  v-model="formData[field.code]"
                  :type="getTimePickerType(field)"
                  :format="getTimePickerFormat(field)"
                  :value-format="getTimePickerFormat(field)"
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
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ExhibitionCreate' })
import * as LabelApi from '@/api/system/label'
import { FormRules } from 'element-plus'

const route = useRoute()
const router = useRouter()

const formRef = ref()
const fieldGroups = ref<any[]>([])
const formData = ref<any>({})
const formRules = reactive<FormRules>({})

// 获取字段选项
const getFieldOptions = (field: any) => {
  // 根据字段配置返回选项，暂时返回空数组
  return []
}

// 获取时间选择器类型
const getTimePickerType = (field: any) => {
  const datePrecision = getFieldConfigValue(field, 'datePrecision')
  switch (datePrecision) {
    case '0':
      return 'year'
    case '1':
      return 'month'
    case '2':
      return 'date'
    case '3':
      return 'datetime'
    case '4':
      return 'datetime'
    case '5':
      return 'datetime'
    default:
      return 'datetime'
  }
}

// 获取时间选择器显示格式
const getTimePickerFormat = (field: any) => {
  const datePrecision = getFieldConfigValue(field, 'datePrecision')
  switch (datePrecision) {
    case '0':
      return 'YYYY'
    case '1':
      return 'YYYY/MM'
    case '2':
      return 'YYYY/MM/DD'
    case '3':
      return 'YYYY/MM/DD HH:00'
    case '4':
      return 'YYYY/MM/DD HH:mm'
    case '5':
      return 'YYYY/MM/DD HH:mm:ss'
    default:
      return 'YYYY/MM/DD HH:mm:ss'
  }
}

// 获取字段配置值
const getFieldConfigValue = (field: any, configName: string) => {
  if (!field.fieldConfExtDOList) return ''
  const config = field.fieldConfExtDOList.find((item: any) => item.name === configName)
  return config ? config.value : ''
}

// 获取字段占用的列数
const getFieldSpan = (fieldGroup: any) => {
  // 所有字段都占用12列，一行显示2个字段
  const fields = fieldGroup.fields.length
  if (fields === 1) {
    return 24
  } else {
    return 12
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
      return String(targetValue).includes(String(targetFieldValue))
    case 'notContains':
      return !String(targetValue).includes(String(targetFieldValue))
    case 'startsWith':
      return String(targetValue).startsWith(String(targetFieldValue))
    case 'endsWith':
      return String(targetValue).endsWith(String(targetFieldValue))
    default:
      return true
  }
}

// 生成表单验证规则
const generateFormRules = (fields: any[]) => {
  const rules: FormRules = {}
  fields.forEach((field) => {
    if (field.required) {
      rules[field.code] = [{ required: true, message: `请输入${field.name}`, trigger: 'blur' }]
    }
  })
  return rules
}

// 处理提交
const handleSubmit = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      console.log('表单数据:', formData.value)
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
          fieldConfExtObj: { value: '0' },
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
          fieldConfExtObj: { value: '0' },
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
          manageId: '1938148839818596353',
          code: 'time',
          name: '时间',
          remark: '时间',
          fieldType: 5,
          bizType: '0',
          encType: 0,
          length: 11,
          encFlag: 0,
          addFlag: 1,
          editFlag: 1,
          appViewFlag: 1,
          pcViewFlag: 1,
          sort: 11,
          version: null,
          createTime: 1751597983000,
          parentCode: '0',
          fieldConfExtDOList: [
            {
              createTime: 1751597984000,
              updateTime: 1751597984000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1940968739465342978',
              fieldId: '1940968735346536450',
              fieldType: 5,
              parentId: null,
              code: null,
              name: 'datePrecision',
              value: '2',
              type: 2,
              optionsJson:
                '"{\\"0\\":\\"选至年例：YYYY\\",\\"1\\":\\"选至月例：YYYY/MM\\",\\"2\\":\\"选至日例：YYYY/MM/DD\\",\\"3\\":\\"选至时例：YYYY/MM/DD HH:00\\",\\"4\\":\\"选至分例：YYYY/MM/DD HH:mm\\",\\"5\\":\\"选至秒例：YYYY/MM/DD HH:mm:ss\\"}"',
              checkType: null
            },
            {
              createTime: 1751597984000,
              updateTime: 1751597984000,
              creator: '1',
              updater: '1',
              deleted: false,
              tenantId: 1,
              id: '1940968739465342979',
              fieldId: '1940968735346536450',
              fieldType: 5,
              parentId: null,
              code: null,
              name: 'code2',
              value: '',
              type: 1,
              optionsJson:
                '"{\\"0\\":\\"选至年例：YYYY\\",\\"1\\":\\"选至月例：YYYY/MM\\",\\"2\\":\\"选至日例：YYYY/MM/DD\\",\\"3\\":\\"选至时例：YYYY/MM/DD HH:00\\",\\"4\\":\\"选至分例：YYYY/MM/DD HH:mm\\",\\"5\\":\\"选至秒例：YYYY/MM/DD HH:mm:ss\\"}"',
              checkType: null
            }
          ],
          fieldConfExtObj: {},
          required: false,
          placeholder: '',
          linkage: {
            enabled: false,
            targetFieldId: null,
            targetFieldValue: null,
            effect: 'show',
            condition: 'equals'
          }
        },
        {
          id: '1940700568388911106',
          manageId: '1938148839818596353',
          code: 'timearea',
          name: '时间段',
          fieldType: 6,
          bizType: '0',
          addFlag: 1,
          editFlag: 1,
          pcViewFlag: 1,
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

  console.log('表单配置数据:', formJson)

  // 设置字段组数据
  if (formJson && Array.isArray(formJson)) {
    fieldGroups.value = formJson
    // 初始化表单数据
    formData.value = {}
    formJson.forEach((group) => {
      group.fields.forEach((field: any) => {
        formData.value[field.code] = ''
      })
    })
    // 生成验证规则
    const allFields = formJson.flatMap((group) => group.fields)
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
