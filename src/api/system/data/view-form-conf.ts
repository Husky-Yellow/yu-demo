import request from '@/config/axios'
import { ViewFormType } from '@/config/constants/enums/label'

export interface ViewFormConfParams {
  /**
   * 主键ID
   * @description 表单配置的唯一标识
   */
  id?: string
  /**
   * 管理ID
   * @description 关联的标签管理记录ID
   */
  manageId: string
  /**
   * 表单类型
   * @description 0：编辑；1：新增；2：详情；
   */
  formType: ViewFormType
}

export interface ViewFormConfData extends ViewFormConfParams {
  /**
   * 表单配置
   * @description 表单配置的JSON字符串
   */
  formJson: string
}

/**
 * 获取表单配置
 * @param params
 * @param params.id - 表单ID
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076041
 */
export const getViewFormConf = async (params: ViewFormConfParams): Promise<any> => {
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
export const updateViewFormConf = async (data: ViewFormConfData): Promise<any> => {
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
export const createViewFormConf = async (data: Omit<ViewFormConfData, 'id'>): Promise<any> => {
  return await request.post({ url: '/data/view-form-conf/create', data })
}
