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
        <el-form :model="searchForm" inline label-width="80px" class="mt-10px">
          <el-form-item label="岗位姓名">
            <el-input v-model="searchForm.name" placeholder="请输入岗位姓名" />
          </el-form-item>
          <el-form-item label="查看层级">
            <el-select
              v-model="searchForm.status"
              placeholder="展示组织内成员"
              class="!w-240px"
            >
              <el-option
                v-for="option in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
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
      <ContentWrap v-if="!loading">
        <!-- 用户表格 -->
        <el-table
          :data="jobTableData"
          style="width: 100%"
          :row-key="row => row.id"
          @selection-change="handleSelectChange"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="序号" type="index" width="55" />
          <el-table-column prop="name" label="岗位名称" />
          <el-table-column prop="orgName" label="所属组织" />
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
          <el-table-column prop="postName" label="岗位人数" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="text" @click="handleDelete(scope.row)" danger>权限配置</el-button>
            </template>
          </el-table-column>
        </el-table>
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
import * as JobApi from '@/api/system/job'
import { ElMessage, ElMessageBox } from 'element-plus'
import { handleTree } from '@/utils/tree'
import SubscriberTable from './components/SubscriberTable.vue'
import SubForm from './components/SubForm.vue'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { CommonStatusEnum } from '@/utils/constants'


const total = ref(0) // 列表的总页数
const searchForm = reactive({
  name: '',
  status: CommonStatusEnum.ENABLE,
  pageNo: 1,
  pageSize: 10
})

const jobTableData = ref([])
const selectedRows = ref([])
const loading = ref(false)
const selectedOrgId = ref('') // 当前选中的组织 ID

// 获取用户列表
const getUsers = async () => {
  loading.value = true
  try {
    const res = await JobApi.getPostPage(searchForm);
    jobTableData.value = res.list;
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
  searchForm.name = '',
  searchForm.status = CommonStatusEnum.ENABLE,
  searchForm.pageNo = 1
  getUsers()
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


/** 添加/修改操作 */
const formRef = ref()
const handleAdd = () => {
  formRef.value.open('create')
}

const handleEdit = (row: any) => {
  formRef.value.open('update',row?.id)
}

const handleDelete = async (row: any) => {
  try {
    // 确认删除
    await ElMessageBox.confirm('确定要禁用岗位吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })

    // 调用删除 API
    await JobApi.updatePostStatus({id: row.id, status: CommonStatusEnum.DISABLE});

    // 刷新列表
    getUsers()
    ElMessage.success('禁用成功')
  } catch (error) {
    // 用户取消操作
  }
}

/** 修改用户状态 */
const handleStatusChange = async (row: any) => {
  try {
    // 修改状态的二次确认
    const text = row.status === CommonStatusEnum.ENABLE ? '启用' : '停用'
    await ElMessageBox.confirm('确认要"' + text + '""' + row.name + '"用户吗?')
    // 发起修改状态
    await JobApi.updatePost(row)
    // 刷新列表
    await getUsers()
    ElMessage.success('状态更新成功')
  } catch {
    // 取消后，进行恢复按钮
    row.status =
      row.status === CommonStatusEnum.ENABLE ? CommonStatusEnum.DISABLE : CommonStatusEnum.ENABLE
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
    '是否要禁用选择的用户',
    '',
    {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
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
