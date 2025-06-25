import request from '@/config/axios'
import type { LabelFieldConfig, OperateConfig, QueryResItem, SortItem, StatisticItem, FilterRuleConfig } from '@/config/constants/enums/fieldDefault'

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
export const getFieldConfigListByManageId = async (params: { manageId: string }): Promise<LabelFieldConfig[]> => {
  return await request.get({ url: '/data/field-conf/list-by-manage-id', params })
}

/**
 * 删除过滤配置列表
 * @param params
 * @param params.ids - 过滤配置ID列表
 * @returns {Promise<any>} 删除结果
 */
export const deleteFilterConfList = async (params: { id: string }) => {
  return await request.delete({ url: '/data/conf/delete', params })
}

/**
 * 更新过滤配置列表
 * @param data
 * @param data.manageId - 管理ID
 * @param data.filterJson - 过滤配置
 * @returns {Promise<any>} 更新结果
 */
export const updateFilterConfList = async (data: FilterRuleConfig[]) => {
  return await request.put({ url: '/data/conf/update-list', data })
}

/**
 * 获取过滤配置列表
 * @param params
 * @param params.manageId - 管理ID
 * @returns {Promise<any>} 过滤配置列表
 */
export const getFilterConfList = async (params: { manageId: string }): Promise<FilterRuleConfig[]> => {
  return await request.get({ url: '/data/conf/list', params })
}

/**
 * 根据管理ID获取统计配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 统计配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-313182051
 */
export const getCountConfigListByManageId = async (params: { manageId: string }): Promise<LabelFieldConfig[]> => {
  return await request.get({ url: '/data/count-conf/list-fieId', params })
}

/**
 * 获取统计配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 统计配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-313182051
 */
export const getCountConfigList = async (params: { manageId: string }): Promise<StatisticItem[]> => {
  return await request.get({ url: '/data/count-conf/list', params })
}

/**
 * 更新统计配置列表
 * @param {any} data - 统计配置数据列表
 * @returns {Promise<any>} 更新结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-313182051
 */
export const updateCountConfigList = async (data: StatisticItem[]) => {
  return await request.put({ url: '/data/count-conf/update-list', data })
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
  return await request.put({ url: '/data/operate-conf/update-list', data })
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
 * 获取表单配置
 * @param params
 * @param params.id - 表单ID
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076041
 */
export const getViewFormConf = async (params: { id: string, manageId: string, formType: number }) => {
  return await request.get({ url: '/data/view-form-conf/get', params })
}

/**
 * 更新表单配置
 * @param params
 * @param params.id - 表单ID
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型
 * @param params.formJson - 表单配置
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076040
 */
export const updateViewFormConf = async (data: { id: string, manageId: string, formType: number, formJson: string }) => {
  return await request.put({ url: '/data/view-form-conf/update', data })
}

/**
 * 创建表单配置
 * @param params
 * @param params.manageId - 管理ID
 * @param params.formType - 表单类型
 * @param params.formJson - 表单配置
 * @returns {Promise<any>} 表单配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076039
 */
export const createViewFormConf = async (data: { manageId: string, formType: number, formJson: string }) => {
  return await request.post({ url: '/data/view-form-conf/create', data })
}


/**
 * 创建排序配置
 * @param data
 * @param data.manageId - 管理ID
 * @param data.sortJson - 排序配置
 * @returns {Promise<any>} 排序配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076038
 */
export const createSortConf = async (data: { manageId: string, sortJson: string }) => {
  return await request.post({ url: '/data/sort-conf/create', data })
}

/**
 * 获取排序配置
 * @param data
 * @param data.manageId - 管理ID
 * @returns {Promise<any>} 排序配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076037
 */
export const getSortConfList = async (params: { manageId: string }): Promise<SortItem[]> => {
  return await request.get({ url: '/data/sort-conf/list', params })
}

/**
 * 更新排序配置
 * @param data
 * @param data.manageId - 管理ID
 * @param data.sortJson - 排序配置
 * @returns {Promise<any>} 排序配置
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076036
 */
export const updateSortConfList = async (data: SortItem[]) => {
  return await request.put({ url: '/data/sort-conf/update-list', data })
}

/**
 * 获取查询配置列表
 * @param data
 * @param data.manageId - 管理ID
 * @returns {Promise<any>} 查询配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076035
 */
export const getQueryConfList = async (params: { manageId: string }): Promise<QueryResItem[]> => {
  return await request.get({ url: '/data/query-conf/list', params })
}


/**
 * 更新查询配置列表
 * @param data
 * @param data.manageId - 管理ID
 * @param data.queryJson - 查询配置
 * @returns {Promise<any>} 更新结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076034
 */
export const updateQueryConfList = async (data: QueryResItem[]) => {
  return await request.put({ url: '/data/query-conf/update-list', data })
}


/**
 * 删除查询配置列表
 * @param data
 * @param data.manageId - 管理ID
 * @param data.queryJson - 查询配置
 * @returns {Promise<any>} 删除结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076059
 */
export const deleteQueryConfList = async (params: { ids: string[] }) => {
  return await request.delete({ url: '/data/query-conf/delete-list', params })
}