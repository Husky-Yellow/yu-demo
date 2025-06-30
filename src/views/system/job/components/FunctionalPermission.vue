<template>
  <el-form label-width="80px">
    <el-form-item label="选择角色">
      <el-select v-model="selectedRoleId" placeholder="请选择角色" @change="handleRoleChange">
        <el-option v-for="role in roleList" :key="role.id" :label="role.name" :value="role.id!" />
      </el-select>
    </el-form-item>
    <el-form-item label="权限预览">
      <el-card class="w-full" shadow="never">
        <template #header>
          <div class="flex items-center">
            <span class="mr-10">全部展开/折叠:</span>
            <el-switch
              v-model="menuExpand"
              active-text="展开"
              inactive-text="折叠"
              inline-prompt
              @change="handleCheckedTreeExpand"
            />
          </div>
        </template>
        <el-tree
          ref="treeRef"
          :disabled="true"
          :data="menuOptions"
          :props="{
            ...defaultProps,
            disabled: 'disabled',
          }"
          class="h-400px !overflow-y-scroll"
          empty-text="加载中，请稍候"
          node-key="id"
          show-checkbox
        />
      </el-card>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { defaultProps, handleTree } from '@/utils/tree'
import * as MenuApi from '@/api/system/menu'
import * as PermissionApi from '@/api/system/permission'
import * as RoleApi from '@/api/system/role'
import * as JobApi from '@/api/system/job'

const emit = defineEmits(['success'])

const props = defineProps<{
  job: Partial<JobApi.JobDetailData>
}>()
const message = useMessage()
const loading = ref(false)
const menuOptions = ref<any[]>([])
const treeRef = ref()
const menuExpand = ref(false)
const roleList = ref<RoleApi.RoleRespData[]>([])
const selectedRoleId = ref<number>()
let initialMenuIds: number[] = []

/** 角色切换时，加载权限 */
const handleRoleChange = async () => {
  if (!selectedRoleId.value) return
  resetPermissions()
  await getMenuPermissions(selectedRoleId.value)
}

/** 获取角色的菜单权限 */
const getMenuPermissions = async (roleId: number) => {
  loading.value = true
  try {
    const menuIds = await PermissionApi.getRoleMenuList(roleId)
    initialMenuIds = [...menuIds]
    await nextTick()
    treeRef.value?.setCheckedKeys(menuIds)
  } finally {
    loading.value = false
  }
}

/** 重置为初始权限 */
const resetPermissions = () => {
  treeRef.value?.setCheckedKeys(initialMenuIds)
}

/** 展开/折叠所有菜单树节点 */
const handleCheckedTreeExpand = () => {
  const nodes = treeRef.value?.store.nodesMap
  if (!nodes) return
  Object.values(nodes).forEach((node: any) => {
    node.expanded = menuExpand.value
  })
}

const saveForm = () => {
  console.log('saveForm')
  const data = selectedRoleId.value
  console.log('data',data);
  JobApi.updatePost({
    ...props.job,
    roleId: selectedRoleId.value,
  }).then(() => {
    message.success('保存成功')
    emit('success')
  }).catch(() => {
    message.error('保存失败')
  })

}

defineExpose({ saveForm })

/** 初始化加载角色和菜单 */
onMounted(async () => {
  loading.value = true
  try {
    // 并发获取角色和菜单
    const [menuList, roles] = await Promise.all([
      MenuApi.getSimpleMenusList(),
      RoleApi.getAllSimpleRoleList()
    ])
    roleList.value = roles
    menuOptions.value = handleTree(
      menuList.map((item) => ({
        ...item,
        disabled: true
      }))
    )
    // 默认选中第一个角色并加载权限
    if (roleList.value.length > 0) {
      selectedRoleId.value = roleList.value[0].id
      await handleRoleChange()
    }
  } finally {
    loading.value = false
  }
})
</script>