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
export const YesNoOptions = [
  { label: YesNoEnum.YES, value: YesNoEnum.YES },
  { label: YesNoEnum.NO, value: YesNoEnum.NO }
];

/**
 * 是否布尔值选项
 */
export const BooleanOptions = [
  { label: '是', value: BooleanEnum.TRUE },
  { label: '否', value: BooleanEnum.FALSE }
];