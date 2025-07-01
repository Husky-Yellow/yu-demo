import request from '@/config/axios'

/**
 * 检索条件项（用于业务数据筛选）
 * @property fieldCode 字段编码
 * @property fieldType 字段类型（0-文本，1-单选，2-多选，3-时间区间）
 * @property fieldValue 检索值，时间区间以逗号隔开
 */
export interface BusinessDataSearchItem {
  fieldCode?: string;
  fieldType?: number;
  fieldValue?: string;
}

/**
 * 业务数据分页请求参数
 * @property labelManageId 业务标签管理ID
 * @property labelIds 业务标签ID集合，多个以逗号隔开
 * @property keyword 全局检索关键字
 * @property filters 筛选条件数组
 */
export interface BusinessDataListRequest extends PageParam {
  labelManageId?: string | number;
  labelIds?: string;
  keyword?: string;
  filters?: BusinessDataSearchItem[];
  [property: string]: any;
}

/**
 * 通用 JSON 对象结构（后端返回的业务数据项）
 * @property members 字段成员映射
 */
export interface BusinessData {
  members?: LinkedTreeMapJsonElement;
  [property: string]: any;
}

/**
 * JSON 元素的映射结构（用于描述嵌套对象）
 * @property key 字段键值对对象
 */
export interface LinkedTreeMapJsonElement {
  key?: { [key: string]: any };
  [property: string]: any;
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
  return await request.get({ url: '/data/business-data/page', params })
}