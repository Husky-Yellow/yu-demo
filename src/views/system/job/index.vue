<template>
  <el-row :gutter="20" class="h-[calc(100vh-150px)]">
    <!-- 左侧部门树 -->
    <el-col :span="5" :xs="24">
      <ContentWrap class="h-1/1">
        <TreeSelector
          :expand-all="false"
          :load-api="loadRoleData"
           @node-click="handleOrgNodeClick" />
      </ContentWrap>
    </el-col>
    <el-col :span="19" :xs="24" class="h-1/1">
      <ContentWrap>
        <el-form :model="searchForm" inline label-width="80px" class="mt-10px">
          <el-form-item label="岗位姓名">
            <el-input v-model="searchForm.userName" placeholder="请输入岗位姓名" />
          </el-form-item>
          <el-form-item label="查看层级">
            <el-select
              v-model="searchForm.viewLevel"
              placeholder="展示组织内成员"
              class="!w-240px"
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
defineOptions({ name: 'SystemJob' })
import * as DeptApi from '@/api/system/dept'
import { ElMessage, ElMessageBox } from 'element-plus'
import { handleTree } from '@/utils/tree'
import SubscriberTable from './components/SubscriberTable.vue'
import SubForm from './components/SubForm.vue'
import { VIEW_LEVEL_OPTIONS } from '@/config/user/index'

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
