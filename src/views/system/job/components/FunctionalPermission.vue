<template>
  <el-form label-width="80px">
    <el-form-item label="选择角色">
      <el-select v-model="selectedRoleId" placeholder="请选择角色" @change="handleRoleChange">
        <el-option v-for="role in roleList" :key="role.id" :label="role.name" :value="role.id" />
      </el-select>
    </el-form-item>
    <el-form-item label="权限预览">
      <el-card class="w-full" shadow="never">
        <template #header>
          <div class="flex items-center">
            <span class="mr-10">全选/全不选:</span>
            <el-switch
              v-model="treeNodeAll"
              active-text="是"
              inactive-text="否"
              inline-prompt
              @change="handleCheckedTreeNodeAll"
            />
            <span class="ml-10 mr-10">全部展开/折叠:</span>
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
          :data="menuOptions"
          :props="defaultProps"
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
import type { RoleVO } from '@/api/system/role'

const loading = ref(false)
const menuOptions = ref<any[]>([])
const treeRef = ref()
const menuExpand = ref(false)
const treeNodeAll = ref(false)

const roleList = ref<RoleVO[]>([])
const selectedRoleId = ref<number>()
let initialMenuIds: number[] = []

const handleRoleChange = async () => {
  if (selectedRoleId.value) {
    await getMenuPermissions(selectedRoleId.value)
  }
}

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

const getSelectedDataForSave = () => {
  if (!selectedRoleId.value) return null
  return {
    roleId: selectedRoleId.value,
    menuIds: [
      ...(treeRef.value.getCheckedKeys(false) as Array<number>),
      ...(treeRef.value.getHalfCheckedKeys() as Array<number>)
    ]
  }
}

const resetPermissions = () => {
  treeRef.value?.setCheckedKeys(initialMenuIds)
}

const handleCheckedTreeNodeAll = () => {
  treeRef.value.setCheckedNodes(treeNodeAll.value ? menuOptions.value : [])
}

const handleCheckedTreeExpand = () => {
  const nodes = treeRef.value?.store.nodesMap
  for (const node in nodes) {
    nodes[node].expanded = menuExpand.value
  }
}

defineExpose({ getSelectedDataForSave, resetPermissions })

onMounted(async () => {
  loading.value = true
  menuOptions.value = handleTree(await MenuApi.getSimpleMenusList())
  roleList.value = await RoleApi.getSimpleRoleList()
  if (roleList.value.length > 0) {
    selectedRoleId.value = roleList.value[0].id
    await handleRoleChange()
  }
  loading.value = false
})
</script> 