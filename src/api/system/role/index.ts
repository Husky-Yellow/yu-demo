import request from '@/config/axios'


/**
 * cn.governance.pangu.module.system.controller.admin.permission.vo.role.RoleRespVO
 *
 * RoleRespVO
 */
export interface RoleRespData {
  /**
   * 角色标志
   */
  code: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 数据范围，参见 DataScopeEnum 枚举类
   */
  dataScope?: number;
  /**
   * 数据范围(指定部门数组)
   */
  dataScopeDeptIds?: number[];
  /**
   * 角色编号
   */
  id?: number;
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 显示顺序
   */
  sort?: number;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   */
  status?: number;
  /**
   * 角色类型，参见 RoleTypeEnum 枚举类
   */
  type?: number;
  [property: string]: any;
}


export interface RoleVO {
  id: number
  name: string
  code: string
  sort: number
  status: number
  type: number
  dataScope: number
  dataScopeDeptIds: number[]
  createTime: Date
}

export interface UpdateStatusReqVO {
  id: number
  status: number
}

// 查询角色列表
export const getRolePage = async (params: PageParam) => {
  return await request.get({ url: '/system/role/page', params })
}

// 查询角色（精简)列表
export const getSimpleRoleList = async (): Promise<RoleVO[]> => {
  return await request.get({ url: '/system/role/simple-list' })
}

// 查询角色详情
export const getRole = async (id: number) => {
  return await request.get({ url: '/system/role/get?id=' + id })
}

// 新增角色
export const createRole = async (data: RoleVO) => {
  return await request.post({ url: '/system/role/create', data })
}

// 修改角色
export const updateRole = async (data: RoleVO) => {
  return await request.put({ url: '/system/role/update', data })
}

// 修改角色状态
export const updateRoleStatus = async (data: UpdateStatusReqVO) => {
  return await request.put({ url: '/system/role/update-status', data })
}

// 删除角色
export const deleteRole = async (id: number) => {
  return await request.delete({ url: '/system/role/delete?id=' + id })
}

// 导出角色
export const exportRole = (params) => {
  return request.download({
    url: '/system/role/export-excel',
    params
  })
}


/**
 * 查询角色列表（精简)
 * 用于岗位权限配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966362
 * @returns
 */
export const getAllSimpleRoleList = async (): Promise<RoleRespData[]> => {
  return await request.get({ url: '/system/role/list-all-simple' })
}

