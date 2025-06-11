import request from '@/config/axios'
// todo 要改名字
export interface PostVO {
  id?: number
  name: string
  code: string
  sort: number
  status: number
  remark: string
  createTime?: Date
}

export interface UpdateJobDetailSingle {
  id: number; // 岗位编号（单个更新时必填）
  status: number; // 状态（1:启用，0:停用）
}

export interface  UpdateJobDetailBatch {
  ids: number[]; // 岗位编号数组（批量更新时必填）
  status: number; // 状态（1:启用，0:停用）
}

export type UpdatePostStatusParams = UpdateJobDetailSingle | UpdateJobDetailBatch;

/**
 * PostDetailVO
 */
export interface JobDetailData {
  /**
   * 岗位编码
   */
  code?: string;
  /**
   * 部门id
   */
  deptId: number;
  /**
   * 岗位编号
   */
  id?: number;
  /**
   * 岗位名称
   */
  name: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 显示顺序
   */
  sort?: number;
  /**
   * 状态
   */
  status?: number;
  [property: string]: any;
}

/**
 * 更新岗位状态接口
 *
 * @description 支持单个或批量更新岗位状态
 * @see https://app.apifox.com/link/project/6505154/apis/api-304820571
 * @param {UpdatePostStatusParams} data - 更新参数
 * @returns {Promise<AxiosResponse>} 包含操作结果的 Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 */
export const updatePostStatus = async (data: UpdatePostStatusParams) => {
  return await request.put({ url: `/system/post/update-status`, data })
}

/**
 * 更新岗位状态接口
 *
 * @description 支持单个或批量更新岗位状态
 * @see https://app.apifox.com/link/project/6505154/apis/api-304820572
 * @param {UpdatePostStatusParams} data - 更新参数
 * @returns {Promise<AxiosResponse>} 包含操作结果的 Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 */
export const updatePostBatchStatus = async (data: UpdatePostStatusParams) => {
  return await request.put({ url: `/system/post/batch-update-status`, data })
}


/**
 * 创建新岗位
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966490
 * @param {PostDetailVO} data - 岗位详情数据
 * @param {string} [data.code] - 岗位编码
 * @param {number} data.deptId - 所属部门ID（必填）
 * @param {string} data.name - 岗位名称（必填）
 * @param {string} [data.remark] - 岗位备注
 * @param {number} [data.sort] - 显示顺序
 * @param {number} [data.status] - 岗位状态（1:正常 0:停用）
 * @returns {Promise<AxiosResponse<{ code: number; message: string }>>} 包含操作结果的Promise
 * @throws {Error} 当请求失败或参数不合法时抛出错误
 *
 * @example
 * createJob({
 *   deptId: 1001,
 *   name: "前端开发工程师",
 *   code: "FE-001",
 *   sort: 1,
 *   status: 1
 * })
 * .then(response => {
 *   console.log("创建成功:", response.data);
 * })
 * .catch(error => {
 *   console.error("创建失败:", error.message);
 * });
 */
export const createJob = async (data: JobDetailData) => {
  return await request.post({ url: '/system/post/create', data })
}

/**
 *
 * 修改岗位
 *
 * @param data
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966491
 * @returns
 */
export const updatePost = async (data: JobDetailData) => {
  return await request.put({ url: '/system/post/update', data })
}

/**
 * 删除岗位
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-303966492
 * @param id
 * @returns
 */
export const deletePost = async (id: number) => {
  return await request.delete({ url: '/system/post/delete?id=' + id })
}






// 导出岗位
export const exportPost = async (params) => {
  return await request.download({ url: '/system/post/export', params })
}

// 查询岗位列表
export const getPostPage = async (params: PageParam) => {
  return await request.get({ url: '/system/post/page', params })
}

// 获取岗位精简信息列表
export const getSimplePostList = async (): Promise<PostVO[]> => {
  return await request.get({ url: '/system/post/simple-list' })
}

// 查询岗位详情
export const getPost = async (id: number) => {
  return await request.get({ url: '/system/post/get?id=' + id })
}
