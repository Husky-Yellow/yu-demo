<template>
  <ContentWrap>
    <el-tabs v-model="activeTab" class="mt-20px">
      <el-tab-pane label="功能权限" name="menu">
        <FunctionalPermission ref="menuPermissionRef" :job-id="selectedJob.id" />
      </el-tab-pane>
      <el-tab-pane label="数据权限" name="data">
        <DataPermission ref="dataPermissionRef" :job="selectedJob" />
      </el-tab-pane>
    </el-tabs>
    <div  class="mt-20px text-right">
      <el-button type="primary" @click="submitForm">保存</el-button>
      <el-button @click="handleCancel">取消</el-button>
    </div>
  </ContentWrap>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import * as JobApi from '@/api/system/job'
import type { JobVO } from '@/api/system/job'
import * as PermissionApi from '@/api/system/permission'
import { ElMessage } from 'element-plus'
import FunctionalPermission from './components/FunctionalPermission.vue'
import DataPermission from './components/DataPermission.vue'

defineOptions({ name: 'SystemJobPermission' })

const { t } = useI18n()
const message = useMessage()

const loading = ref(false)
const activeTab = ref('menu')

const jobList = ref<JobVO[]>([])
const selectedJob = reactive<{
  id?: number
  name?: string
  dataScope?: number
  dataScopeDeptIds?: number[]
}>({
  id: undefined,
  name: undefined,
  dataScope: undefined,
  dataScopeDeptIds: []
})

const initialPermissions = reactive({
  menuIds: [] as number[],
  dataScope: undefined as number | undefined,
  dataScopeDeptIds: [] as number[]
})

const menuPermissionRef = ref<InstanceType<typeof FunctionalPermission>>()
const dataPermissionRef = ref<InstanceType<typeof DataPermission>>()

const getJobList = async () => {
  jobList.value = await JobApi.getSimplePostList()
}

const handleJobChange = async (jobId: number) => {
  loading.value = true
  try {
    const job = jobList.value.find((item) => item.id === jobId)
    if (job) {
      selectedJob.name = job.name
      selectedJob.dataScope = job.dataScope
      selectedJob.dataScopeDeptIds = job.dataScopeDeptIds
      initialPermissions.dataScope = job.dataScope
      initialPermissions.dataScopeDeptIds = [...(job.dataScopeDeptIds || [])]
    }
    await nextTick()
    if (menuPermissionRef.value) {
      const menuIds = await menuPermissionRef.value.getMenuPermissions()
      initialPermissions.menuIds = [...menuIds]
    }
    if (dataPermissionRef.value) {
      await dataPermissionRef.value.getDataPermissions()
    }
  } finally {
    loading.value = false
  }
}

const submitForm = async () => {
  const data = permissionRef.value?.getSelectedDataForSave()
  if (!data) {
    message.error('请选择一个角色')
    return
  }
  loading.value = true
  try {
    await PermissionApi.assignRoleMenu(data)
    message.success(t('common.updateSuccess'))
  } finally {
    loading.value = false
  }
}

const handleCancel = () => {
  menuPermissionRef.value?.setMenuKeys(initialPermissions.menuIds)
  dataPermissionRef.value?.setData(initialPermissions.dataScope, initialPermissions.dataScopeDeptIds)
  message.info('Changes cancelled')
}

onMounted(async () => {
  loading.value = true
  try {
    await getJobList()
    if (jobList.value.length > 0) {
      selectedJob.id = jobList.value[0].id
      await handleJobChange(jobList.value[0].id)
    }
  } finally {
    loading.value = false
  }
})
</script>
