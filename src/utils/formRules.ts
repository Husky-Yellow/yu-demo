// 必填项
export const required = {
  required: true,
  message: '该项为必填项'
}

// 正则校验规则
export const validatePatternMap = {
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

export const validatePatternMapNumber = {
  3: validatePatternMap.idCard, // 身份证
  4: validatePatternMap.uscc, // 统一社会信用代码
  5: validatePatternMap.phone, // 手机号
  6: validatePatternMap.telephone // 电话号码
}

// 文本类型校验规则
export const TextFieldConfigFormRules = {
   textType: [{ required: true, message: '请选择文本类型', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }],
  dataValidation: [{ required: true, message: '请选择数据校验', trigger: 'change' }],
}
// 数字类型校验规则
export const NumberFieldConfigFormRules = {
  numberType: [{ required: true, message: '请选择数字类型', trigger: 'change' }],
  decimalPlaces: [{ required: true, message: '请选择小数位数', trigger: 'change' }],
  duplicateCheck: [{ required: true, message: '请选择是否进行查重校验', trigger: 'change' }],
}

/**
 * 校验统一社会信用代码
 * @param code 待校验的统一社会信用代码
 * @returns 是否有效
 */
export const validateUSCC = (code: string): boolean => {
  debugger
  console.log(code)
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
  const weights: number[] = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
  const chars: string = '0123456789ABCDEFGHJKLMNPQRTUWXY'
  let total: number = 0

  for (let i = 0; i < 17; i++) {
    const c: string = code[i]
    const value: number = chars.indexOf(c)
    if (value === -1) {
      return false // 理论上正则已保证不会进入这里
    }
    total += value * weights[i]
  }

  const checkCode: number = 31 - (total % 31)
  const checkChar: string = checkCode === 31 ? '0' : chars[checkCode]
  return code[17] === checkChar
}
