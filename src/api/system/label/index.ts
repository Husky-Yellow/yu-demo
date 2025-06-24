import request from '@/config/axios'
import type { LabelFieldConfig, OperateConfig } from '@/config/constants/enums/fieldDefault'


/**
 * 获取标签管理分页数据
 * @param {PageParam} params - 分页查询参数
 * @returns {Promise<PageResult<any>>} 标签管理分页数据
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076048
 */
export const getLabelManagePage = async (params: PageParam) => {
  return await request.get({ url: '/data/label-manage/page', params })
}

/**
 * 更新标签管理信息
 * @param {any} data - 标签管理更新数据
 * @returns {Promise<any>} 更新结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076046
 */
export const updateLabelManage = async (data: LabelFieldConfig[]) => {
  return await request.put({ url: '/data/label-manage/update', data })
}

/**
 * 创建标签管理信息
 * @param {any} data - 标签管理创建数据
 * @returns {Promise<any>} 创建结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076045
 */
export const createLabelManage = async (data: LabelFieldConfig[]) => {
  return await request.post({ url: '/data/label-manage/create', data })
}

/**
 * 获取标签配置列表
 * @param {PageParam} params - 分页查询参数
 * @returns {Promise<PageResult<any>>} 标签配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getLabelConfigList = async (params: PageParam) => {
  return await request.get({ url: '/data/label-conf/list', params })
}

/**
 * 根据管理ID获取字段配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 字段配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getFieldConfigListByManageId = async (params: { manageId: string }) => {
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
 * @param {PageParam} params - 分页查询参数
 * @returns {Promise<PageResult<any>>} 标签配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getFieldConfigList = async (params: { manageId: string }) => {
  return await request.get({ url: '/data/field-conf/list', params })
}

/**
 * 获取操作配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 操作配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076044
 */
export const getOperateConfigList = async (params: { manageId: string }) => {
  return await request.get({ url: '/data/operate-conf/list', params })
}

/**
 * 更新操作配置列表
 * @param {any} data - 操作配置数据列表
 * @returns {Promise<any>} 更新结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076043
 */
export const updateOperateConfigList = async (data: OperateConfig[]) => {
  return await request.put({ url: '/data/operate-conf/update', data })
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
