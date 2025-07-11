import type { FileSize } from './field'
import type { FieldType } from '@/config/constants/enums/field'
import { BooleanEnum, OperateType, BusinessType } from '@/config/constants/enums/label'
import * as QueryConfApi from '@/api/system/data/query-conf'

/**
 * 文本字段默认配置
 * @description 文本类型字段的默认配置参数
 */
export const defaultTextFieldForm = {
  /** 文本类型 */
  textType: '0',
  /** 重复检查 */
  duplicateCheck: '0',
  /** 数据验证 */
  dataValidation: '0',
  /** 正则表达式 */
  regex: '',
  /** 提示信息 */
  prompt: ''
}

/**
 * 数字字段默认配置
 * @description 数字类型字段的默认配置参数
 */
export const defaultNumberFieldForm = {
  /** 数字类型 */
  numberType: '0',
  /** 重复检查 */
  duplicateCheck: '0',
  /** 小数位数 */
  decimalPlaces: '0'
}

/**
 * 日期精度字段默认配置
 * @description 日期精度字段的默认配置参数
 */
export const defaultDatePrecisionForm = {
  /** 日期精度 */
  datePrecision: '0',
  /** Code2 */
  code2: ''
}

/**
 * 附件字段默认配置
 * @description 附件类型字段的默认配置参数
 */
export const defaultUploadFieldForm = {
  /** 最大尺寸 */
  sizeLimit: 1 as FileSize,
  /** 最大数量 */
  countLimit: 1 as number,
  /** 允许的文件类型 */
  allowedTypes: 'jpeg,bmp,jpg,png,pdf' as string,
}

/**
 * 字段扩展配置默认值
 * @description 用于表单回显的字段扩展配置默认值
 */
export const defaultFieldConfExt = {
  ...defaultTextFieldForm,
  ...defaultNumberFieldForm,
  ...defaultDatePrecisionForm,
  ...defaultUploadFieldForm
}
/** 文本字段表单类型 */
export type TextFieldForm = typeof defaultTextFieldForm
/** 数字字段表单类型 */
export type NumberFieldForm = typeof defaultNumberFieldForm
/** 附件字段表单类型 */
export type UploadFieldForm = typeof defaultUploadFieldForm
/** 日期精度字段表单类型 */
export type DatePrecisionForm = typeof defaultDatePrecisionForm
/** 字段扩展配置类型 */
export type FieldConfExt = typeof defaultFieldConfExt

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
 * 操作类型文字映射
 */
export const OperateTypeText: Record<OperateType, string> = {
  [OperateType.ADD]: '添加',
  [OperateType.EDIT]: '编辑',
  [OperateType.DELETE]: '删除',
  [OperateType.IMPORT]: '导入',
  [OperateType.EXPORT]: '导出'
}


export type LabelDragField = LabelFieldConfig & {
  label: string
  id: string
  fieldConfExtObj: {
    options?: any[],
    value?: any,
    name?: string
  }
  type: 'placeholder' | 'field'  // 占位符 字段 ？？？ 我忘了什么意思了
  linkage: {
    enabled: boolean
    targetFieldId: string | null
    targetFieldValue: any | null
    effect: 'show' | 'hide'
    condition: 'equals' | 'not_equals'
  }
}
