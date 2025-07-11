import request from '@/config/axios'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'


export type QueryResItem = {
  id?: string
  manageId: string
  field?: LabelFieldConfig[] // 临时存储
  fieldCodes?: string // 字段编码  提交的时候逗号隔开
  fieldIds?: string // 字段id  提交的时候逗号隔开
  queryType: number // 查询类型 0-搜索 1-单选 2-多选 3-日期区间 4-日期
  defaultValue: any // 默认值
  hint: string // 提示文字
  sort: number // 排序
}

export type QueryTableRow = LabelFieldConfig & QueryResItem

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

