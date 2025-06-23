import type { TextType, DuplicateCheck, DataValidation, NumberType } from './field'

export const defaultTextFieldForm = {
  textType: 'single' as TextType,
  duplicateCheck: 'check' as DuplicateCheck,
  dataValidation: 'none' as DataValidation,
  regex: '',
  prompt: ''
}

export const defaultNumberFieldForm = {
  numberType: 'integer' as NumberType,
  duplicateCheck: 'noCheck' as DuplicateCheck,
  decimalPlaces: 0
}


// 全部的默认值了，用于表单回显
export const defaultFieldConfExt = {
  textType: 'single' as TextType,
  duplicateCheck: 'noCheck',
  dataValidation: 'none',
  numberType: 'integer',
  datePrecision: 'date',
  code2: '',
  maxSize: 0,
  maxCount: 0,
  formatSearch: '',
  selectedDictCode: '',
  regex: '',
  prompt: ''
}

export type TextFieldForm = typeof defaultTextFieldForm
export type NumberFieldForm = typeof defaultNumberFieldForm