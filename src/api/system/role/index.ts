import request from '@/config/axios'


/**
 * cn.governance.pangu.module.system.controller.admin.permission.vo.role.RoleRespVO
 *
 * RoleRespVO
 */
// RoleRespVO 已废弃，如需响应类型请直接使用 RoleBase 或 Role 类型。

// 公共基础类型
export interface RoleBase {
  id?: number;
  name?: string;
  code: string;
  sort?: number;
  status?: number;
  type?: number;
  remark?: string;
  dataScope?: number;
  dataScopeDeptIds?: number[];
  createTime?: string | Date;
  [property: string]: any;
}

// 精简角色（用于下拉、简表等）
export type RoleSimple = RoleBase;

// 角色完整数据
export interface Role extends RoleBase {
  id: number;
  name: string;
  code: string;
  sort: number;
  status: number;
  type: number;
  dataScope: number;
  dataScopeDeptIds: number[];
  createTime: Date;
}

// 角色保存请求
export interface RoleSaveRequest extends Omit<RoleBase, 'createTime'> {
  id?: number;
  name: string;
  code: string;
  sort: number;
  status: number;
}

// 单个状态更新
export interface UpdateStatusSingle {
  id: number;
  status: number;
}

// 批量状态更新
export interface UpdateStatusBatch {
  ids: number[];
  status: number;
}

// 通用状态更新类型
export type UpdateStatusRequest = UpdateStatusSingle | UpdateStatusBatch;

/**
 * 获取角色分页列表
 * @param params 分页和查询参数
 * @returns 角色分页数据
 */
export const getRolePage = async (params: PageParam): Promise<PageResult<RoleBase[]>> => {
  return await request.get({ url: '/system/role/page', params })
}

/**
 * 获取精简角色列表（用于下拉、简表等）
 * @returns 精简角色数组
 */
export const getSimpleRoleList = async (): Promise<RoleBase[]> => {
  return await request.get({ url: '/system/role/simple-list' })
}

/**
 * 获取角色详情
 * @param id 角色ID
 * @returns 角色详情
 */
export const getRole = async (id: number): Promise<Role> => {
  return await request.get({ url: '/system/role/get?id=' + id })
}

/**
 * 新增角色
 * @param data 角色保存请求体
 * @returns 新增结果
 */
export const createRole = async (data: RoleSaveRequest) => {
  return await request.post({ url: '/system/role/create', data })
}

/**
 * 修改角色
 * @param data 角色保存请求体
 * @returns 修改结果
 */
export const updateRole = async (data: RoleSaveRequest) => {
  return await request.put({ url: '/system/role/update', data })
}

/**
 * 修改角色状态
 * @param data 状态更新参数
 * @returns 修改结果
 */
export const updateRoleStatus = async (data: UpdateStatusSingle) => {
  return await request.put({ url: '/system/role/update-status', data })
}

/**
 * 批量更新角色状态
 * @see https://app.apifox.com/link/project/6505154/apis/api-304820571
 * @param data
 * @returns
 */
export const batchUpdateRoleStatus = async (data: UpdateStatusRequest) => {
  return await request.put({ url: '/system/role/batch-update-status', data })
}

/**
 * 删除角色
 * @param id 角色ID
 * @returns 删除结果
 */
export const deleteRole = async (id: number) => {
  return await request.delete({ url: '/system/role/delete?id=' + id })
}

/**
 * 获取全部精简角色列表（用于岗位权限配置等）
 * @returns 精简角色数组
 */
export const getAllSimpleRoleList = async (): Promise<RoleBase[]> => {
  return await request.get({ url: '/system/role/list-all-simple' })
}

/**
 * 导出角色
 * @param params 查询参数
 * @returns 导出文件
 */
export const exportRole = (params) => {
  return request.download({
    url: '/system/role/export-excel',
    params
  })
}

