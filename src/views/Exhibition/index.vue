<template>
  <ContentWrap>
    <StatisticCards :stats="stats" />
  </ContentWrap>
  <ContentWrap>
    <SearchForm :fields="queryConfig" @search="onSearch" />
  </ContentWrap>

  <!-- 表格区 -->
  <DataTable
    :loading="loading"
    :columns="columns"
    :data="tableData"
    row-key="id"
    :actions="actionList"
  >
    <template #actions="{ row }">
      <TableActions :actions="actionList" :row="row" @action="onAction" />
    </template>
  </DataTable>

  <!-- 分页 -->
  <Pagination
    v-model:limit="queryParams.pageSize"
    v-model:page="queryParams.pageNo"
    :total="total"
    @pagination="getList"
  />
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import * as BusinessDataApi from '@/api/system/business-data'
import StatisticCards from './components/StatisticCards.vue'
import SearchForm from './components/SearchForm.vue'
import DataTable from './components/DataTable.vue'
import TableActions from './components/TableActions.vue'
import { LabelFieldConfig, QueryResItem } from '@/config/constants/enums/fieldDefault'

defineOptions({ name: 'ExhibitionList' })

const route = useRoute()

const columns = ref<Partial<LabelFieldConfig>[]>([])
const queryConfig = ref<QueryResItem[]>([])
const formModel = reactive<{ [key: string]: any }>({})
const loading = ref(true) // 列表的加载中
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10
})
const total = ref(0) // 列表的总页数

const stats = [
  { label: '户籍人口', value: 651 },
  { label: '刑满释放人员', value: 651 },
  { label: '社区矫正人员', value: 1342 },
  { label: '易肇精患人员', value: 651 }
]

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
  console.log('搜索参数', params)
}

function onAction(action: string, row: any) {
  // 这里处理表格操作
  console.log('操作', action, row)
}

const getList = async () => {
  loading.value = true
  try {
    const manageId = (route.meta.manageId as string) || '1935524876651073537'
    const data = await BusinessDataApi.getBusinessDataPage({
      manageId,
      ...queryParams
    })
    console.log(data)
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

async function fetchCountConfig(manageId: string) {
  try {
    return await LabelApi.getCountConfigList({ manageId })
  } catch (e) {
    console.error('统计配置获取失败', e)
    return []
  }
}

const init = async () => {
  const manageId = (route.meta.manageId as string) || '1935524876651073537'

  const res = await fetchFieldConfig(manageId)
  columns.value = res.filter((item: LabelFieldConfig) => item.pcViewFlag === 1)

  const queryConfList = await fetchQueryConf(manageId)
  queryConfList.forEach((field) => {
    const ids = (field.fieldIds || '').split(',').filter(Boolean)
    const matchedFields = res.filter((r) => ids.includes(r.id))
    if (matchedFields.length) {
      field.fieldNames = matchedFields.map((f) => f.name).join(',')
      field.fieldName = matchedFields[0].name
      field.fieldId = matchedFields[0].id
    }
    formModel[field.fieldCodes] = field.defaultValue
  })
  queryConfig.value = queryConfList

  await getList()

  await fetchCountConfig(manageId)
}

onMounted(async () => {
  await init()
})
</script>

<style scoped lang="scss"></style>
