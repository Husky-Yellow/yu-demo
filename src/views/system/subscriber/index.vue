<template>
  <el-row :gutter="20" class="h-[calc(100vh-150px)]">
    <!-- 左侧部门树 -->
    <el-col :span="4" :xs="24">
      <ContentWrap class="h-1/1">
        <OrgTree @node-click="handleOrgNodeClick" />
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
            <el-select v-model="searchForm.userStatus" placeholder="全部" style="width: 240px">
              <el-option
                v-for="option in USER_STATUS_OPTIONS"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="岗位状态">
            <el-select v-model="searchForm.postStatus" placeholder="全部" style="width: 240px">
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
              style="width: 240px"
            >
              <el-option
                v-for="option in VIEW_LEVEL_OPTIONS"
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
            <el-button type="warning" @click="handleImport"> 导入 </el-button>
            <el-button type="info" @click="handleEnable"> 启用 </el-button>
            <el-button type="danger" @click="handleDisable"> 禁用 </el-button>
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
import OrgTree from './components/OrgTree.vue'
import SubscriberTable from './components/SubscriberTable.vue'
import SubForm from './components/SubForm.vue'
import { USER_STATUS_OPTIONS, POST_STATUS_OPTIONS, VIEW_LEVEL_OPTIONS } from '@/config/user/index'

const total = ref(0) // 列表的总页数
const searchForm = reactive({
  userAccount: '',
  userName: '',
  userStatus: '',
  postStatus: '',
  viewLevel: '展示组织内成员',
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
    // const res = await fetchUserList(queryParams.value);
    // userTableData.value = res.data.list;
    // total.value = res.data.total;
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
  searchForm.viewLevel = '展示组织内成员'
  searchForm.pageNo = 1
  getUsers()
}

/** 添加/修改操作 */
const formRef = ref()
const handleAdd = () => {
  console.log('新增用户')
  formRef.value.open()
}

const handleEdit = (row: any) => {
  console.log('编辑用户', row)
  // 打开编辑用户弹窗
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
    // await deleteUser(row.id);

    // 刷新列表
    getUsers()
    ElMessage.success('删除成功')
  } catch (error) {
    // 用户取消操作
  }
}

const handleStatusChange = async (row: any) => {
  try {
    // await updateUserStatus(row.id, row.status);
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
  console.log('导出用户列表')
  // 调用导出 API
}

const handleImport = () => {
  console.log('导入用户')
  // 打开导入文件弹窗
}

const handleEnable = () => {
    // 判断有没有选中用户
  if (selectedRows.value.length === 0) {
    ElMessage.warning('请选择要禁用的用户')
    return
  }
  // 获取选中的用户 ID 列表，调用启用 API
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const handleDisable = () => {
  // 判断有没有选中用户
  if (selectedRows.value.length === 0) {
    ElMessage.warning('请选择要禁用的用户')
    return
  }
  console.log('禁用选中用户')
  // 获取选中的用户 ID 列表，调用禁用 API
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
