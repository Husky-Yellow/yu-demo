import request from '@/config/axios'

export interface DeptFormData {
  /** 部门名称 */
  name: string;
  /** 父部门ID，0表示根部门 */
  parentId: number;
  /** 显示排序 */
  sort: number;
  /** 部门状态：0-正常，1-停用 */
  status: 0 | 1;
  /** 部门标题（可选） */
  title?: string;
  /** 部门ID（创建时不存在，更新时存在） */
  id?: number;
}


/**
 * 创建新部门
 * @param {DeptFormData} params - 部门更新数据（必须包含部门ID）
 * @returns {Promise<void>} 包含更新结果的Promise
 * @throws {AxiosError} 当请求失败时抛出
 */
export const createDept = async (data: DeptFormData) => {
  return await request.post({ url: '/system/dept/create', data: data })
}

/**
 * 更新部门信息
 * @param {DeptFormData} params - 部门更新数据（必须包含部门ID）
 * @returns {Promise<void>} 包含更新结果的Promise
 * @throws {AxiosError} 当请求失败时抛出
 */
export const updateDept = async (data: DeptFormData): Promise<void> =>  {
  return await request.put({ url: '/system/dept/update' , data })
}

/**
 * 删除指定部门
 * @param {number} id - 要删除的部门ID
 * @returns {Promise<void>} 包含删除结果的Promise
 * @throws {AxiosError} 当请求失败时抛出
 */
export const deleteDept = async (id: number) => {
  return await request.delete({ url: '/system/dept/delete?id=' + id })
}


// 查询部门（精简)列表
export const getSimpleDeptList = async (): Promise<DeptFormData[]> => {
  return await request.get({ url: '/system/dept/simple-list' })
}

// 查询部门列表
export const getDeptPage = async (params: PageParam) => {
  return await request.get({ url: '/system/dept/list', params })
}

// 查询部门详情
export const getDept = async (id: number) => {
  return await request.get({ url: '/system/dept/get?id=' + id })
}

