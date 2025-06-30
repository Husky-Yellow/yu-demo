<template>
  <ContentWrap>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="功能权限" name="menu">
        <FunctionalPermission
          ref="menuPermissionRef"
          :job="selectedJob"
          @success="handleSuccess"
        />
      </el-tab-pane>
      <el-tab-pane label="数据权限" name="data">
        <DataPermission ref="dataPermissionRef" :job="selectedJob" @success="handleSuccess" />
      </el-tab-pane>
    </el-tabs>
    <div class="mt-20px text-right">
      <el-button type="primary" @click="submitForm">保存</el-button>
      <el-button @click="handleCancel">取消</el-button>
    </div>
  </ContentWrap>
</template>

<script lang="ts" setup>
import * as JobApi from '@/api/system/job'
import FunctionalPermission from './components/FunctionalPermission.vue'
import DataPermission from './components/DataPermission.vue'

defineOptions({ name: 'SystemJobDetail' })

const message = useMessage()
const { query } = useRoute()
const router = useRouter()

const loading = ref(false)
const activeTab = ref('menu')

let selectedJob = reactive<Partial<JobApi.JobDetailData>>({})


const menuPermissionRef = ref<InstanceType<typeof FunctionalPermission>>()
const dataPermissionRef = ref<InstanceType<typeof DataPermission>>()

const getJobDetail = async () => {
  loading.value = true
  const data = await JobApi.getPost(query?.id as string)
  selectedJob = data

}

const submitForm = async () => {
  activeTab.value === 'menu' ? menuPermissionRef.value?.saveForm() : dataPermissionRef.value?.saveForm()
}

const handleCancel = () => {
  router.back()
}

const handleSuccess = () => {
  message.success('修改成功')
  handleCancel()
}

onMounted(async () => {

  await getJobDetail()

})
</script>
