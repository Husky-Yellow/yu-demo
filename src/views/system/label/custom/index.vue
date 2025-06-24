<template>
  <!-- 搜索工作栏 -->
  <ContentWrap>
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入标签编号/名称"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"> <Icon icon="ep:search" class="mr-5px" /> 搜索 </el-button>
        <el-button @click="resetQuery"> <Icon icon="ep:refresh" class="mr-5px" /> 重置 </el-button>
        <el-button type="primary" plain @click="handleUpdateName('create')">
          <Icon icon="ep:plus" class="mr-5px" /> 新增业务标签
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      row-key="id"
      v-if="refreshTable"
      :default-expand-all="isExpandAll"
    >
      <el-table-column prop="num" label="标签编号" width="200" />
      <el-table-column prop="name" label="标签名称" />
      <el-table-column prop="type" label="标签类型" :formatter="formatTagType" />
      <el-table-column v-for="config in configList" :key="config" :label="config" align="center">
        <template #default="scope">
          <ConfigIndicator :flag="scope.row.flag" :configName="config" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300">
        <template #default="scope">
          <el-button link type="primary" @click="openDetail(scope.row.id)"> 配置 </el-button>
          <el-button link type="primary" @click="handleUpdateName('edit', scope.row)">
            编辑
          </el-button>
          <el-button link type="primary" @click="handleUpdateName('addChild', scope.row)">
            添加子标签
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      v-model:limit="queryParams.pageSize"
      v-model:page="queryParams.pageNo"
      :total="total"
      @pagination="getList"
    />
  </ContentWrap>

  <CustomNameForm ref="nameFormRef" @success="getList" />
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { handleTree2 } from '@/utils/tree'
import CustomNameForm from './CustomNameForm.vue'
import * as LabelApi from '@/api/system/label'
import { BooleanEnum, TagTypeOptions } from '@/config/constants/enums/label'
import type { TableColumnCtx } from 'element-plus'

defineOptions({ name: 'SystemLabelCustom' })

const { push } = useRouter() // 路由
const { query } = useRoute() // 查询参数

const loading = ref(true) // 列表的加载中
const list = ref() // 列表的数据
const total = ref() // 列表的数据
const isExpandAll = ref(true) // 是否展开，默认全部展开
const queryParams = reactive({
  pageNo: 1,
  pageSize: 100,
  name: undefined,
  status: undefined,
  labelId: query.id
})
const queryFormRef = ref() // 搜索的表单
const refreshTable = ref(true) // 重新渲染表格状态

// 配置项列表（按需要显示的顺序排列）
const configList = [
  '字段配置',
  '表单配置',
  '详情配置',
  '操作配置',
  '查询配置',
  '数据配置',
  '排序配置',
  '统计配置'
]

/** 查询部门列表 */
const getList = async () => {
  loading.value = true
  try {
    const { list: listData, total: totalCount } = await LabelApi.getLabelManagePage(queryParams)
    // flag 拆分8个字符串，代表8个配置
    list.value = handleTree2(listData)
    total.value = totalCount
  } finally {
    loading.value = false
  }
}

// 类型安全的 formatter 函数
const formatTagType: (
  row: any,
  column: TableColumnCtx<any>,
  cellValue: number, // 假设实际数据类型是 number
  index: number
) => string = (_row, _column, cellValue, _index) => {
  const tagType = cellValue as BooleanEnum
  const option = TagTypeOptions.find((item) => item.value === tagType)
  return option?.label || '未知类型'
}

/** 搜索按钮操作 */
const handleQuery = () => {
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryParams.pageNo = 1
  queryFormRef.value.resetFields()
  handleQuery()
}

const nameFormRef = ref()
const handleUpdateName = (type: string, row?: any) => {
  nameFormRef.value.open(type, row)
}

/** 添加/修改操作 */
const openDetail = (id?: number) => {
  push(`/system/label/customDetail?id=${query.id}&type=${query.type}&labelId=${id}`)
}

/** 初始化 **/
onMounted(async () => {
  await getList()
})
</script>
