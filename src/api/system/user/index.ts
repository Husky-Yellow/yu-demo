import request from '@/config/axios'

export interface UserVO {
  id: number
  username: string
  nickname: string
  deptId: number
  postIds: string[]
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  status: number
  remark: string
  loginDate: Date
  createTime: Date
}


/**
 * cn.governance.pangu.module.system.controller.admin.user.vo.user.UserRespVO
 *
 * UserRespVO
 */
export interface UserResp {
  /**
   * 用户头像
   */
  avatar?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 部门ID
   */
  deptId?: number;
  /**
   * 部门名称
   */
  deptName?: string;
  /**
   * 用户邮箱
   */
  email?: string;
  /**
   * 用户编号
   */
  id?: number;
  /**
   * 最后登录时间
   */
  loginDate?: string;
  /**
   * 最后登录 IP
   */
  loginIp?: string;
  /**
   * 手机号码
   */
  mobile?: string;
  /**
   * 用户昵称
   */
  nickname?: string;
  /**
   * 岗位编号数组
   */
  postIds?: number[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 用户性别，参见 SexEnum 枚举类
   */
  sex?: number;
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   */
  status?: number;
  /**
   * 用户账号
   */
  username?: string;
  [property: string]: any;
}

// 查询用户管理列表
export const getUserPage = (params: PageParam) => {
  return request.get({ url: '/system/user/page', params })
}

// 查询用户详情
export const getUser = (id: number) => {
  return request.get({ url: '/system/user/get?id=' + id })
}

// 新增用户
export const createUser = (data: UserVO) => {
  return request.post({ url: '/system/user/create', data })
}

// 修改用户
export const updateUser = (data: UserVO) => {
  return request.put({ url: '/system/user/update', data })
}

// 删除用户
export const deleteUser = (id: number) => {
  return request.delete({ url: '/system/user/delete?id=' + id })
}

// 导出用户
export const exportUser = (params: any) => {
  return request.download({ url: '/system/user/export', params })
}

// 下载用户导入模板
export const importUserTemplate = () => {
  return request.download({ url: '/system/user/get-import-template' })
}

// 用户密码重置
export const resetUserPassword = (id: number, password: string) => {
  const data = {
    id,
    password
  }
  return request.put({ url: '/system/user/update-password', data: data })
}

// 用户状态修改
export const updateUserStatus = (id: number, status: number) => {
  const data = {
    id,
    status
  }
  return request.put({ url: '/system/user/update-status', data: data })
}
// 用户状态修改
export const updateUserBatchStatus = (data) => {
  return request.put({ url: '/system/user/batch-update-status', data })
}

// 获取用户精简信息列表
export const getSimpleUserList = (): Promise<UserVO[]> => {
  return request.get({ url: '/system/user/simple-list' })
}



/**
 * 根据岗位ID查询用户信息
 * @see https://app.apifox.com/link/project/6505154/apis/api-315338772
 * @param {number} postId 岗位ID
 * @returns {Promise<UserVO[]>} 用户信息列表
 */
export const getUserListByPostId = (postId: number): Promise<UserResp[]> => {
  return request.get({ url: '/system/user/list-by-post-id?postId=' + postId })
}