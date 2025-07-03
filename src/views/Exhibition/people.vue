<template>
  <!-- 人口标签列表 07-03 新增，未与 index 同步 -->
  <ContentWrap>
    <!-- 统计卡片 -->
    <StatisticCards :config="countConfigDate" />
  </ContentWrap>
  <ContentWrap>
    <!-- 查询 -->
    <SearchForm :fields="queryConfig" @search="onSearch" />
  </ContentWrap>
  <ContentWrap>
    <!-- 表格区 -->
    <DataTable
      :loading="loading"
      :columns="columns"
      :data="tableData"
      row-key="id"
      :actions="actionList"
    >
      <template #actions="{ row }">
        <TableActions :actions="operateConfigList" :row="row" @action="onAction" />
      </template>
    </DataTable>

    <!-- 分页 -->
    <Pagination
      v-model:limit="queryParams.pageSize"
      v-model:page="queryParams.pageNo"
      :total="total"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import * as BusinessDataApi from '@/api/system/business-data'
import StatisticCards from './components/StatisticCards.vue'
import SearchForm from './components/SearchForm.vue'
import DataTable from './components/DataTable.vue'
import TableActions from './components/TableActions.vue'
import { LabelFieldConfig, QueryResItem } from '@/config/constants/enums/fieldDefault'
import { OperateTypeEnum } from '@/utils/constants'

defineOptions({ name: 'ExhibitionList' })

const route = useRoute()

const columns = ref<Partial<LabelFieldConfig>[]>([])
const queryConfig = ref<QueryResItem[]>([])
const formModel = reactive<{ [key: string]: any }>({})
const operateConfigList = ref<any[]>([]) // 表格操作列表
const loading = ref(true) // 列表的加载中
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10
})
const total = ref(0) // 列表的总页数

const countConfigDate = ref<any[]>([])

const actionList = [
  { label: '查看详情', action: 'view', type: 'primary' },
  { label: '编辑', action: 'edit', type: 'success' },
  { label: '删除', action: 'delete', type: 'danger' }
]

const tableData = ref([
  {
    id: 1,
    name: '张三',
    idCard: '3303************11',
    gender: '男',
    nation: '汉',
    grid: 'xx镇/xx村/xxx网格',
    address: 'xx县/xx镇/xx村/xx小区/xx幢',
    location: 'xx省/xx市/xx区',
    updateTime: '2023/1/1 11:00:00'
  }
])

function onSearch(params: any) {
  // 这里可以根据params进行过滤或请求
  console.log('搜索参数', params, queryConfig.value)
  console.log('搜索参数', queryConfig.value)
}

function onAction(action: string, row: any) {
  // 这里处理表格操作
  console.log('操作', action, row)
}

const getList = async (manageId: string) => {
  loading.value = true
  try {
    const data = await BusinessDataApi.getBusinessDataPage({
      manageId,
      ...queryParams
    })
    console.log('getBusinessDataPage', data)
  } finally {
    loading.value = false
  }
}

async function fetchFieldConfig(manageId: string) {
  try {
    return await LabelApi.getFieldConfigList({ manageId })
  } catch (e) {
    console.error('字段配置获取失败', e)
    return []
  }
}

async function fetchQueryConf(manageId: string) {
  try {
    return await LabelApi.getQueryConfList({ manageId })
  } catch (e) {
    console.error('查询配置获取失败', e)
    return []
  }
}

const getCountConfigList = async (manageId) => {
  const countConfigList = await LabelApi.getCountConfigList({ manageId })

  console.log('获取统计配置列表', countConfigList)
  const countData = [{ name: '牡蛎', value: 651 }]

  // 将 countData 转换为 Map，提升查找性能 O(1) vs O(n)
  const countDataMap = new Map(countData.map((item) => [item.name, item.value]))

  // 使用 Map 查找，避免重复遍历
  countConfigDate.value = countConfigList.map((item) => ({
    ...item,
    name: item.name || '',
    value: countDataMap.get(item.name) ?? 0
  }))
}

const getDataFieldConfListByManageId = async (manageId: string) => {
  const res = await LabelApi.getOperateConfigList({ manageId })
  operateConfigList.value = res.map((item) => ({
    ...item,
    type: OperateTypeEnum[item.operateType]
  }))
}

const getQueryConfList = async (manageId: string) => {
  const res = await LabelApi.getQueryConfList({ manageId })
  console.log('获取查询配置列表', res)
}

const init = async () => {
  // const manageId = (route.meta.manageId as string) || '1938148839818596353'
  const manageId = '1938148839818596353'
  // 获取字段配置
  const res = await fetchFieldConfig(manageId)
  columns.value = res.filter((item: LabelFieldConfig) => item.pcViewFlag === 1)

  // const queryConfList = await fetchQueryConf(manageId)
  // // 过滤下是否展示，
  // queryConfList.forEach((field) => {
  //   const ids = (field.fieldIds || '').split(',').filter(Boolean)
  //   const matchedFields = res.filter((r) => ids.includes(r.id))
  //   if (matchedFields.length) {
  //     field.fieldNames = matchedFields.map((f) => f.name).join(',')
  //     field.fieldName = matchedFields[0].name
  //     field.fieldId = matchedFields[0].id
  //   }
  //   formModel[field.fieldCodes] = field.defaultValue
  // })
  // queryConfig.value = queryConfList

  // 获取配置数据
  await getCountConfigList(manageId)
  await getDataFieldConfListByManageId(manageId)
  await getQueryConfList(manageId)
  await getList(manageId)


}

onMounted(async () => {
  await init()
})
</script>

<style scoped lang="scss"></style>
