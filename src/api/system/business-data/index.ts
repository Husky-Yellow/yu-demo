import request from '@/config/axios'

/**
 * 检索条件项（用于业务数据筛选）
 * @property code 检索项
 * @property type 字段类型（0-文本，1-单选，2-多选，3-时间区间）
 * @property value 检索值，时间区间以逗号隔开
 */
export interface SearchCondition {
  /**
   * 检索项
   */
  code: string
  /**
   * 类型 0-文本1-单选2-多选3-时间区间
   */
  type: number
  /**
   * 检索数据 时间区间以逗号隔开
   */
  value: string
}

/**
 * 业务数据分页请求参数
 * @property labelManageId 业务标签管理ID
 * @property labelIds 业务标签ID集合，多个以逗号隔开
 * @property keyword 全局检索关键字
 * @property filters 筛选条件数组
 */
export interface BusinessDataListRequest extends PageParam {
  /**
   * 标签管理ID
   */
  manageId?: string
  /**
   * 标签ID集合,多个以逗号隔开
   */
  manageIds?: string
  /**
   * 检索项
   */
  search?: string
  /**
   * 搜索条件列表
   */
  searchList?: SearchCondition[]
  [property: string]: any
}

/**
 * 通用 JSON 对象结构（后端返回的业务数据项）
 * @property members 字段成员映射
 */
export interface BusinessData {
  members?: LinkedTreeMapJsonElement
  [property: string]: any
}

/**
 * JSON 元素的映射结构（用于描述嵌套对象）
 * @property key 字段键值对对象
 */
export interface LinkedTreeMapJsonElement {
  key?: { [key: string]: any }
  [property: string]: any
}

/**
 * 获取业务数据分页
 * @see https://app.apifox.com/link/project/6505154/apis/api-313182261
 * @param params 分页查询参数
 * @returns 业务数据分页列表
 */
export const getBusinessDataPage = async (
  params: BusinessDataListRequest
): Promise<PageResult<BusinessData[]>> => {
  return await request.post({ url: '/data/business-data/page', data: params })
}

/**
 * 批量删除业务数据
 * @param params 删除参数
 * @returns 删除结果
 */
export const deleteBusinessDataList = async (params: string): Promise<any> => {
  return await request.delete({ url: `/data/business-data/delete-list?${params}` })
}

/**
 * 新增校验
 * @see https://app.apifox.com/link/project/6505154/apis/api-319648551
 * @param params 新增校验参数
 * @returns 新增校验结果
 */
export const addCheck = async (data: { idCard: string, manageId: string }): Promise<any> => {
  return await request.post({ url: `/data/business-data/add-check`, data })
}


