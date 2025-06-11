<template>
  <!-- 列表 -->
  <ContentWrap>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180"/>
      <el-table-column
        prop="name"
        label="标签分组"
        width="180"/>
      <el-table-column
        prop="name"
        label="该分类下标签数量"
        width="180"/>
        <el-table-column label="操作" align="center" :width="300">
        <template #default="scope">
          <el-button link type="primary" @click="openDetail(scope.row)">
            标签管理
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabel' })
import * as LabelApi from '@/api/system/label'

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
})

/** 查询标签列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await LabelApi.getDataLabelManagePage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

const openDetail = (row) => {
  console.log(row)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
