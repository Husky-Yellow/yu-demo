<template>
  <el-row :gutter="20" class="h-[calc(100vh-150px)]">
    <!-- 左侧部门树 -->
    <el-col :span="4" :xs="24">
      <ContentWrap class="h-1/1">
        <TreeSelector
          :expand-all="false"
          :load-api="loadDeptTreeData"
          @loaded="loadedTreeData"
          @node-click="handleOrgNodeClick"
        />
      </ContentWrap>
    </el-col>
    <el-col :span="20" :xs="24" class="h-1/1">
      <ContentWrap>
        <el-form :model="searchForm" inline label-width="80px" class="mt-10px">
          <el-form-item label="岗位姓名">
            <el-input v-model="searchForm.name" placeholder="请输入岗位姓名" />
          </el-form-item>
          <el-form-item label="查看层级">
            <el-select v-model="searchForm.status" placeholder="展示组织内成员" class="!w-240px">
              <el-option
                v-for="option in getIntDictOptions(DICT_TYPE.SYSTEM_MEMBER_DISPLAY_SCOPE)"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button @click="handleReset">重置</el-button>
            <el-button type="primary" @click="handleAdd"> 新增 </el-button>
            <el-button type="info" @click="handleEnable(true)"> 启用 </el-button>
            <el-button type="danger" @click="handleEnable(false)"> 禁用 </el-button>
          </el-form-item>
        </el-form>
      </ContentWrap>
      <ContentWrap v-if="!loading">
        <!-- 用户表格 -->
        <el-table
          :data="jobTableData"
          style="width: 100%"
          :row-key="(row) => row.id"
          @selection-change="handleSelectChange"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="序号" type="index" width="55" />
          <el-table-column prop="name" label="岗位名称" />
          <el-table-column prop="deptId" label="所属组织">
            <template #default="scope">
              {{ getDeptNameById(scope.row.deptId) }}
            </template>
          </el-table-column>
          <el-table-column prop="orgName" label="数据权限" />
          <el-table-column prop="status" label="账号状态">
            <template #default="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="1"
                :inactive-value="0"
                @change="handleStatusChange(scope.row)"
              />
            </template>
          </el-table-column>
          <el-table-column prop="userNum" label="岗位人数" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="text" @click="handleRoleDelete(scope.row)" danger
                >权限配置</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <Pagination
          :total="total"
          v-model:page="searchForm.pageNo"
          v-model:limit="searchForm.pageSize"
          @pagination="fetchJobList"
        />
      </ContentWrap>
    </el-col>
  </el-row>
  <!-- 添加或修改用户对话框 -->
  <SubForm ref="formRef" @success="fetchJobList" :load-api="loadDeptTreeData" />
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemJob' })

import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'
import { ElMessage, ElMessageBox } from 'element-plus'
import { handleTree } from '@/utils/tree'
import SubForm from './components/SubForm.vue'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { CommonStatusEnum } from '@/utils/constants'
import { findPositionById } from '@/utils/organizationTree'

// 状态定义
const total = ref(0) // 列表总记录数

// 搜索表单
const searchForm = reactive({
  name: '', // 岗位名称
  deptId: undefined, // 部门ID
  level: 1, // 岗位层级
  status: CommonStatusEnum.DISABLE, // 岗位状态
  pageNo: 1, // 当前页码
  pageSize: 10 // 每页记录数
})

// 表格数据
const jobTableData = ref<JobApi.JobDetailData[]>([])
const selectedRows = ref<JobApi.JobDetailData[]>([])
const treeData = shallowRef<DeptApi.DeptFormData[]>([])
const loading = ref(false)

/**
 * 获取部门名称
 * @param deptId 部门ID
 * @returns 部门名称，未找到时返回"无"
 */
const getDeptNameById = (deptId: number): string => {
  return findPositionById(treeData.value, deptId)?.name || '无'
}

/**
 * 获取岗位列表
 */
const fetchJobList = async () => {
  loading.value = true
  try {
    const res = await JobApi.getPostPage(searchForm)
    jobTableData.value = res.list
    total.value = res.total
  } catch (error) {
    ElMessage.error('获取岗位列表失败')
  } finally {
    loading.value = false
  }
}

/**
 * 事件处理函数
 */
const handleOrgNodeClick = (node: DeptApi.DeptFormData) => {
  searchForm.deptId = node.id
  searchForm.pageNo = 1
  fetchJobList()
}

const loadedTreeData = (val: DeptApi.DeptFormData[]) => {
  treeData.value = val
}

const checkDeptId = () => {
  if (!searchForm.deptId) {
    ElMessage.warning('请选择部门')
    return false
  }
  return true
}

const handleSearch = () => {
  if (!checkDeptId()) {
    return
  }
  searchForm.pageNo = 1
  fetchJobList()
}

const handleReset = () => {
  if (!checkDeptId()) {
    return
  }
  searchForm.name = ''
  searchForm.status = CommonStatusEnum.ENABLE
  searchForm.pageNo = 1
  fetchJobList()
}

/**
 * 加载部门树形数据
 */
const loadDeptTreeData = async () => {
  try {
    const res = await DeptApi.getSimpleDeptList()
    return handleTree(res) || []
  } catch (error) {
    ElMessage.error('加载部门列表失败')
    return []
  }
}

/**
 * 表单操作
 */
const formRef = ref<InstanceType<typeof SubForm>>()

const handleAdd = () => {
  if (!checkDeptId()) {
    return
  }
  formRef.value?.open('create')
}

const handleEdit = (row: JobApi.JobDetailData) => {
  formRef.value?.open('update', row.id)
}

/**
 * 禁用岗位
 */
const handleDelete = async (row: JobApi.JobDetailData) => {
  try {
    await ElMessageBox.confirm('确定要禁用该岗位吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })

    await JobApi.updatePostStatus({ id: row.id, status: CommonStatusEnum.DISABLE })
    fetchJobList()
    ElMessage.success('禁用成功')
  } catch (error) {
    // 用户取消操作
  }
}

/**
 * 修改岗位状态
 */
const handleStatusChange = async (row: JobApi.JobDetailData) => {
  try {
    const action = row.status === CommonStatusEnum.ENABLE ? '启用' : '停用'
    await ElMessageBox.confirm(`确认要"${action}""${row.name}"岗位吗?`)

    await JobApi.updatePost(row)
    await fetchJobList()
    ElMessage.success('状态更新成功')
  } catch {
    // 取消后恢复原状态
    row.status =
      row.status === CommonStatusEnum.ENABLE ? CommonStatusEnum.DISABLE : CommonStatusEnum.ENABLE
  }
}

/**
 * 表格选择变化处理
 */
const handleSelectChange = (rows: JobApi.JobDetailData[]) => {
  selectedRows.value = rows
}

/**
 * 批量启用岗位
 */
const handleEnable = async (type) => {
  const text = type ? '启用' : '停用'
  const status = !type ? CommonStatusEnum.ENABLE : CommonStatusEnum.DISABLE
  if (selectedRows.value.length === 0) {
    ElMessage.warning(`请选择要${text}的岗位`)
    return
  }

  ElMessageBox.confirm(`确定要${action}选中的用户吗？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const ids = selectedRows.value.map((row) => row.id)
      await JobApi.updatePostStatus({ ids, status })
      fetchJobList()
      ElMessage.success(`${action}成功`)
    })
    .catch(() => {
      ElMessage.info('操作已取消')
    })
}

const handleRoleDelete = (row) => {
  // 跳转到权限编辑页面
  ElMessage.info('跳转权限页面')
}
</script>
