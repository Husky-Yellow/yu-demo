<template>
  <!-- 搜索工作栏 -->
  <ContentWrap>
    <el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
      <el-form-item label="" prop="name">
        <el-input
          v-model="queryParams.name" placeholder="请输入标签编号/名称" clearable @keyup.enter="handleQuery"
          class="!w-240px" />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery">
          <Icon icon="ep:search" class="mr-5px" /> 搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon icon="ep:refresh" class="mr-5px" /> 重置
        </el-button>
        <el-button type="primary" plain @click="openForm('create')" v-hasPermi="['system:dept:create']">
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" row-key="id" v-if="refreshTable">
      <el-table-column prop="name" label="标签编号" />
      <el-table-column prop="name" label="标签名称" />
      <el-table-column prop="name" label="标签类型" />
      <el-table-column prop="name" label="字段配置" />
      <el-table-column prop="name" label="表单配置" />
      <el-table-column prop="name" label="详情配置" />
      <el-table-column prop="name" label="操作配置" />
      <el-table-column prop="name" label="查询配置" />
      <el-table-column prop="name" label="数据配置" />
      <el-table-column prop="name" label="排序配置" />
      <el-table-column prop="name" label="统计配置" />
      <el-table-column label="操作" align="center" :width="300">
        <template #default="scope">
          <el-button link type="primary" @click="openDetail()">
            配置
          </el-button>
          <el-button link type="danger" @click="handleDelete(scope.row.id)">
            编辑
          </el-button>
          <el-button link type="danger" @click="openForm('update', scope.row.id)">
            添加子标签
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <CustomForm ref="formRef" @success="getList" />
  <CustomAddChildForm ref="formRef" @success="getList" />
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import CustomForm from './CustomForm.vue'
import CustomAddChildForm from './CustomAddChild.vue'
import * as UserApi from '@/api/system/user'

defineOptions({ name: 'SystemLabelCustom' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化
const router = useRouter()

const loading = ref(true) // 列表的加载中
const list = ref() // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 100,
  name: undefined,
  status: undefined
})
const queryFormRef = ref() // 搜索的表单
const refreshTable = ref(true) // 重新渲染表格状态
const userList = ref<UserApi.UserVO[]>([]) // 用户列表

/** 查询部门列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await DeptApi.getDeptPage(queryParams)
    list.value = handleTree(data)
  } finally {
    loading.value = false
  }
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

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 添加/修改操作 */
const openDetail = () => {
  console.log('跳转');
  router.push(`/system/label/custom/detail`)
  // router.push(`/system/label/custom/detail?id=${id}`);
  // router.push(`/system/label/custom/detail?id=${id}`);
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await DeptApi.deleteDept(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch { }
}

/** 初始化 **/
onMounted(async () => {
  await getList()
  // 获取用户列表
  userList.value = await UserApi.getSimpleUserList()
})
</script>
