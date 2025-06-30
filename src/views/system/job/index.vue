<template>
  <el-row :gutter="20" class="h-[calc(100vh-150px)]">
    <el-col :span="4" :xs="24">
      <ContentWrap class="h-1/1">
        <TreeSelector
          :expand-all="false"
          :load-api="loadDeptListData"
          @node-click="handleOrgNodeClick"
        />
      </ContentWrap>
    </el-col>
    <el-col :span="20" :xs="24" class="h-1/1">
      <ContentWrap>
        <el-form :model="searchForm" inline label-width="80px" style="margin-top: 14px">
          <el-form-item label="岗位名称">
            <el-input v-model="searchForm.name" placeholder="请输入岗位名称" />
          </el-form-item>
          <el-form-item label="查看层级">
            <el-select v-model="searchForm.level" placeholder="展示组织内成员" class="!w-240px">
              <el-option :value="CommonStatusEnum.ENABLE" label="展示组织内成员" />
              <el-option :value="CommonStatusEnum.DISABLE" label="展示全部成员" />
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
      <ContentWrap>
        <!-- 用户表格 -->
        <SubscriberTable
          :table-data="jobTableData"
          :loading="loading"
          @status-change="handleStatusChange"
          @select-change="handleSelectChange"
          @edit-detail="handleEdit"
          @open-detail="openDetail"
          @user-list="handleUserList"
          :dept-tree="deptTree"
          :data-scope-list="dataScopeList"
        />
        <!-- 分页 -->
        <Pagination
          :total="total"
          v-model:page="searchForm.pageNo"
          v-model:limit="searchForm.pageSize"
          @pagination="getJobPage"
        />
      </ContentWrap>
    </el-col>
  </el-row>
  <JobAdd ref="formRef" @success="getJobPage" />
  <UserList ref="userListRef" />
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemJob' })
import { ElMessage, ElMessageBox } from 'element-plus'
import SubscriberTable from './components/SubscriberTable.vue'
import JobAdd from './components/JobAdd.vue'
import UserList from './components/UserList.vue'
import * as DeptApi from '@/api/system/dept'
import * as JobApi from '@/api/system/job'
import * as MenuApi from '@/api/system/menu'
import { handleTree } from '@/utils/tree'
import { CommonStatusEnum } from '@/utils/constants'
import { useRouter } from 'vue-router'

const { push } = useRouter() // 路由
const total = ref<number>(0) // 列表的总页数
const loading = ref<boolean>(false)
const deptTree = ref<Map<number, string>>(new Map())
const dataScopeList = ref<Map<number, string>>(new Map())
const jobTableData = ref<JobApi.JobDetailData[]>([])
const selectedRows = ref<JobApi.JobDetailData[]>([])
const searchForm = reactive<JobApi.JobListRequest>({
  name: '',
  deptId: 0, // 部门ID
  level: CommonStatusEnum.ENABLE,
  pageNo: 1,
  pageSize: 10
})

// 获取用户列表
const getJobPage = async () => {
  loading.value = true
  try {
    const res = await JobApi.getJobPage(searchForm)
    jobTableData.value = res.list
    total.value = res.total
  } catch (error) {
    ElMessage.error('获取岗位列表失败')
  } finally {
    loading.value = false
  }
}

/**
 * 获取部门树数据
 */
const getDeptTree = async () => {
  try {
    const [menuList, deptList] = await Promise.all([
      MenuApi.getSimpleMenusList(),
      DeptApi.getAllSimpleDeptList()
    ])
    deptList.forEach((item: any) => {
      const { id, name } = item
      deptTree.value.set(id, name)
    })
    menuList.forEach((item: any) => {
      const { id, name } = item
      dataScopeList.value.set(id, name)
    })
  } catch (error) {
    console.error('获取部门树失败:', error)
  }
}

// 生命周期钩子
onMounted(() => {
  getJobPage()
  getDeptTree()
})

// 事件处理
const handleOrgNodeClick = (node: { id: number }) => {
  searchForm.deptId = node.id
  searchForm.pageNo = 1
  getJobPage()
}

const handleSearch = () => {
  searchForm.pageNo = 1
  getJobPage()
}

const handleReset = () => {
  searchForm.level = CommonStatusEnum.ENABLE
  searchForm.pageNo = 1
  getJobPage()
}

/** 添加/修改操作 */
const formRef = ref()
const handleAdd = () => {
  formRef.value.open('create')
}

const userListRef = ref()
const handleUserList = (row: JobApi.JobDetailData) => {
  userListRef.value.open(row.id)
}

const openDetail = (row: JobApi.JobDetailData) => {
  push({
    name: 'SystemJobDetail',
    query: {
      id: row.id
    }
  })
}

const handleEdit = (row: JobApi.JobDetailData) => {
  formRef.value.open('update', row.id)
}

const handleSelectChange = (rows: JobApi.JobDetailData[]) => {
  selectedRows.value = rows
}

const handleStatusChange = async (row: JobApi.JobDetailData) => {
  try {
    await JobApi.updatePostStatus({
      id: row.id!,
      status: row.status!
    })
    ElMessage.success('状态更新成功')
  } catch (error) {
    // 回滚状态
    row.status =
      row.status === CommonStatusEnum.ENABLE ? CommonStatusEnum.DISABLE : CommonStatusEnum.ENABLE
    ElMessage.error('状态更新失败')
  }
}

const handleEnable = (type: boolean) => {
  const action = type ? '启用' : '停用'
  const status = !type ? CommonStatusEnum.ENABLE : CommonStatusEnum.DISABLE
  // 判断有没有选中用户
  if (selectedRows.value.length === 0) {
    ElMessage.warning(`请选择要${action}的岗位`)
    return
  }
  ElMessageBox.confirm(`确定要${action}选中的用户吗？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const ids = selectedRows.value.map((row: JobApi.JobDetailData) => row.id!)
      await JobApi.updatePostBatchStatus({ ids, status })
      getJobPage()
      ElMessage.success(`${action}成功`)
    })
    .catch(() => {
      ElMessage.info('操作已取消')
    })
}

const loadDeptListData = async () => {
  try {
    const res = await DeptApi.getSimpleDeptList()
    const treeData = handleTree(res)
    return treeData || []
  } catch (error) {
    ElMessage.error('加载角色列表失败')
    return []
  }
}
</script>
