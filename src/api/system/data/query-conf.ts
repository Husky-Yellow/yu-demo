import request from '@/config/axios'
import type { QueryResItem } from '@/config/constants/enums/fieldDefault'


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
export const deleteQueryConfList = async (params: string) => {
  return await request.delete({ url: `/data/query-conf/delete-list?${params}` })
}

