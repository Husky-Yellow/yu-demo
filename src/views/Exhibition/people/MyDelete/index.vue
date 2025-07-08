<template>
  <div>
    <!-- 查询表单 -->
    <el-form :inline="true" :model="query" class="mb-2">
      <el-form-item>
        <el-input v-model="query.keyword" placeholder="请输入姓名/证件号码" clearable />
      </el-form-item>
      <el-form-item>
        <el-select v-model="query.peopleType" placeholder="人口类型" clearable style="width: 120px">
          <el-option label="户籍人口" value="户籍人口" />
          <el-option label="流动人口" value="流动人口" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="idType" label="证件类型" />
      <el-table-column prop="idNumber" label="证件号码" />
      <el-table-column prop="org" label="组织" />
      <el-table-column prop="peopleType" label="人口类型" />
      <el-table-column prop="deleteTime" label="数据删除时间" />
      <el-table-column prop="deleteUser" label="数据删除人" />
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-link type="primary" @click="viewDetail(scope.row)">查看详情</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({ name: 'ExhibitionPeopleMyDelete' })
interface TableRow {
  name: string
  idType: string
  idNumber: string
  org: string
  peopleType: string
  deleteTime: string
  deleteUser: string
}

// 假设当前登录用户
const currentUser = '张三'

const query = ref({
  keyword: '',
  peopleType: ''
})

const allData = [
  {
    name: '张三',
    idType: '居民身份证',
    idNumber: '3303**********11',
    org: 'xx街xx乡xx网格',
    peopleType: '户籍人口',
    deleteTime: '2023/1/1 11:00:00',
    deleteUser: '张三'
  },
  {
    name: '张三',
    idType: '护照',
    idNumber: '3303**********11',
    org: 'xx街xx乡xx网格',
    peopleType: '流动人口',
    deleteTime: '2023/1/1 11:00:00',
    deleteUser: '李四'
  }
]

const tableData = ref<TableRow[]>([])

function fetchData() {
  // 只显示当前用户删除的数据
  tableData.value = allData.filter(item => {
    const matchUser = item.deleteUser === currentUser
    const matchKeyword =
      !query.value.keyword ||
      item.name.includes(query.value.keyword) ||
      item.idNumber.includes(query.value.keyword)
    const matchType = !query.value.peopleType || item.peopleType === query.value.peopleType
    return matchUser && matchKeyword && matchType
  })
}

// 初始化时加载
fetchData()

function resetQuery() {
  query.value.keyword = ''
  query.value.peopleType = ''
  fetchData()
}

function viewDetail(row: TableRow) {
  // 实现查看详情逻辑，比如弹窗或跳转
  alert(`查看详情：${row.name}`)
}
</script>

<style scoped>
.mb-2 {
  margin-bottom: 16px;
}
</style>