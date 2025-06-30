<template>
  <Dialog v-model="dialogVisible" title="查看人员" width="600">
    <el-input v-model="input" placeholder="请输入用户名">
      <template #append>
        <el-button :icon="Search" @click="handleSearch" />
      </template>
    </el-input>
    <el-table :data="tableData" style="width: 100%" height="400">
      <el-table-column prop="nickname" label="用户名" />
    </el-table>
    <template #footer>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import * as UserApi from '@/api/system/user'

defineOptions({ name: 'SystemUserList' })

const message = useMessage() // 消息弹窗

const input = ref('')

const dialogVisible = ref(false) // 弹窗是否展示
const formLoading = ref(false) // 表单加载状态
const tableData = ref<any[]>([]) // 表格数据

const handleSearch = () => {
  tableData.value = tableData.value.filter((item) => item.nickname.includes(input.value))
}

/**
 * 打开弹窗
 * @param type 表单类型：create - 新增；update - 修改
 * @param id 岗位ID（修改时必传）
 */
const open = async (id: number) => {
  dialogVisible.value = true
  formLoading.value = true
  tableData.value = []
    try {
      const data = await UserApi.getUserListByPostId(id)
      tableData.value = data || []
    } catch (error) {
      message.error('获取岗位信息失败')
      console.error('获取岗位信息失败:', error)
    } finally {
      formLoading.value = false
    }
}

// 暴露方法
defineExpose({ open })
</script>
