<template>
  <div class="detail-page">
    <!-- 这里还有 tag 循环 -->
    <!-- 如果是敏感字段要展示 *** 点击输入名敏感密码后，打开弹窗输入密码，然后就可以展示敏感字段了 -->
    <div class="detail-main">
      <el-card>
        <div class="photo-block">
          <el-image :src="detailData.photo" style="width:100px;height:120px;" fit="cover" />
        </div>
        <!-- 这里封装成公共组件，传入数据 -->
        <el-form label-width="100px" :model="detailData" class="detail-form">
          <el-row :gutter="20">
            <el-col
              v-for="field in activeTabConfig.fields"
              :key="field.prop"
              :span="field.span || 24"
            >
              <el-form-item :label="field.label">
                {{ detailData[field.prop] || '-' }}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
    <!-- 这里也做成组件，传入数据，增加点击回调 -->
    <div class="detail-tabs" v-if="tabConfigs.length > 1">
      <!-- 点击出现弹窗，弹窗显示对应 显示该人口数据的基础和业务标签（最后层级）
点击标签，弹窗展示该标签对应的详情
当只存在一个标签时候，不显示该标签栏 -->
      <el-button
        v-for="tab in tabConfigs"
        :key="tab.value"
        :type="activeTab === tab.value ? 'primary' : 'info'"
        class="tab-btn"
        @click="activeTab = tab.value"
        block
      >
        {{ tab.label }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import { filterAndMarkGroups } from '@/utils/formatter'
import { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { FormRow } from '@/hooks/web/useFormEditHandlers'

defineOptions({ name: 'ExhibitionDetail' })
const tabConfigs = [
  {
    label: '户籍人口',
    value: 'population',
    fields: [
      { label: '姓名', prop: 'name', span: 12 },
      { label: '曾用名', prop: 'oldName', span: 12 },
      { label: '证件类型', prop: 'idType' },
      { label: '证件号码', prop: 'idNumber' },
      { label: '性别', prop: 'gender' },
      { label: '出生日期', prop: 'birth' },
      { label: '民族', prop: 'nation' },
      { label: '籍贯', prop: 'nativePlace' }
    ]
  },
  {
    label: '信访人员',
    value: 'petition',
    fields: [
      { label: '信访编号', prop: 'petitionId' },
      { label: '信访内容', prop: 'petitionContent' }
    ]
  },
  {
    label: '吸毒人员',
    value: 'drug',
    fields: [
      { label: '吸毒编号', prop: 'drugId' },
      { label: '吸毒史', prop: 'drugHistory' }
    ]
  },
  {
    label: '困境儿童',
    value: 'child',
    fields: [
      { label: '儿童编号', prop: 'childId' },
      { label: '困境类型', prop: 'childType' }
    ]
  }
]
const activeTab = ref('population')

const detailData = ref({
  photo: 'https://element-plus.org/images/element-plus-logo.svg',
  name: '张三',
  oldName: '',
  idType: '公民身份证',
  idNumber: '33************19',
  gender: '男',
  birth: '',
  nation: '',
  nativePlace: '',
  petitionId: 'X123456',
  petitionContent: '内容示例',
  drugId: 'D123456',
  drugHistory: '有',
  childId: 'C123456',
  childType: '孤儿'
})

const activeTabConfig = computed(() =>
  tabConfigs.find(tab => tab.value === activeTab.value) || tabConfigs[0]
)


const formRows = ref<FormRow[]>([])
const formData = ref<any>(null) // 接口返回来的表单配置 null 为需要调创建

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

// 获取对应标签的详情配置接口
const getDetailConfig = async () => {
    // const manageId = (route.meta.manageId as string) || '1942420981721182210'
  const manageId = '1942420981721182210'
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId
  })
  const formConfData = await LabelApi.getViewFormConf({
    manageId,
    formType: 2,
  })
  console.log(formConfData)
  if (formConfData) {
    formData.value = formConfData
    if (formConfData.formJson) {
      const rawData = JSON.parse(formConfData.formJson)
      const allowedIds = res.map((item: LabelFieldConfig) => item.id as string).filter(Boolean)
      const filteredData = filterAndMarkGroups(rawData, allowedIds)
      setLayoutData(filteredData)
    }
  }
}

getDetailConfig()
</script>

<style scoped>
.detail-page {
  display: flex;
  gap: 24px;
}
.detail-main {
  flex: 1;
}
.detail-tabs {
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.tab-btn {
  margin-bottom: 8px;
}
.photo-block {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.detail-form {
  margin-top: 16px;
}
</style>
