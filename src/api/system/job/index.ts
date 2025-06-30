import request from '@/config/axios'

/**
 * 岗位基础属性
 */
export interface JobBase {
  /**
   * 岗位编号
   */
  id?: number
  /**
   * 岗位名称
   */
  name: string
  /**
   * 岗位编码
   */
  code?: string
  /**
   * 所属部门ID
   */
  deptId: number
  /**
   * 显示顺序
   */
  sort?: number
  /**
   * 状态，参见 CommonStatusEnum 枚举类
   */
  status?: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 岗位列表查询请求参数
 */
export interface JobListRequest extends PageParam {
  /**
   * 部门编号
   */
  deptId?: number
  /**
   * 部门编号列表（逗号分隔）
   */
  deptIds?: string
  /**
   * 查看层级 0-全部 1-组织内
   */
  level?: number
  /**
   * 岗位名称，模糊匹配
   */
  name?: string
  /**
   * 展示状态，参见 CommonStatusEnum 枚举类
   */
  status?: number
}

/**
 * 岗位详情数据
 */
export interface JobDetailData extends JobBase {
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 岗位人数
   */
  userNum?: number
  /**
   * 数据范围，参见 DataScopeEnum 枚举类
   */
  dataScope?: number
  /**
   * 数据范围(指定部门数组)
   */
  dataScopeDeptIds?: number[]
}

export interface UpdateJobDetailSingle {
  id: number // 岗位编号（单个更新时必填）
  status: number // 状态（1:启用，0:停用）
}

export interface UpdateJobDetailBatch {
  ids: number[] // 岗位编号数组（批量更新时必填）
  status: number // 状态（1:启用，0:停用）
}

export type UpdatePostStatusParams = UpdateJobDetailSingle | UpdateJobDetailBatch

/**
 * 获得岗位分页列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966496
 * @param {JobListRequest} params 请求参数
 * @returns  {Promise<JobDetailData>} 岗位分页列表
 */
export const getJobPage = async (params: JobListRequest): Promise<PageResult<JobDetailData[]>> =>
  await request.get({ url: '/system/post/page', params })

/**
 * 更新岗位状态接口
 *
 * @description 支持单个或批量更新岗位状态
 * @see https://app.apifox.com/link/project/6505154/apis/api-304820571
 * @param {UpdatePostStatusParams} data - 更新参数
 * @returns {Promise<AxiosResponse>} 包含操作结果的 Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 */
export const updatePostStatus = async (data: UpdatePostStatusParams) =>
  await request.put({ url: `/system/post/update-status`, data })

/**
 * 更新岗位状态接口
 *
 * @description 支持单个或批量更新岗位状态
 * @see https://app.apifox.com/link/project/6505154/apis/api-304820572
 * @param {UpdatePostStatusParams} data - 更新参数
 * @returns {Promise<AxiosResponse>} 包含操作结果的 Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 */
export const updatePostBatchStatus = async (data: UpdatePostStatusParams) =>
  await request.put({ url: `/system/post/batch-update-status`, data })

/**
 * 创建新岗位
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966490
 * @param {JobBase} data - 岗位详情数据
 * @returns {Promise<AxiosResponse<{ code: number; message: string }>>} 包含操作结果的Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 */
export const createJob = async (data: JobBase) =>
  await request.post({ url: '/system/post/create', data })

/**
 * 修改岗位
 *
 * @param {JobBase} data - 岗位详情数据
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966491
 * @returns {Promise<AxiosResponse>} 包含操作结果的Promise
 */
export const updatePost = async (data: JobBase) =>
  await request.put({ url: '/system/post/update', data })

/**
 * 删除岗位
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966492
 * @param id
 * @returns
 */
export const deletePost = async (id: number) =>
  await request.delete({ url: '/system/post/delete?id=' + id })

/**
 * 获得岗位信息
 *
 * @description 查询岗位详情
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966493
 * @param {string} id 岗位编号
 * @returns {Promise<JobDetailData>} 岗位详情数据
 */
export const getPost = async (id: string): Promise<JobDetailData> =>
  await request.get({ url: '/system/post/get?id=' + id })

/**
 * 获取岗位精简信息列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966494
 * @returns {Promise<JobDetailData[]>} 岗位精简信息列表
 */
export const getSimplePostList = async (): Promise<JobDetailData[]> =>  await request.get({ url: '/system/post/simple-list' })
