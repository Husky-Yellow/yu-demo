<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%"
    :row-key="(row) => row.id"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="序号" type="index" width="55" />
    <el-table-column prop="name" label="岗位名称" />
    <el-table-column prop="deptId" label="所属组织">
      <template #default="{ row }">
        <span>{{ deptTree.get(row.deptId) || '--' }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="dataScopeDeptIds" label="数据权限" >
      <template #default="{ row }">
        <span v-for="item in row.dataScopeDeptIds" :key="item">{{ dataScopeList.get(item) || '--' }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态">
      <template #default="{ row }">
        <el-switch
          v-model="row.status"
          :active-value="CommonStatusEnum.ENABLE"
          :inactive-value="CommonStatusEnum.DISABLE"
          @change="handleStatusChange(row)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="userNum" label="岗位人数">
      <template #default="{ row }">
        <el-button
          link
          :disabled="row.userNum === 0"
          type="primary"
          @click="userList(row)"
          >{{ row.userNum }}</el-button
        >
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="{ row }">
        <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
        <el-button link type="primary" @click="openDetail(row)">权限配置</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import * as JobApi from '@/api/system/job'
import { CommonStatusEnum } from '@/utils/constants'
defineOptions({ name: 'SystemSubscriberSubscriberTable' })
defineProps({
  tableData: {
    type: Array as PropType<JobApi.JobDetailData[]>,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
  deptTree: {
    type: Map<number, string>,
    required: true
  },
  dataScopeList: {
    type: Map<number, string>,
    required: true
  }
})

const emits = defineEmits([
  'edit-detail',
  'select-change',
  'status-change',
  'open-detail',
  'user-list'
])

const handleEdit = (row: JobApi.JobDetailData) => emits('edit-detail', row)
const handleStatusChange = (row: JobApi.JobDetailData) => emits('status-change', row)
const openDetail = (row: JobApi.JobDetailData) => emits('open-detail', row)
const userList = (row: JobApi.JobDetailData) => emits('user-list', row)
const handleSelectionChange = (val: JobApi.JobDetailData[]) => emits('select-change', val)
</script>
