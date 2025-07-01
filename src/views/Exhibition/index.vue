<template>
    <!-- 统计卡片区 -->
    <StatisticCards :stats="stats" />

    <!-- 搜索表单区 -->
    <SearchForm :fields="queryConfig" @search="onSearch" />

    <!-- 表格区 -->
    <DataTable
      :columns="columns"
      :data="tableData"
      row-key="id"
      :actions="actionList"
    >
      <template #actions="{ row }">
        <TableActions :actions="actionList" :row="row" @action="onAction" />
      </template>
    </DataTable>
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

const stats = [
  { label: '户籍人口', value: 651 },
  { label: '刑满释放人员', value: 651 },
  { label: '社区矫正人员', value: 1342 },
  { label: '易肇精患人员', value: 651 },
]

const searchFields = [
  { type: 'input', label: '姓名', prop: 'name', placeholder: '请输入姓名' },
  { type: 'input', label: '身份证号', prop: 'idCard', placeholder: '请输入身份证号' },
  { type: 'select', label: '性别', prop: 'gender', options: [
    { label: '男', value: '男' },
    { label: '女', value: '女' }
  ], placeholder: '请选择性别' },
]



const actionList = [
  { label: '查看详情', action: 'view', type: 'primary' },
  { label: '编辑', action: 'edit', type: 'success' },
  { label: '删除', action: 'delete', type: 'danger' },
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
    updateTime: '2023/1/1 11:00:00',
  },
  {
    id: 2,
    name: '李四',
    idCard: '3303************22',
    gender: '女',
    nation: '汉',
    grid: 'xx镇/xx村/xxx网格',
    address: 'xx县/xx镇/xx村/xx小区/xx幢',
    location: 'xx省/xx市/xx区',
    updateTime: '2023/1/1 11:00:00',
  },
])

function onSearch(params: any) {
  // 这里可以根据params进行过滤或请求
  console.log('搜索参数', params)
}

function onAction(action: string, row: any) {
  // 这里处理表格操作
  console.log('操作', action, row)
}

onMounted(async () => {
  const manageId = route.meta.manageId as string || '1935524876651073537'
  const res = await LabelApi.getFieldConfigList({
    manageId
  })
  columns.value = res.filter((item: LabelFieldConfig) => item.pcViewFlag === 1)
  const queryConfList = await LabelApi.getQueryConfList({
    manageId
  })
  console.log('queryConfList', queryConfList)
  // 补充字段信息
  queryConfList.forEach((field) => {
    // fieldIds 可能是 'id1,id2'
    const ids = (field.fieldIds || '').split(',').filter(Boolean)
    // 查找所有对应字段
    const matchedFields = res.filter(r => ids.includes(r.id))
    // 补充 name、id 等信息（如只取第一个）
    if (matchedFields.length) {
      field.fieldNames = matchedFields.map(f => f.name).join(',') // 可选：多个字段名拼接
      field.fieldName = matchedFields[0].name // 可选：第一个字段名
      field.fieldId = matchedFields[0].id     // 可选：第一个字段id
      // 你还可以补充其它字段
    }
    formModel[field.fieldCodes] = field.defaultValue
  })
  queryConfig.value = queryConfList
  queryConfig.value = queryConfList
  const data = await BusinessDataApi.getBusinessDataPage({
    manageId,
    pageNo: 1,
    pageSize: 10
  })
  console.log(data)

  const countConfigList = await LabelApi.getCountConfigList({ manageId: manageId })
  console.log('countConfigList', countConfigList)
})

</script>

<style scoped lang="scss"></style>
