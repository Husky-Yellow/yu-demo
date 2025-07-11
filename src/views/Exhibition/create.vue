<template>
  <ContentWrap>
    <el-form ref="formRef" :model="formData" :rules="formRules">
      <template v-for="fieldGroup in fieldGroups" :key="fieldGroup.id">
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
                v-if="field.fieldType === FieldType.TEXT"
                v-model.trim="formData[field.code]"
                :placeholder="field.placeholder || `请输入${field.name}`"
                :maxlength="field.length"
                :type="field.fieldConfExtDOList[0].value === '1' ? 'textarea' : 'text'"
                :rows="field.fieldConfExtDOList[0].value === '1' ? 2 : 1"
              />
              <el-input-number
                v-else-if="field.fieldType === FieldType.NUMBER"
                v-model="formData[field.code]"
              />
              <!-- 下拉框 -->
              <el-select
                v-else-if="
                  field.fieldType === FieldType.RADIO || field.fieldType === FieldType.CHECKBOX
                "
                v-model="formData[field.code]"
                :multiple="field.fieldType === FieldType.CHECKBOX"
                :placeholder="`请选择${field.name}`"
              >
                <el-option
                  v-for="option in fieldOptionsMap.get(field.code)"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
              <!-- 单个时间选择器 -->
              <el-date-picker
                class="w-full"
                v-else-if="field.fieldType === FieldType.DATE"
                v-model="formData[field.code]"
                :type="getPickerType(field)"
                :format="getPickerFormat(field)"
                value-format="YYYY/MM/DD HH:mm:ss"
                :placeholder="field.placeholder || `请选择${field.name}`"
              />
              <!-- 时间选择器 -->
              <el-date-picker
                v-else-if="field.fieldType === FieldType.DATE_RANGE"
                v-model="formData[field.code]"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :format="getPickerFormat(field)"
                value-format="YYYY/MM/DD HH:mm:ss"
                :placeholder="field.placeholder || `请选择${field.name}`"
              />
              <UploadFile
                v-else-if="field.fieldType === FieldType.ATTACHMENT"
                v-model="formData[field.code]"
                :file-type="field.allowedTypes"
                :limit="field.countLimit"
                :file-size="field.sizeLimit"
                class="min-w-80px"
              />

              <el-input v-if="field.fieldType === FieldType.TAG" v-model="formData[field.code]" />
              <el-tree-select
                v-if="field.fieldType === FieldType.REGION"
                :data="fieldOptionsMap.get(field.code)"
                v-model="formData[field.code]"
                :render-after-expand="false"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </template>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
        <!-- 调接口看看有没有业务标签，有的话就展示 -->
        <el-button type="primary" @click="handleSubmit">选择标签</el-button>
        <el-button @click="handleCancel">添加户籍人口</el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>
</template>

<script setup lang="ts">
defineOptions({ name: 'ExhibitionCreate' })
import * as DictDataApi from '@/api/system/dict/dict.data'
import * as LabelApi from '@/api/system/label'
import * as DataApi from '@/api/system/data'
import { FormRules } from 'element-plus'
import { useDatePicker } from '@/hooks/useDatePicker'
import {
  validatePatternMapNumber,
  validateUSCC,
  createRequiredRule,
  createRegexRule
} from '@/utils/formRules'
import { filterAndMarkGroups, getFieldSpan } from '@/utils/formatter'
import { FieldType } from '@/config/constants/enums/field'

const route = useRoute()
const router = useRouter()

// 使用日期选择器 composable
const { getPickerType, getPickerFormat } = useDatePicker()

const formRef = ref()
const fieldGroups = ref<any[]>([])
const formData = ref<any>({})
const formRules = reactive<FormRules>({})
const fieldOptionsMap = ref(new Map<string, any[]>()) // 字段选项

// 身份证不可以编辑

// 获取字段选项
const fetchFieldOptions = async (field: any) => {
  const { list } = await DictDataApi.getDictDataPage({
    pageNo: 1,
    pageSize: 10,
    dictType: field.fieldConfExtDOList[0].value
  })
  fieldOptionsMap.value.set(field.code, list)
  // 其他类型可按需扩展
}

// 判断字段是否应该显示 todo zhaokun 这里需要测试
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

