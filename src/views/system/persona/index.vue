<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      ref="queryFormRef"
      :inline="true"
      :model="queryParams"
      class="-mb-15px"
      label-width="68px"
    >
      <el-form-item label="角色名称" prop="name">
        <el-input
          v-model="queryParams.name"
          class="!w-240px"
          clearable
          placeholder="请输入角色名称"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="角色状态" prop="status">
        <el-select v-model="queryParams.status" class="!w-240px" clearable placeholder="请选择角色状态">
          <el-option
            v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery">
          <Icon class="mr-5px" icon="ep:search" />
          搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon class="mr-5px" icon="ep:refresh" />
          重置
        </el-button>
        <el-button plain type="primary" @click="openForm('create')">
          <Icon class="mr-5px" icon="ep:plus" />
          新增
        </el-button>
        <el-button plain :disabled="selectedRows.length === 0" type="success" @click="handleEnable(CommonStatusEnum.ENABLE)">
          <Icon class="mr-5px" icon="ep:download" />
          启用
        </el-button>
        <el-button plain :disabled="selectedRows.length === 0" type="success" @click="handleEnable(CommonStatusEnum.DISABLE)">
          <Icon class="mr-5px" icon="ep:download" />
          禁用
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      :row-key="(row) => row.id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" label="角色编号" prop="id" />
      <el-table-column align="center" label="角色名称" prop="name" />
      <el-table-column align="status" label="角色状态" prop="status">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="CommonStatusEnum.ENABLE"
            :inactive-value="CommonStatusEnum.DISABLE"
            @change="handleStatusChange(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="openForm('update', scope.row.id)">
            编辑
          </el-button>
          <el-button
            link
            preIcon="ep:delete"
            title="删除"
            type="primary"
            @click="handleDelete(scope.row.id)"
          >
            删除
          </el-button>
          <el-button
            link
            preIcon="ep:basketball"
            title="菜单权限"
            type="primary"
            @click="openAssignMenuForm(scope.row)"
          >
            菜单权限
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

  <!-- 表单弹窗：添加/修改 -->
  <PersonaForm ref="formRef" @success="getList" />
  <!-- 表单弹窗：菜单权限 -->
  <PersonaAssignMenuForm ref="assignMenuFormRef" @success="getList" />
</template>
<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { CommonStatusEnum } from '@/utils/constants'
import download from '@/utils/download'
import * as RoleApi from '@/api/system/role'
import PersonaForm from './PersonaForm.vue'
import PersonaAssignMenuForm from './PersonaAssignMenuForm.vue'
import type { FormInstance } from 'element-plus'

defineOptions({ name: 'SystemPersona' })

const message = useMessage() // 消息弹窗

const selectedRows = ref<RoleApi.RoleBase[]>([])
const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref<RoleApi.RoleBase[]>([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  code: '',
  name: '',
  status: undefined,
  createTime: []
})
const queryFormRef = ref<FormInstance>() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询角色列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await RoleApi.getRolePage(queryParams)
    console.log(data)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  (queryFormRef.value as FormInstance).resetFields()
  handleQuery()
}


const handleSelectionChange = (val: RoleApi.RoleBase[]) => {
  selectedRows.value = val
}

/** 添加/修改操作 */
const formRef = ref<InstanceType<typeof PersonaForm>>()
const openForm = (type: string, id?: number) => {
  formRef.value?.open(type, id)
}

/** 菜单权限操作 */
const assignMenuFormRef = ref<InstanceType<typeof PersonaAssignMenuForm>>()
const openAssignMenuForm = async (row: RoleApi.Role) => {
  assignMenuFormRef.value?.open(row)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await RoleApi.deleteRole(id)
    message.success('删除成功')
    // 刷新列表
    await getList()
  } catch {}
}


// 通用状态变更处理
const handleStatusUpdate = async (params: { id?: number; ids?: number[]; status: number }) => {
  await message.confirm('确定要启用/禁用吗？')
  if (params.id) {
    await RoleApi.updateRoleStatus({ id: params.id, status: params.status })
  } else if (params.ids) {
    await RoleApi.batchUpdateRoleStatus({ ids: params.ids, status: params.status })
  }
  message.success('更新成功')
  await getList()
}

// 单个
const handleStatusChange = async (row: any) => {
  await handleStatusUpdate({ id: row.id, status: row.status })
}

// 批量
const handleEnable = async (status: number) => {
  const ids = selectedRows.value.map((row: any) => row.id)
  await handleStatusUpdate({ ids, status })
}


/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
