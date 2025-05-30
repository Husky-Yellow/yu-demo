<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    :ellipsis="false"
    :class="menuClass"
    background-color="var(--top-header-bg-color)"
    text-color="var(--left-menu-text-color)"
    active-text-color="var(--left-menu-text-active-color)"
    :popper-class="popperClass"
    @select="handleMenuSelect"
  >
    <el-menu-item
      v-for="route in topLevelRoutes"
      :key="route.path"
      :index="route.path"
    >
      <template #title>
        <MenuTitle :meta="route.meta" />
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePermissionStore } from '@/store/modules/permission'
import { useDesign } from '@/hooks/web/useDesign'
import MenuTitle from './MenuTitle.vue'

const permissionStore = usePermissionStore()
const { getPrefixCls } = useDesign()
// constants
const prefixCls = getPrefixCls('menu')
// computed
const menuClass = computed(() => [
  prefixCls,
  `${prefixCls}__horizontal`,
  'h-[var(--top-tool-height)]'
])
const popperClass = computed(() => `${prefixCls}-popper--horizontal`)
const routers = computed(() => permissionStore.getRouters)
const topLevelRoutes = computed(() => 
  routers.value.filter(route => !route.meta?.hidden)
)
console.log('topLevelRoutes', topLevelRoutes.value);

// state
const activeMenu = ref('/')
// methods
const handleMenuSelect = (path: string) => {
  activeMenu.value = path
  // router.push(path)
  usePermissionStore().setShowChildRouter(path)
}
</script>