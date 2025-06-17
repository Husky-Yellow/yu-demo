/**
 * 标签类型枚举
 */
export enum TagType {
  BASE = 0,    // 基础标签
  BUSINESS = 1 // 业务标签
}

/**
 * 标签类型选项
 */
export const TagTypeOptions = [
  { label: '基础标签', value: TagType.BASE },
  { label: '业务标签', value: TagType.BUSINESS }
];