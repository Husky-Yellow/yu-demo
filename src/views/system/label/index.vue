<template>
  <ContentWrap>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="name" label="标签分组" />
      <el-table-column label="该分类下标签数量" align="center">
        <template #default="scope">
          {{ scope.row.count || 0 }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button link type="primary" @click="openDetail(scope.row)"> 标签管理 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabel' })
import router from '@/router'
import * as LabelApi from '@/api/system/label'

const loading = ref(true) // 列表的加载中
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10
})

/** 查询标签列表 */
const getList = async () => {
  // todo 写死的几个标签没有返回来
  loading.value = true
  try {
    const data = await LabelApi.getDataLabelConfList(queryParams)
    list.value = data
  } finally {
    loading.value = false
  }
}

const openDetail = (row) => {
  const { type, id } = row
  router.push({ path: '/system/label/custom', query: { type, id } })
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
