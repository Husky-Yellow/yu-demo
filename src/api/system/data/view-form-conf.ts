import request from '@/config/axios'

/**
 * 获取表单配置
 * @param params
 * @param params.id - 表单ID
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076041
 */
export const getViewFormConf = async (params: { id?: string, manageId: string, formType: number }) => {
  return await request.get({ url: '/data/view-form-conf/get', params })
}

/**
 * 更新表单配置
 * @param params
 * @param params.id - 表单ID
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型 0：编辑；1：新增；2：详情；
 * @param params.formJson - 表单配置
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076040
 */
export const updateViewFormConf = async (data: { id: string, manageId: string, formType: 0 | 1 | 2, formJson: string }) => {
  return await request.put({ url: '/data/view-form-conf/update', data })
}

/**
 * 创建表单配置
 * @param params
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型 0：编辑；1：新增；2：详情；
 * @param params.formJson - 表单配置
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076039
 */
export const createViewFormConf = async (data: { manageId: string, formType: 0 | 1 | 2, formJson: string }) => {
  return await request.post({ url: '/data/view-form-conf/create', data })
}


