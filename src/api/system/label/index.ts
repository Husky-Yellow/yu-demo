import request from '@/config/axios'

/**
 * 获取标签配置列表
 * @param {PageParam} params - 分页查询参数
 * @returns {Promise<PageResult<any>>} 标签配置列表
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getLabelConfigList = async (params: PageParam) => {
  return await request.get({ url: '/data/label-conf/list', params })
}
