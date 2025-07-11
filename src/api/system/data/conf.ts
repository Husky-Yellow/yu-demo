import request from '@/config/axios'
import { BooleanEnum } from '@/config/constants/enums/label'

export interface FilterRuleConfig {
  /**
   * 主键ID
   * @description 过滤配置的唯一标识
   */
  id?: string
  /**
   * 字段ID
   * @description 关联的字段ID
   */
  uuid: string
  /**
   * 字段ID
   * @description 关联的字段ID
   */
  fieldId: string | null
  /**
   * 过滤类型
   */
  filterType: BooleanEnum.TRUE | BooleanEnum.FALSE
  /**
   * 数据
   * @description 过滤配置的数据
   */
  data: string | undefined
  /**
   * 连接类型
   */
  connectType: BooleanEnum.TRUE | BooleanEnum.FALSE
  /**
   * 选中的选项
   * @description 过滤配置的选中的选项
   */
  selectedOptions?: any[]
}


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