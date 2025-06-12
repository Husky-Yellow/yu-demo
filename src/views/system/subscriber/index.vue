<template>
  <el-row :gutter="20" class="h-[calc(100vh-150px)]">
    <!-- 左侧部门树 -->
    <el-col :span="4" :xs="24">
      <ContentWrap class="h-1/1">
        <TreeSelector
          :expand-all="false"
          :load-api="loadRoleData"
           @node-click="handleOrgNodeClick" />
      </ContentWrap>
    </el-col>
    <el-col :span="20" :xs="24" class="h-1/1">
      <ContentWrap>
        <el-form :model="searchForm" inline label-width="80px" style="margin-bottom: 10px">
          <el-form-item label="用户账号">
            <el-input v-model="searchForm.userAccount" placeholder="请输入用户账号" />
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input v-model="searchForm.userName" placeholder="请输入用户姓名" />
          </el-form-item>
          <el-form-item label="用户状态">
            <el-select v-model="searchForm.userStatus" placeholder="全部" class="!w-240px">
              <el-option
                v-for="option in USER_STATUS_OPTIONS"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="岗位状态">
            <el-select v-model="searchForm.postStatus" placeholder="全部" class="!w-240px">
              <el-option
                v-for="option in POST_STATUS_OPTIONS"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="查看层级">
            <el-select
              v-model="searchForm.viewLevel"
              placeholder="展示组织内成员"
              class="!w-240px"
            >
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
            <el-button type="success" @click="handleExport"> 导出 </el-button>
            <el-button type="warning" @click="handleImport" disabled> 导入 </el-button>
            <el-button type="info" @click="handleEnable(true)"> 启用 </el-button>
            <el-button type="danger" @click="handleEnable(false)"> 禁用 </el-button>
          </el-form-item>
        </el-form>
      </ContentWrap>
      <ContentWrap>
        <!-- 用户表格 -->
        <SubscriberTable
          :table-data="userTableData"
          @edit="handleEdit"
          @delete="handleDelete"
          @status-change="handleStatusChange"
          @select-change="handleSelectChange"
        />
        <!-- 分页 -->
        <Pagination
          :total="total"
          v-model:page="searchForm.pageNo"
          v-model:limit="searchForm.pageSize"
          @pagination="getUsers"
        />
      </ContentWrap>
    </el-col>
  </el-row>
  <!-- 添加或修改用户对话框 -->
  <SubForm ref="formRef" @success="getUsers" />
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemSubscriber' })
import { ElMessage, ElMessageBox } from 'element-plus'
import * as DeptApi from '@/api/system/dept'
import * as UserApi from '@/api/system/user'
import { handleTree } from '@/utils/tree'
import SubscriberTable from './components/SubscriberTable.vue'
import SubForm from './components/SubForm.vue'
import { USER_STATUS_OPTIONS, POST_STATUS_OPTIONS, VIEW_LEVEL_OPTIONS } from '@/config/user/index'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { CommonStatusEnum } from '@/utils/constants'

const total = ref(0) // 列表的总页数
const searchForm = reactive({
  userAccount: '',
  userName: '',
  userStatus: '',
  postStatus: '',
  viewLevel: CommonStatusEnum.ENABLE,
  pageNo: 1,
  pageSize: 10
})

const userTableData = ref([])
const selectedRows = ref([])
const loading = ref(false)
const selectedOrgId = ref('') // 当前选中的组织 ID

// 获取用户列表
const getUsers = async () => {
  loading.value = true
  try {
    const res = await UserApi.getUserPage(searchForm)
    userTableData.value = res.list;
    total.value = res.total;
  } catch (error) {
    ElMessage.error('获取用户列表失败')
  } finally {
    loading.value = false
  }
}

// 生命周期钩子
onMounted(() => {
  getUsers()
})

// 事件处理
const handleOrgNodeClick = (node: any) => {
  selectedOrgId.value = node.id
  searchForm.pageNo = 1
  getUsers()
}

const handleSearch = () => {
  searchForm.pageNo = 1
  getUsers()
}

const handleReset = () => {
  searchForm.userAccount = ''
  searchForm.userName = ''
  searchForm.userStatus = ''
  searchForm.postStatus = ''
  searchForm.viewLevel = CommonStatusEnum.ENABLE
  searchForm.pageNo = 1
  getUsers()
}

/** 添加/修改操作 */
const formRef = ref()
const handleAdd = () => {
  formRef.value.open('create')
}

const handleEdit = (row: any) => {
  formRef.value.open('update', row.id)
}

const handleDelete = async (row: any) => {
  try {
    // 确认删除
    await ElMessageBox.confirm('确定要删除该用户吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })

    // 调用删除 API
    await UserApi.deleteUser(row.id);

    // 刷新列表
    getUsers()
    ElMessage.success('删除成功')
  } catch (error) {
    // 用户取消操作
  }
}

const handleStatusChange = async (row: any) => {
  try {
    await UserApi.updateUserStatus(row.id, row.status);
    ElMessage.success('状态更新成功')
  } catch (error) {
    // 回滚状态
    row.status = row.status === '启用' ? '禁用' : '启用'
    ElMessage.error('状态更新失败')
  }
}

const handleSelectChange = (rows: any) => {
  selectedRows.value = rows
}

const handleExport = () => {
}

const handleImport = () => {
  UserApi.exportUser(searchForm)
}



const handleEnable = (type) => {
  const action = type ? '启用' : '停用'
  const status = !type ? CommonStatusEnum.ENABLE : CommonStatusEnum.DISABLE
  // 判断有没有选中用户
  if (selectedRows.value.length === 0) {
    ElMessage.warning(`请选择要${action}的用户`)
    return
  }
  ElMessageBox.confirm(
    `确定要${action}选中的用户吗？`,
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      const ids = selectedRows.value.map(row => row.id)
      await UserApi.updateUserBatchStatus({ ids, status })
      getUsers()
      ElMessage.success(`${action}成功`)
    })
    .catch(() => {
      ElMessage.info('操作已取消')
    })
}


const loadRoleData = async () => {
  try {
    const res = await DeptApi.getSimpleDeptList()
    const treeData = handleTree(res);
    return treeData || [];
  } catch (error) {
    ElMessage.error('加载角色列表失败');
    return [];
  }
};


</script>
