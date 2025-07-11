import request from '@/config/axios'
import type { FilterRuleConfig } from '@/config/constants/enums/fieldDefault'

/**
 * 删除过滤配置列表
 * @param params
 * @param params.ids - 过滤配置ID列表
 * @returns {Promise<any>} 删除结果
 */
export const deleteFilterConfList = async (params: { id: string, manageId: string }) => {
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