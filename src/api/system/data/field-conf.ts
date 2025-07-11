import request from '@/config/axios'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'



/**
 * 根据管理ID获取字段配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 字段配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getFieldConfigListByManageId = async (params: { manageId: string }): Promise<LabelFieldConfig[]> => {
  return await request.get({ url: '/data/field-conf/list-by-manage-id', params })
}


/**
 * 创建标签配置列表（已弃用）
 * @deprecated 自 v2.3.0 起弃用，请使用 updateFieldConfigList 函数
 * @param {LabelFieldConfig[]} data - 标签配置数据列表
 * @returns {Promise<any>} 创建结果
 */
export const createFieldConfigList = async (data: LabelFieldConfig[]) => {
  return await request.post({ url: '/data/field-conf/create-list', data })
}

/**
 * 更新标签配置列表
 * @param {LabelFieldConfig[]} data - 标签配置数据列表
 * @returns {Promise<any>} 更新结果
 */
export const updateFieldConfigList = async (data: LabelFieldConfig[]) => {
  return await request.put({ url: '/data/field-conf/update-list', data })
}

/**
 * 获取标签配置列表
 * @param {manageId} params - 分页查询参数
 * @returns {Promise<LabelFieldConfig[]>} 标签配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getFieldConfigList = async (params: { manageId: string }): Promise<LabelFieldConfig[]> => {
  return await request.get({ url: '/data/field-conf/list', params })
}


/**
 * 获取字段配置详情
 * @param {Object} params - 查询参数
 * @param {string} params.id - 管理ID
 * @returns {Promise<any>} 字段配置详情
 * @see hhttps://app.apifox.com/link/project/6505154/apis/api-305076069
 */
export const getFieldConfigDetail = async (params: {
  'id': string
}): Promise<LabelFieldConfig> => {
  return await request.get({ url: '/data/field-conf/get', params })
}



/**
 * 基础字段列表
 * @param params
 * @param params.manageId - 管理ID
 * @returns {Promise<any>} 基础字段列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076057
 */
export const getBaseFieldList = async (params: { manageId: string }): Promise<LabelFieldConfig[]> => {
  return await request.get({ url: '/data/field-conf/list-base', params })
}

