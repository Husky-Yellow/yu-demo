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