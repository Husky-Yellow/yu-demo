// 字段标签类型;1-文本 2-数字 3-单选 4-多选 5-日期 6-日期区间 7-地址选择 8-区域 9-标签 10-附件
export enum FieldType {
  TEXT = '1',
  NUMBER = '2',
  RADIO = '3',
  CHECKBOX = '4',
  DATE = '5',
  DATE_RANGE = '6',
  ADDRESS = '7',
  REGION = '8',
  TAG = '9',
  ATTACHMENT = '10',
}

export const FieldTypeLabel: Record<FieldType, string> = {
  [FieldType.TEXT]: '文本',
  [FieldType.NUMBER]: '数字',
  [FieldType.RADIO]: '单选',
  [FieldType.CHECKBOX]: '多选',
  [FieldType.DATE]: '日期',
  [FieldType.DATE_RANGE]: '日期区间',
  [FieldType.ADDRESS]: '地址选择',
  [FieldType.REGION]: '区域',
  [FieldType.TAG]: '标签',
  [FieldType.ATTACHMENT]: '附件',
};


// 文本类型
export const TextTypeOptions = [
  { label: '单行文本', value: 'single' },
  { label: '多行文本', value: 'multi' }
] as const;
export type TextType = typeof TextTypeOptions[number]['value'];

// 查重校验
export const DuplicateCheckOptions = [
  { label: '校验', value: 'check' },
  { label: '不校验', value: 'noCheck' }
] as const;
export type DuplicateCheck = typeof DuplicateCheckOptions[number]['value'];

// 数据校验
export const DataValidationOptions = [
  { label: '不校验', value: 'none' },
  { label: '自定义正则代码', value: 'custom' },
  { label: '身份证校验', value: 'idCard' },
  { label: '统一社会信用代码校验', value: 'creditCode' },
  { label: '手机号校验', value: 'mobile' },
  { label: '电话号码校验', value: 'phone' }
] as const;
export type DataValidation = typeof DataValidationOptions[number]['value'];

// 数字类型
export const NumberTypeOptions = [
  { label: '整数', value: 'integer' },
  { label: '小数', value: 'decimal' }
] as const;
export type NumberType = typeof NumberTypeOptions[number]['value'];

// 日期精度
export const DatePrecisionOptions = [
  { label: '年', value: 'year' },
  { label: '月', value: 'month' },
  { label: '日', value: 'date' },
  { label: '时', value: 'hour' },
  { label: '分', value: 'minute' },
  { label: '秒', value: 'second' }
] as const;
export type DatePrecision = typeof DatePrecisionOptions[number]['value'];

// 加密方式
export const EncFlagOptions = [
  { label: '全文加密', value: 0 },
  { label: '证件号码加密', value: 1 },
  { label: '手机号码加密', value: 2 }
] as const;
export type EncFlag = typeof EncFlagOptions[number]['value'];

export const DecimalPlacesOptions = [
  { label: '0', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
] as const;
export type DecimalPlaces = typeof DecimalPlacesOptions[number]['value'];