<template>
  <div class="detail-page">
    <div class="detail-main">
      <el-card>
        <div class="photo-block">
          <el-image :src="detailData.photo" style="width:100px;height:120px;" fit="cover" />
        </div>
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
    <div class="detail-tabs">
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
import { ref, computed } from 'vue'

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
