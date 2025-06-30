import request from '@/config/axios'

/**
 * PermissionAssignPostDataScopeReqVO
 */
export interface Request {
  /**
   * 数据范围，参见 DataScopeEnum 枚举类
   */
  dataScope: number;
  /**
   * 兜底
   * 部门编号列表，只有范围类型为 DEPT_CUSTOM 时，该字段才需要
   */
  dataScopeDeptIds?: number[];
  /**
   * 岗位编号
   */
  postId: number;
  [property: string]: any;
}


export interface PermissionAssignUserRoleReqVO {
  userId: number
  roleIds: number[]
}

export interface PermissionAssignRoleMenuReqVO {
  roleId: number
  menuIds: number[]
}

export interface PermissionAssignRoleDataScopeReqVO {
  roleId: number
  dataScope: number
  dataScopeDeptIds: number[]
}

// 查询角色拥有的菜单权限
export const getRoleMenuList = async (roleId: number) => {
  return await request.get({ url: '/system/permission/list-role-menus?roleId=' + roleId })
}

// 赋予角色菜单权限
export const assignRoleMenu = async (data: PermissionAssignRoleMenuReqVO) => {
  return await request.post({ url: '/system/permission/assign-role-menu', data })
}

// 赋予角色数据权限
export const assignRoleDataScope = async (data: PermissionAssignRoleDataScopeReqVO) => {
  return await request.post({ url: '/system/permission/assign-role-data-scope', data })
}

// 查询用户拥有的角色数组
export const getUserRoleList = async (userId: number) => {
  return await request.get({ url: '/system/permission/list-user-roles?userId=' + userId })
}

// 赋予用户角色
export const assignUserRole = async (data: PermissionAssignUserRoleReqVO) => {
  return await request.post({ url: '/system/permission/assign-user-role', data })
}



// 赋予岗位数据权限
export const assignPostDataScope = async (data: PermissionAssignPostDataScopeReqVO) => {
  return await request.post({ url: '/system/permission/assign-post-data-scope', data })
}



