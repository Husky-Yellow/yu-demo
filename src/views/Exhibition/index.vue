<template>
    <!-- 统计卡片区 -->
    <StatisticCards :stats="stats" />

    <!-- 搜索表单区 -->
    <SearchForm :fields="searchFields" @search="onSearch" />

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
import StatisticCards from './components/StatisticCards.vue'
import SearchForm from './components/SearchForm.vue'
import DataTable from './components/DataTable.vue'
import TableActions from './components/TableActions.vue'

defineOptions({ name: 'ExhibitionList' })

const route = useRoute()
const routeMeta = route.meta
console.log(routeMeta)

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

const columns = [
  { label: '序号', prop: 'id', width: 60 },
  { label: '姓名', prop: 'name' },
  { label: '公民身份证号码', prop: 'idCard' },
  { label: '性别', prop: 'gender' },
  { label: '民族', prop: 'nation' },
  { label: '所属网格', prop: 'grid' },
  { label: '标准地址', prop: 'address' },
  { label: '户籍所在地', prop: 'location' },
  { label: '信息变更时间', prop: 'updateTime' },
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
</script>

<style scoped lang="scss"></style>
