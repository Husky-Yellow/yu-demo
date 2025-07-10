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


/**
 * 获取业务数据
 * @param params 参数
 * @param params.id 业务数据id
 * @param params.manageId 管理id
 * @returns 业务数据
 * @see https://app.apifox.com/link/project/6505154/apis/api-313330882
 */
export const getBusinessData = async (params: { id: string, manageId: string }): Promise<Record<string, any>> => {
  return await request.get({ url: `/data/business-data/get`, params })
}