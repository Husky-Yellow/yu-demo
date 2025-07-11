import request from '@/config/axios'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import type { StatisticItem } from '@/config/constants/enums/fieldDefault'


/**
 * 根据管理ID获取统计配置列表 未使用
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
 * 删除统计配置列表
 * @param data
 * @param data.id - 统计配置ID
 * @returns {Promise<any>} 删除结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076058
 */
export const deleteCountConfigList = async (params: { id: string, manageId: string }) => {
  return await request.delete({ url: '/data/count-conf/delete', params })
}
