import request from '@/config/axios'

/** 基础实体 */
export interface BaseEntity {
  id: number | string;
  createTime?: string;
  updateTime?: string;
}

/** 部门类型枚举 */
export enum DeptType {
  DEPARTMENT = 0,  // 部门
  POSITION = 1     // 岗位
}

/** 部门状态枚举 */
export enum DeptStatus {
  NORMAL = 0,      // 正常
  DISABLED = 1     // 停用
}

/** 部门节点 */
export interface DeptNode extends BaseEntity {
  name: string;
  parentId: number | null;
  type: DeptType;
  status: DeptStatus;
  sort: number;
  children?: DeptNode[] | null;

  // 部门特有字段
  title?: string;

  // 岗位特有字段
  deptId?: number;  // 所属部门ID
}

/** 部门表单数据 */
export type DeptFormData = Omit<Partial<DeptNode>, 'id'> &
  Required<Pick<DeptNode, 'name' | 'parentId' | 'type' | 'status' | 'sort'>>;

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



// 查询部门列表（精简)
export const getAllSimpleDeptList = async (): Promise<DeptFormData[]> => {
  return await request.get({ url: '/system/dept/list-all-simple' })
}

/**
 * 获得部门树携带岗位信息
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-315974149
 * @returns {Promise<DeptFormData[]>} 包含部门树的Promise
 * @throws {AxiosError} 当请求失败时抛出
 */
export const getDeptTreeWithPost = async (): Promise<DeptNode[]> => {
  return await request.get({ url: '/system/dept/tree-with-post' })
}
