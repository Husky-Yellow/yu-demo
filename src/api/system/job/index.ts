import request from '@/config/axios'

export interface PostVO {
  id?: number
  name: string
  code: string
  sort: number
  status: number
  remark: string
  createTime?: Date
}

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


/**
 * 创建新岗位
 *
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

// 修改岗位
export const updatePost = async (data: JobDetailData) => {
  return await request.put({ url: '/system/post/update', data })
}

// 删除岗位
export const deletePost = async (id: number) => {
  return await request.delete({ url: '/system/post/delete?id=' + id })
}

// 导出岗位
export const exportPost = async (params) => {
  return await request.download({ url: '/system/post/export', params })
}
