import request from '@/config/axios'

/**
 * JSONObject
 */
export interface JSONObject {
  [key: string]: unknown
}

/**
 * BusinessDataSaveReqVO
 */
export interface BusinessDataSaveReqVO {
  businessJson?: JSONObject
  manageId?: number | string
  [key: string]: unknown
}

/**
 * 创建业务数据
 * @param data 业务数据
 * @returns 创建结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076049
 */
export const createBusinessData = async (
  data: BusinessDataSaveReqVO
): Promise<unknown> => {
  return await request.post({ url: '/data/business-data/create', data })
}
