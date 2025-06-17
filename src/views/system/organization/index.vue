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
      <el-form-item label="组织名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入组织名称"
          clearable
          @keyup.enter="handleQuery"
          @clear="resetQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 查询</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button type="danger" plain @click="toggleExpandAll">
          <Icon icon="ep:sort" class="mr-5px" /> 展开/折叠
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
      v-if="refreshTable"
    >
      <el-table-column prop="name" label="组织名称" />
      <el-table-column prop="name" label="组织编码" />
      <el-table-column prop="name" label="组织ID" />
      <el-table-column prop="status" label="是否设为区域">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            @update:model-value="handleStatusChange(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('addChild', scope.row)"
          >
            添加下级
          </el-button>
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <DeptForm ref="formRef" @success="getList" />
</template>
<script lang="ts" setup>
import { handleTree } from '@/utils/tree'
import { debounce } from "lodash-es";
import * as DeptApi from '@/api/system/dept'
import DeptForm from './DeptForm.vue'

defineOptions({ name: 'SystemorGanization' })

const message = useMessage() // 消息弹窗

const loading = ref(true) // 列表的加载中
const list = ref() // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 100,
  name: undefined,
  status: undefined
})
const queryFormRef = ref() // 搜索的表单
const isExpandAll = ref(true) // 是否展开，默认全部展开
const refreshTable = ref(true) // 重新渲染表格状态

const originalStatus = ref({}) // 添加状态记录对象，用于跟踪每行的原始状态

/** 查询部门列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await DeptApi.getDeptPage(queryParams)
    list.value = handleTree(data)

    // 初始化状态记录，避免初始化时触发不必要的更新
    originalStatus.value = {}
    const initStatus = (items) => {
      items.forEach(item => {
        originalStatus.value[item.id] = item.status
        if (item.children && item.children.length > 0) {
          initStatus(item.children)
        }
      })
    }
    initStatus(list.value)
  } finally {
    loading.value = false
  }
}

/** 展开/折叠操作 */
const toggleExpandAll = () => {
  refreshTable.value = false
  isExpandAll.value = !isExpandAll.value
  nextTick(() => {
    refreshTable.value = true
  })
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
const openForm = (type: string, row?: any) => {
  formRef.value.open(type, row)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await DeptApi.deleteDept(id)
    message.success('删除成功')
    // 刷新列表
    await getList()
  } catch {}
}


// 优化后的状态变更处理函数
const handleStatusChange = debounce(async (row: any) => {
  // 检查状态是否真的改变了
  if (originalStatus.value[row.id] === row.status) {
    console.log('状态未变化，跳过更新')
    return
  }

  console.log('状态变化', { id: row.id, from: originalStatus.value[row.id], to: row.status })

  try {
    // 发起 API 请求
    await DeptApi.updateDept(row)
    message.success('状态更新成功')
    // 更新成功后，更新原始状态记录
    originalStatus.value[row.id] = row.status
  } catch (error) {
    message.error('状态修改失败')
    // 更新失败时，恢复原始状态
    row.status = originalStatus.value[row.id]
  }
}, 300) // 300ms 防抖

/** 初始化 **/
onMounted(() => getList());
</script>