// 生成表单验证规则
const generateFormRules = (fields: any[]): FormRules => {
  return fields.reduce((rules: FormRules, field) => {
    let ruleArr: any[] = []

    // 必填验证
    if (field.required) ruleArr.push(createRequiredRule(field.name))

    // 自定义正则验证
    if (field.fieldType === 1) {
      const { required, fieldConfExtObj } = field
      const { regex, prompt = '格式不正确', dataValidation } = fieldConfExtObj
      if (dataValidation === '1' && regex) {
        ruleArr.push(createRegexRule(regex, prompt, required))
      } else if (dataValidation === '3') {
        ruleArr.push({
          validator: (_rule, value, callback) => {
            if (!required && !value) return callback()
            if (!validateUSCC(value)) {
              callback(new Error(prompt))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        })
      } else {
        const regex = validatePatternMapNumber[dataValidation]
        ruleArr.push(createRegexRule(regex, prompt, required))
      }
    }
    if (ruleArr.length) rules[field.code] = ruleArr
    return rules
  }, {})
}

// 处理提交
const handleSubmit = async () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      //todo zhaokun 这里需要更改
      // const manageId = (route.meta.manageId as string) || '1942420981721182210'
      const manageId = '1942420981721182210'
      const businessJson = {}
      // 处理时间范围字段
      fieldGroups.value.forEach((group) => {
        group.fields.forEach((field: any) => {
          if (field.fieldType === FieldType.DATE_RANGE) {
            const val = formData.value[field.code]
            if (Array.isArray(val) && val.length === 2) {
              // code 存第一个时间
              businessJson[field.code] = val[0]
              // code2 存第二个时间
              businessJson[`${field.code}2`] = val[1]
            }
          } else if (field.fieldType === FieldType.CHECKBOX) {
            businessJson[field.code] = Array.isArray(formData.value[field.code])
              ? formData.value[field.code].join(',')
              : ''
          } else {
            businessJson[field.code] = formData.value[field.code]
          }
        })
      })
      try {
        let res;
        if (route.query.editType && route.query.id) {
          res = await DataApi.updateBusinessData({
            businessJson,
            id: route.query.id as string,
            manageId
          });
          ElMessage.success('更新成功');
        } else {
          res = await DataApi.createBusinessData({
            businessJson,
            manageId
          });
          ElMessage.success('添加成功');
        }
        console.log(res);
      } catch (err) {
        console.log(err);
        ElMessage.error(route.query.editType ? '更新失败' : '添加失败');
      }

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
  // const manageId = (route.meta.manageId as string) || '1942420981721182210'
  const manageId = '1942420981721182210'
  const formType = route.query.type === 'people' ? 1 : 2
  const editType = route.query.editType
  const id = route.query.id
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId
  })
  let businessData = {}
  if (editType) {
    businessData = await DataApi.getBusinessData({
      id: id as string,
      manageId
    })
  }
  const flagKey = formType === 1 ? 'addFlag' : 'editFlag'
  const filteredRes = res.filter((item: any) => item[flagKey])
  const formConfData = await LabelApi.getViewFormConf({
    manageId,
    formType: formType
  })

  const rawData = JSON.parse(formConfData.formJson)
  const allowedIds = filteredRes.map((item: any) => item.id)
  const filteredData = filterAndMarkGroups(rawData, allowedIds)

  // 设置字段组数据
  // 初始化表单数据
  formData.value = {}
  if (filteredData && Array.isArray(filteredData)) {
    // 修正 fieldConfExtDOList 的 type 字段类型
    filteredData.forEach((group) => {
      group.fields.forEach((field: any) => {
        if (Array.isArray(field.fieldConfExtDOList)) {
          field.fieldConfExtDOList.forEach((item: any) => {
            item.type = item.type == null ? 0 : Number(item.type)
          })
        }
        if (field.fieldType === FieldType.RADIO || field.fieldType === FieldType.CHECKBOX) {
          fetchFieldOptions(field)
        }
        formData.value[field.code] = ''
      })
    })
    fieldGroups.value = filteredData as unknown as any
    // 初始化表单数据
    formData.value = {}
    filteredData.forEach((group) => {
      group.fields.forEach((field: any) => {
        formData.value[field.code] = businessData[field.code] || ''
      })
    })
    // 生成验证规则
    const allFields = filteredData
      .flatMap((group: any) => group.fields)
      .map((field: any) => ({
        ...field,
        fieldConfExtDOList:
          field.fieldConfExtDOList?.map((item: any) => ({
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
</script>

<style scoped lang="scss"></style>
