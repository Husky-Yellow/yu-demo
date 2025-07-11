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
        <el-button @click="handleQuery">
          <Icon icon="ep:search" class="mr-5px" /> 搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon icon="ep:refresh" class="mr-5px" /> 重置
        </el-button>
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
      :default-expand-all="isExpandAll"
    >
      <el-table-column prop="num" label="标签编号" width="200" />
      <el-table-column prop="name" label="标签名称" width="200" align="center" />
      <el-table-column prop="type" label="标签类型" :formatter="formatTagType" />
      <el-table-column
        v-for="config in configList"
        :key="config"
        :label="config"
        align="center"
      >
        <template #default="{ row }">
          <ConfigIndicator :flag="row.flag" :configName="config" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openDetail(row.id, row.rootId)">
            配置
          </el-button>
          <el-button link type="primary" @click="handleUpdateName('edit', row)">
            编辑
          </el-button>
          <el-button link type="primary" @click="handleUpdateName('addChild', row)">
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
import CustomNameForm from './CustomNameForm.vue'
import { BooleanEnum, TagTypeOptions } from '@/config/constants/enums/label'
import { useLabelManagement, type LabelItem } from './composables/useLabelManagement'
import type { TableColumnCtx } from 'element-plus'

// 常量定义
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

defineOptions({ name: 'SystemLabelCustom' })

// 使用组合式函数
const {
  loading,
  list,
  total,
  isExpandAll,
  queryParams,
  queryFormRef,
  getList,
  handleQuery,
  resetQuery,
  openDetail
} = useLabelManagement()

// 表单操作逻辑
const nameFormRef = ref()

const handleUpdateName = (type: string, row?: LabelItem) => {
  nameFormRef.value?.open(type, row)
}

// 类型安全的 formatter 函数
const formatTagType = (
  _row: LabelItem,
  _column: TableColumnCtx<LabelItem>,
  cellValue: BooleanEnum,
  _index: number
): string => {
  const option = TagTypeOptions.find((item) => item.value === cellValue)
  return option?.label || '未知类型'
}

// 生命周期
onMounted(() => {
  getList()
})
</script>
