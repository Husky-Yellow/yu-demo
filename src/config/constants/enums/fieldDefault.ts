import type { FileSize, TextType, DuplicateCheck, DataValidation, NumberType, LableDatePrecision } from './field'
import type { FieldType } from '@/config/constants/enums/field'
import { BooleanEnum, OperateType } from '@/config/constants/enums/label'

/**
 * 文本字段默认配置
 * @description 文本类型字段的默认配置参数
 */
export const defaultTextFieldForm = {
  /** 文本类型 */
  textType: 'single' as TextType,
  /** 重复检查 */
  duplicateCheck: 'check' as DuplicateCheck,
  /** 数据验证 */
  dataValidation: 'none' as DataValidation,
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
  numberType: 'integer' as NumberType,
  /** 重复检查 */
  duplicateCheck: 'noCheck' as DuplicateCheck,
  /** 小数位数 */
  decimalPlaces: 0
}

/**
 * 日期精度字段默认配置
 * @description 日期精度字段的默认配置参数
 */
export const defaultDatePrecisionForm = {
  /** 日期精度 */
  datePrecision: 'date' as LableDatePrecision,
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
  bizType: BooleanEnum
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


export type SortItem = {
  id?: string
  uuid: string
  type: 0 | 1 | 2
  rule: BooleanEnum
  field?: LabelFieldConfig | null
  fieldId?: string
  sort?: number
  manageId: string
}


export interface StatisticField extends Partial<LabelFieldConfig> {
  filterType?: number;
  data?: string;
}
/** 单个统计项的定义 */
export interface StatisticItem {
  id?: string
  uuid: string
  name: string
  fieldId?: string
  type?: FieldType;
  data?: string;
  bizType?: BooleanEnum;
  filterType?: number;
  fields:StatisticField[] // 推荐
}

export interface FilterRuleConfig {
  id?: string
  uuid: string
  fieldId: string | null
  filterType: BooleanEnum.TRUE | BooleanEnum.FALSE
  data: string | undefined
  connectType: BooleanEnum.TRUE | BooleanEnum.FALSE
}
