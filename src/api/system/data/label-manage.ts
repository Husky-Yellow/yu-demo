import request from '@/config/axios'
import type { FieldType } from '@/config/constants/enums/field'
import { BooleanEnum, BusinessType } from '@/config/constants/enums/label'
import type { FieldConfExt } from '@/config/constants/enums/fieldDefault'

/**
 * 标签字段配置接口
 * @description 定义标签字段的完整配置信息
 */
export interface LabelFieldConfig {
  /** 字段UUID，前端临时处理 */
  uuid?: string
  /** 字段ID */
  id?: string
  /** 管理ID */
  manageId: string
  /**
   * 字段编码
   * @description 字段的唯一标识符
   */
  code: string
  /**
   * 字段名称
   * @description 字段的显示名称
   */
  name: string
  /**
   * 备注信息
   * @description 字段的详细说明
   */
  remark: string
  /**
   * 字段类型
   * @description 字段标签类型：1-文本 2-数字 3-单选 4-多选 5-日期 6-日期区间 7-地址选择 8-区域 9-标签 10-附件
   */
  fieldType: FieldType
  /**
   * 字段业务类型
   * @description 0-系统 1-基础
   */
  bizType: BusinessType
  /**
   * 字段长度
   * @description 字段的最大长度限制
   */
  length?: number
  /**
   * 是否加密
   * @description 0-否 1-是
   */
  encFlag: BooleanEnum
  /**
   * 加密类型
   * @description 0-全文加密 1-证件号码加密 2-手机号码加密
   */
  encType: BooleanEnum
  /**
   * 是否新增表单
   * @description 0-否 1-是
   */
  addFlag: BooleanEnum
  /**
   * 是否编辑表单
   * @description 0-否 1-是
   */
  editFlag: BooleanEnum
  /**
   * 移动端是否可见
   * @description 0-否 1-是
   */
  appViewFlag: BooleanEnum
  /**
   * PC端是否可见
   * @description 0-否 1-是
   */
  pcViewFlag: BooleanEnum
  /**
   * 字段配置详情列表
   * @description 字段的扩展配置信息
   */
  fieldConfExtDOList: FieldConfExt & { optionsJson: any[], value: never, name: string }[]
  /**
   * 父级字段编码
   * @description 当单选、多选时、额外的对象是有这个值
   */
  parentCode: string
}


/**
 * 获取标签管理分页数据
 * @param {PageParam} params - 分页查询参数
 * @returns {Promise<PageResult<any>>} 标签管理分页数据
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076048
 */
export const getLabelManagePage = async (params: PageParam) => {
  return await request.get({ url: '/data/label-manage/page', params })
}

/**
 * 获取标签管理树形数据
 * @param {Object} params - 查询参数
 * @param {string} params.manageId - 管理ID
 * @returns {Promise<any>} 标签管理树形数据
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076048
 */
export const getLabelManageTree = async (params?: { labelId?: string }) => {
  return await request.get({ url: '/data/label-manage/tree', params })
}

/**
 * 更新标签管理信息
 * @param {any} data - 标签管理更新数据
 * @returns {Promise<any>} 更新结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076046
 */
export const updateLabelManage = async (data: LabelFieldConfig[]) => {
  return await request.put({ url: '/data/label-manage/update', data })
}

/**
 * 创建标签管理信息
 * @param {any} data - 标签管理创建数据
 * @returns {Promise<any>} 创建结果
 * @see https://app.apifox.com/link/project/6505154/apis/api-305076045
 */
export const createLabelManage = async (data: LabelFieldConfig[]) => {
  return await request.post({ url: '/data/label-manage/create', data })
}

/**
 * 获得标签管理
 * @param params
 * @param params.id - 管理ID
 * @returns {Promise<LabelFieldConfig>} 标签管理
 * @see https://app.apifox.com/link/project/6505154/apis/api-320477387
 */
export const getLabelManage = async (params: { id: string }): Promise<LabelFieldConfig> => {
  return await request.get({ url: '/data/label-manage/get', params })
}