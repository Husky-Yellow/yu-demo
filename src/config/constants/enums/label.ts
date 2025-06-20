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
  TRUE = 1, // 基础标签
  FALSE = 0 // 业务标签
}

/**
 * 标签类型选项
 */
export const TagTypeOptions = [
  { label: '基础标签', value: BooleanEnum.FALSE },
  { label: '业务标签', value: BooleanEnum.TRUE }
];

/**
 * 是否选项
 */
export const BooleanOptions = [
  { label: YesNoEnum.YES, value: BooleanEnum.TRUE },
  { label: YesNoEnum.NO, value: BooleanEnum.FALSE }
];

/**
 * 操作符选项类型
 */
export interface OperatorOption {
  label: string;
  value: string;
}

/**
 * 操作符选项
 */
export const OperatorOptions: OperatorOption[] = [
  { label: '等于', value: '=' },
  { label: '不等于', value: '!=' }
  // 可继续添加
];
