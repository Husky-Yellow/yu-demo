/**
 * 操作符选项类型
 */
export interface OperatorOption {
  label: string;
  value: number;
}


/**
 * 是否枚举
 */
export enum YesNoEnum {
  YES = '是',
  NO = '否'
}

/**
 * 标签类型枚举
 */
export enum BooleanEnum {
  TRUE = 1, // 基础标签   |
  FALSE = 0 // 业务标签  | 系统
}

/**
 * 标签类型选项
 */
export const TagTypeOptions: { label: string; value: BooleanEnum }[] = [
  { label: '基础标签', value: BooleanEnum.FALSE },
  { label: '业务标签', value: BooleanEnum.TRUE }
];

/**
 * 是否选项
 */
export const BooleanOptions: { label: string; value: BooleanEnum }[] = [
  { label: YesNoEnum.YES, value: BooleanEnum.TRUE },
  { label: YesNoEnum.NO, value: BooleanEnum.FALSE }
];


/**
 * 操作符选项
 */
export const OperatorOptions: OperatorOption[] = [
  { label: '等于', value: BooleanEnum.TRUE },
  { label: '不等于', value: BooleanEnum.FALSE }
];


/**
 * 操作类型枚举
 * @description 定义系统支持的操作按钮类型
 */
export enum OperateType {
  /** 添加操作 */
  ADD = 0,
  /** 编辑操作 */
  EDIT = 1,
  /** 删除操作 */
  DELETE = 2,
  /** 导入操作 */
  IMPORT = 3,
  /** 导出操作 */
  EXPORT = 4
}

/**
 * 业务类型枚举
 * @description 定义系统支持的业务类型
 */
export enum BusinessType {
  /** 系统 */
  SYSTEM = 0,
  /** 基础 */
  BASIC = 1,
  /** 业务 */
  BUSINESS = 2,
}

/**
 * 业务类型标签映射
 */
export const BusinessTypeLabel: Record<BusinessType, string> = {
  [BusinessType.SYSTEM]: '系统',
  [BusinessType.BASIC]: '基础',
  [BusinessType.BUSINESS]: '业务',
};

/**
 * 业务类型选项
 */
export const BusinessTypeOptions: { label: string; value: BusinessType }[] = [
  { label: '系统', value: BusinessType.SYSTEM },
  { label: '基础', value: BusinessType.BASIC },
  { label: '业务', value: BusinessType.BUSINESS },
];

/**
 * 表单类型枚举
 */
export enum ViewFormType {
  EDIT = 0,    // 编辑
  CREATE = 1,  // 新增
  DETAIL = 2,  // 详情
}