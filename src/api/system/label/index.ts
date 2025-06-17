import request from '@/config/axios'

/**
 *
 * 获得标签管理分页
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076048
 */
export const getDataLabelManagePage = async (params: PageParam) => {
  return await request.get({ url: '/data/label-manage/page', params })
}


/**
 *
 * 获得标签配置
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getDataLabelConfList = async (params: PageParam) => {
  return await request.get({ url: '/data/label-conf/list', params })
}


/**
 *
 * 更新标签管理
 *
 * @param data
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076046
 * @returns
 */
export const putLabelManageUpdate = async (data: any) => {
  return await request.put({ url: '/data/label-manage/update', data })
}

/**
 *
 * 创建标签管理
 *
 * @param data
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076045
 * @returns
 */
export const postLabelManageCreate = async (data: any) => {
  return await request.post({ url: '/data/label-manage/create', data })
}



/**
 *
 * 获得标签配置
 *
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076064
 */
export const getDataFieldConfListByManageId = async (params: any) => {
  return await request.get({ url: '/data/field-conf/list-by-manage-id', params })
}
