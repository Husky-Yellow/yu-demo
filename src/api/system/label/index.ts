import request from '@/config/axios'
import type { OperateConfig, FilterRuleConfig } from '@/config/constants/enums/fieldDefault'



export interface LabelItem {
  /**
   * 节点ID
   */
  id: string;

  /**
   * 标签ID
   */
  labelId: string;

  /**
   * 父节点ID，0表示根节点
   */
  parentId: number;

  /**
   * 根节点ID，null表示当前节点就是根节点
   */
  rootId: string | null;

  /**
   * 链路信息
   */
  linkMsg: string | null;

  /**
   * 编号/代码
   */
  num: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 类型
   * 0 - 基础标签
   * 1 - 业务标签
   */
  type: 0 | 1;

  /**
   * 标记位
   * 8位二进制字符串表示各种状态标记
   */
  flag: string;

  /**
   * 创建时间（时间戳，毫秒）
   */
  createTime: number;

  /**
   * 子节点列表
   */
  children: LabelItem[] | null;
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

