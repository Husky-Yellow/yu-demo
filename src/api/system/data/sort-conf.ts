import request from '@/config/axios'
import type { SortItem } from '@/config/constants/enums/fieldDefault'

/**
 * 创建排序配置 弃用
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
 * 删除排序配置列表
 * @param params
 * @param params.id - 排序配置ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteSortConfList = async (params: { id: string, manageId: string }) => {
  return await request.delete({ url: '/data/sort-conf/delete', params })
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
