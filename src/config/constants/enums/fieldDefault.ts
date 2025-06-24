import type { TextType, DuplicateCheck, DataValidation, NumberType } from './field'
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

/** 文本字段表单类型 */
export type TextFieldForm = typeof defaultTextFieldForm

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

/** 数字字段表单类型 */
export type NumberFieldForm = typeof defaultNumberFieldForm

/**
 * 字段扩展配置默认值
 * @description 用于表单回显的字段扩展配置默认值
 */
export const defaultFieldConfExt = {
  /** 文本类型 */
  textType: 'single' as TextType,
  /** 重复检查 */
  duplicateCheck: 'noCheck' as DuplicateCheck,
  /** 数据验证 */
  dataValidation: 'none' as DataValidation,
  /** 数字类型 */
  numberType: 'integer' as NumberType,
  /** 日期精度 */
  datePrecision: 'date',
  /** 编码2 */
  code2: '',
  /** 最大尺寸 */
  maxSize: 0,
  /** 最大数量 */
  maxCount: 0,
  /** 格式化搜索 */
  formatSearch: '',
  /** 选中的字典编码 */
  selectedDictCode: '',
  /** 正则表达式 */
  regex: '',
  /** 提示信息 */
  prompt: ''
}

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
  id?: number
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
  fieldConfExtDOList: FieldConfExt[]
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
export const OperateTypeText = {
  [OperateType.ADD]: '添加',
  [OperateType.EDIT]: '编辑',
  [OperateType.DELETE]: '删除',
  [OperateType.IMPORT]: '导入',
  [OperateType.EXPORT]: '导出'
} satisfies Record<OperateType, string>