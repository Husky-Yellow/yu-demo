<template>
  <ContentWrap>
    <!-- <el-check-tag checked>Checked</el-check-tag> -->
    <div class="flex justify-between gap-2 mt-2">
      <el-card shadow="never" class="w-5/6">
        <template #header>
          <div class="flex justify-between">
            <span>详情</span>
            <el-popover :visible="popoverVisible" :width="400" trigger="click">
              <template #reference>
                <el-button type="primary" @click="showSensitivePassword">输入敏感密码</el-button>
              </template>
              <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item label="密码">
                  <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">验证</el-button>
                </el-form-item>
              </el-form>
            </el-popover>
          </div>
        </template>
        <el-form ref="formRef" :model="formData">
          <template v-for="fieldGroup in fieldGroups" :key="fieldGroup.id">
            <el-row :gutter="20">
              <el-col
                v-for="field in fieldGroup.fields"
                :key="field.id"
                :span="getFieldSpan(fieldGroup)"
                v-show="isFieldVisible(field)"
              >
                <el-form-item :label="field.name">
                  <!-- 图片用 -->
                  {{ genterFormText(field) }}
                </el-form-item>
              </el-col>
            </el-row>
          </template>
        </el-form>
      </el-card>
      <el-card shadow="never" class="w-1/6" v-if="tabConfigs.length > 1">
        <div class="flex flex-col mb-4" v-for="tab in tabConfigs" :key="tab.value">
          <!-- 点击出现弹窗，弹窗显示对应 显示该人口数据的基础和业务标签（最后层级）
                点击标签，弹窗展示该标签对应的详情
                当只存在一个标签时候，不显示该标签栏 -->
          <el-button
            :type="activeTab === tab.value ? 'primary' : 'info'"
            @click="activeTab = tab.value"
            block
          >
            {{ tab.label }}
          </el-button>
        </div>
      </el-card>
    </div>
  </ContentWrap>
</template>

<script setup lang="ts">
import * as BusinessDataApi from '@/api/system/business-data'
import * as DictDataApi from '@/api/system/dict/dict.data'
import * as ViewFormConfApi from '@/api/system/data/view-form-conf'
import { dateFormatter, filterAndMarkGroups, getFieldSpan } from '@/utils/formatter'
import { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { FieldType } from '@/config/constants/enums/field'
import { FormRow } from '@/hooks/web/useFormEditHandlers'
import { BooleanEnum } from '@/config/constants/enums/label'
import * as FieldConfApi from '@/api/system/data/field-conf'

defineOptions({ name: 'ExhibitionDetail' })

const route = useRoute()

const formData = ref<Record<string, any>>({})
const fieldGroups = ref<any>(null) // 接口返回来的表单配置 null 为需要调创建
const formRows = ref<FormRow[]>([])
const fieldOptionsMap = ref(new Map<string, any[]>()) // 下拉框枚举数据
const tabConfigs = ref<any[]>([]) // 标签展示数据
const activeTab = ref<string | undefined>(undefined)
const popoverVisible = ref(false)
const form = ref({
  password: ''
})

const genterFormText = (field: LabelFieldConfig) => {
  const { fieldType, code } = field

  if (fieldType === FieldType.TEXT || fieldType === FieldType.NUMBER) {
    return formData.value[code]
  }
  if (fieldType === FieldType.DATE || fieldType === FieldType.DATE_RANGE) {
    return dateFormatter(undefined, undefined, formData.value[code])
  }
  if (fieldType === FieldType.RADIO || fieldType === FieldType.CHECKBOX) {
    const value = String(formData.value[code] || '')
    const valueArr = value.split(',').filter(Boolean)
    return valueArr
      .map((value) => fieldOptionsMap.value.get(code)?.find((item) => item.value === value)?.label)
      .filter(Boolean)
      .join(',')
  }
  if (fieldType === FieldType.ATTACHMENT) {
    return formData.value[code]
  }
  // todo zhaokun 处理数据类型
  if (fieldType === FieldType.TAG) {
  }
}

const showSensitivePassword = () => {
  popoverVisible.value = true
}

const onSubmit = () => {
  if (form.value.password === '123456') {
    popoverVisible.value = false
    ElMessage.success('密码正确')
  } else {
    ElMessage.error('密码错误')
  }
}

const setLayoutData = (data: FormRow[]) => {
  if (!data || !Array.isArray(data)) {
    console.error('加载布局失败：提供了无效的数据。')
    return
  }
  formRows.value = JSON.parse(JSON.stringify(data))
  let maxId = 0
  data.forEach((row) => {
    const rowIdNum = parseInt(row.id.split('-')[1])
    if (rowIdNum > maxId) maxId = rowIdNum
    row.fields.forEach((field) => {
      const fieldIdNum = parseInt(field.id.split('-')[1])
      if (fieldIdNum > maxId) maxId = fieldIdNum
    })
  })
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

// 获取对应标签的详情配置接口
const getDetailConfig = async () => {
  try {
    // TODO: 从路由或配置中获取 manageId
    // const manageId = (route.meta.manageId as string) || '1942420981721182210'
    const manageId = '1942420981721182210'
    const businessId = route.query.id as string

    if (!businessId) {
      ElMessage.error('缺少业务数据ID')
      return
    }

    // 并行获取数据，提高性能
    const [fieldConfigs, formConfData, businessData] = await Promise.all([
      FieldConfApi.getFieldConfigListByManageId({ manageId }),
      ViewFormConfApi.getViewFormConf({ manageId, formType: 2 }),
      BusinessDataApi.getBusinessData({ id: businessId, manageId })
    ])

    if (!formConfData) {
      ElMessage.warning('未找到表单配置数据')
      return
    }

    formData.value = businessData

    if (!formConfData.formJson) {
      return
    }

    // 解析表单配置
    const rawData = JSON.parse(formConfData.formJson)
    const allowedIds = fieldConfigs
      .filter((config) => config.pcViewFlag === BooleanEnum.TRUE && config.id)
      .map((config) => config.id!)

    const filteredData = filterAndMarkGroups(rawData, allowedIds)

    // 填充业务数据
    filteredData.forEach((group: any) => {
      if (group.fields?.length) {
        group.fields.forEach((field: any) => {
          if (field.fieldType === FieldType.RADIO || field.fieldType === FieldType.CHECKBOX) {
            fetchFieldOptions(field)
          }
          const businessValue = businessData[field.code]
          if (businessValue !== undefined) {
            field.value = businessValue
          }
        })
      }
    })

    fieldGroups.value = filteredData

    setLayoutData(filteredData as unknown as FormRow[])
  } catch (error) {
    console.error('获取详情配置失败:', error)
    ElMessage.error('获取详情配置失败')
  }
}
// 生命周期钩子
onMounted(() => {
  getDetailConfig()
})
</script>
