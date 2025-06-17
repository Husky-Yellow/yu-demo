export enum FieldType {
  TEXT = 'text',
  NUMBER = 'number',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  DATE_RANGE = 'dateRange',
  ADDRESS = 'address',
  REGION = 'region',
  TAG = 'tag',
  ATTACHMENT = 'attachment',
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