<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    :ellipsis="false"
    :class="menuClass"
    background-color="var(--top-header-bg-color)"
    text-color="var(--left-menu-text-color)"
    active-text-color="var(--left-menu-text-active-color)"
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
import { usePermissionStore } from '@/store/modules/permission'
import { useDesign } from '@/hooks/web/useDesign'
import MenuTitle from './MenuTitle.vue'
import { useAppStore } from '@/store/modules/app'

const permissionStore = usePermissionStore()
const appStore = useAppStore()
const { getPrefixCls } = useDesign()
const { currentRoute } = useRouter()
// constants
const prefixCls = getPrefixCls('menu')
// computed
const menuClass = computed(() => [
  prefixCls,
  `${prefixCls}__horizontal`,
  'h-[var(--top-tool-height)]'
])
const routers = computed(() => permissionStore.getRouters)
const topNav = computed(() => appStore.getTopNav)

const topLevelRoutes = computed(() =>
  routers.value.filter(route => !route.meta?.hidden)
)

// state
const activeMenu = ref('/')

const getActiveMenu = () => {
  const { path } = currentRoute.value
  // 获取当前路径的第一级路径（如 /system/user -> /system）
  const firstLevelPath = '/' + path.split('/')[1]

  // 在顶级路由中查找匹配的菜单
  const matchedRoute = topLevelRoutes.value.find(route => {
    // 精确匹配或路径前缀匹配
    return route.path === path || route.path === firstLevelPath
  })

  return matchedRoute?.path || '/'
}

const handleMenuSelect = (path: string) => {
  activeMenu.value = path
  usePermissionStore().setShowChildRouter(path)
}
onMounted(() => {
  // 刷新后展示对应的子菜单
  if (unref(topNav)) {
    handleMenuSelect(getActiveMenu())
  }
})
</script>