import request from '@/config/axios'
import { OperateType, BooleanEnum } from '@/config/constants/enums/label'

/**
 * 操作配置接口
 * @description 定义系统操作按钮的配置信息
 */
export interface OperateConfig {
  /**
   * 主键ID
   * @description 操作配置的唯一标识
   */
  id: number
  /**
   * 标签管理ID
   * @description 关联的标签管理记录ID
   */
  manageId: number
  /**
   * 按钮名称
   * @description 操作按钮的显示名称
   */
  operateName: string
  /**
   * 按钮类型
   * @description 0-添加 1-编辑 2-删除 3-导入 4-导出
   */
  operateType: OperateType
  /**
   * 是否显示
   * @description 0-显示 1-不显示
   */
  showFlag: BooleanEnum
  /**
   * 排序
   * @description 按钮的显示顺序
   */
  sort: number
}


/**
 * 获取操作配置列表
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 操作配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076044
 */
export const getOperateConfigList = async (params: { manageId: string }): Promise<OperateConfig[]> => {
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

