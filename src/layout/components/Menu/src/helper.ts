import type { RouteMeta } from 'vue-router'
import { findPath } from '@/utils/tree'

type OnlyOneChildType = AppRouteRecordRaw & { noShowingChildren?: boolean }

interface HasOneShowingChild {
  oneShowingChild?: boolean
  onlyOneChild?: OnlyOneChildType
}

export const getAllParentPath = <T = Recordable>(treeData: T[], path: string) => {
  const menuList = findPath(treeData, (n) => n.path === path) as AppRouteRecordRaw[]
  return (menuList || []).map((item) => item.path)
}

export const hasOneShowingChild = (
  children: AppRouteRecordRaw[] = [],
  parent: AppRouteRecordRaw
): HasOneShowingChild => {
  const onlyOneChild = ref<OnlyOneChildType>()

  const showingChildren = children.filter((v) => {
    const meta = (v.meta ?? {}) as RouteMeta
    if (meta.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = v
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return {
      oneShowingChild: true,
      onlyOneChild: unref(onlyOneChild)
    }
  }

  // Show parent if there are no child router to display
  if (!showingChildren.length) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return {
      oneShowingChild: true,
      onlyOneChild: unref(onlyOneChild)
    }
  }

  return {
    oneShowingChild: false,
    onlyOneChild: unref(onlyOneChild)
  }
}


export const findParentPathsByFullPath = (tree: AppRouteRecordRaw[], fullPath: string) =>   {
  // 移除基础路径（如 '/basic'）
  const pathSegments = fullPath.split('/').filter(Boolean)
  const relativePath = pathSegments.slice(1).join('/') // 'people/label'

  const result: string[] = []

  function dfs(nodes: any[], parentPath = '') {
    for (const node of nodes) {
      const currentPath = parentPath ? `${parentPath}/${node.path}` : node.path
      if (relativePath.startsWith(currentPath + '/') || relativePath === currentPath) {
        if (relativePath !== currentPath) {
          result.push(currentPath) // 返回如 'people'
        }
        if (node.children?.length) {
          dfs(node.children, currentPath)
        }
      }
    }
  }

  dfs(tree)
  return result
}

export function removeFirstSegment(path: string): string {
  const firstSlashIndex = path.indexOf('/');
  if (firstSlashIndex === -1) return path; // 没有斜杠，返回原样

  const secondSlashIndex = path.indexOf('/', firstSlashIndex + 1);
  return secondSlashIndex === -1
    ? path // 只有一个 `/`（如 `/dict`），返回原样
    : path.slice(secondSlashIndex); // 从第二个 `/` 开始截取
}
