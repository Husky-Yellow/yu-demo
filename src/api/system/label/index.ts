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