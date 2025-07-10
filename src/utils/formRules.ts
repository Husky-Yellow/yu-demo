import type { FormItemRule } from 'element-plus'

/**
 * 表单验证规则类型定义
 */
export interface ValidationRule extends FormItemRule {
  required?: boolean
  message?: string
  trigger?: 'blur' | 'change' | 'submit'
  validator?: (rule: any, value: any, callback: (error?: Error) => void) => void
}

/**
 * 正则表达式映射类型
 */
export interface ValidatePatternMap {
  readonly [key: string]: RegExp
  uscc: RegExp
  phone: RegExp
  email: RegExp
  idCard: RegExp
  number: RegExp
  decimal: RegExp
  integer: RegExp
  positiveInteger: RegExp
  telephone: RegExp
}

/**
 * 数字类型对应的正则表达式映射
 */
export interface ValidatePatternMapNumber {
  readonly [key: number]: RegExp
}

/**
 * 字段配置表单规则类型
 */
export interface FieldConfigFormRules {
  readonly [key: string]: ValidationRule[]
}

/**
 * 必填项验证规则
 */
export const required: ValidationRule = {
  required: true,
  message: '该项为必填项'
}

/**
 * 正则校验规则映射
 */
export const validatePatternMap: ValidatePatternMap = {
  uscc: /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/, // 统一社会信用代码
  phone: /^1[3-9]\d{9}$/, // 手机号
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // 邮箱
  idCard: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/, // 身份证
  number: /^[0-9]*$/, // 数字
  decimal: /^[0-9]*\.?[0-9]*$/, // 小数
  integer: /^[0-9]*$/, // 整数
  positiveInteger: /^[1-9]\d*$/, // 正整数
  telephone: /^(0\d{2,3})-?([2-9]\d{6,7})(-\d{1,5})?$/ // 电话号码(带区号)
}

/**
 * 数字类型对应的正则表达式映射
 */
export const validatePatternMapNumber: ValidatePatternMapNumber = {
  3: validatePatternMap.idCard, // 身份证
  4: validatePatternMap.uscc, // 统一社会信用代码
  5: validatePatternMap.phone, // 手机号
  6: validatePatternMap.telephone // 电话号码
}

/**
 * 文本类型校验规则
 */
export const TextFieldConfigFormRules: FieldConfigFormRules = {
  textType: [{ required: true, message: '请选择文本类型', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }],
  dataValidation: [{ required: true, message: '请选择数据校验', trigger: 'change' }]
}

/**
 * 数字类型校验规则
 */
export const NumberFieldConfigFormRules: FieldConfigFormRules = {
  numberType: [{ required: true, message: '请选择数字类型', trigger: 'change' }],
  decimalPlaces: [{ required: true, message: '请选择小数位数', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }]
}

/**
 * 统一社会信用代码校验权重数组
 */
const USCC_WEIGHTS: readonly number[] = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28] as const

/**
 * 统一社会信用代码字符集
 */
const USCC_CHARS: string = '0123456789ABCDEFGHJKLMNPQRTUWXY'

/**
 * 校验统一社会信用代码
 *
 * @param code - 待校验的统一社会信用代码
 * @returns 是否有效
 *
 * @example
 * ```typescript
 * const isValid = validateUSCC('91110000100000000X')
 * console.log(isValid) // true
 * ```
 */
export const validateUSCC = (code: string): boolean => {
  // 输入检查
  if (typeof code !== 'string' || code.length !== 18) {
    return false
  }

  // 正则校验基础格式
  const regex = validatePatternMap.uscc
  if (!regex.test(code)) {
    return false
  }

  // 校验位计算
  let total = 0

  for (let i = 0; i < 17; i++) {
    const c = code[i]
    const value = USCC_CHARS.indexOf(c)
    if (value === -1) {
      return false // 理论上正则已保证不会进入这里
    }
    total += value * USCC_WEIGHTS[i]
  }

  const checkCode = 31 - (total % 31)
  const checkChar = checkCode === 31 ? '0' : USCC_CHARS[checkCode]
  return code[17] === checkChar
}

/**
 * 创建必填验证规则
 *
 * @param fieldName - 字段名称
 * @returns 必填验证规则
 *
 * @example
 * ```typescript
 * const nameRule = createRequiredRule('姓名')
 * // { required: true, message: '请输入姓名', trigger: 'blur' }
 * ```
 */
export const createRequiredRule = (fieldName: string, required: boolean, trigger: 'blur' | 'change' | 'submit' = 'blur'): ValidationRule => ({
  required,
  message: `请输入${fieldName}`,
  trigger
})

/**
 * 正则验证规则参数接口
 */
export interface RegexRuleParams {
  regex: string
  prompt: string
  required: boolean
}

/**
 * 创建正则验证规则
 *
 * @param regex - 正则表达式字符串
 * @param prompt - 验证失败时的提示信息
 * @param required - 是否必填
 * @returns 正则验证规则
 *
 * @example
 * ```typescript
 * const phoneRule = createRegexRule('^1[3-9]\\d{9}$', '请输入正确的手机号', true)
 * ```
 */
export const createRegexRule = (regex: string, prompt: string, required: boolean): ValidationRule => ({
  validator: (_rule: unknown, value: string, callback: (error?: Error) => void) => {
    if (!value) {
      return callback()
    }

    try {
      if (!new RegExp(regex).test(value)) {
        return callback(new Error(prompt))
      }
      callback()
    } catch {
      callback(new Error('正则表达式有误'))
    }
  },
  trigger: 'blur',
  required
})
