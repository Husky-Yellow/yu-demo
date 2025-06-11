<template>
  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list">
      <el-table-column align="center" label="序号" prop="id" />
      <el-table-column align="center" label="标签分类" prop="id" />
      <el-table-column align="center" label="该分类下标签数量" prop="name" />
      <el-table-column :width="300" align="center" label="操作">
        <template #default="scope">
          <el-button
            v-hasPermi="['system:role:update']"
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
          >
            标签管理
          </el-button>
          <el-button
            v-hasPermi="['system:permission:assign-role-menu']"
            link
            preIcon="ep:basketball"
            title="菜单权限"
            type="primary"
          >
          编辑
          </el-button>
          <el-button
            v-hasPermi="['system:permission:assign-role-data-scope']"
            link
            preIcon="ep:coin"
            title="数据权限"
            type="primary"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>
  <!-- 表单弹窗：添加/修改 -->
  <DialogForm ref="formRef" @success="getList" />
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabelCopy' })
import * as RoleApi from '@/api/system/role'
import DialogForm from './DialogForm.vue'

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  code: '',
  name: '',
  status: undefined,
  createTime: []
})

/** 查询角色列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await RoleApi.getRolePage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}


/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
