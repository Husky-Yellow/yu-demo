import { LableDatePrecisionOptions } from '@/config/constants/enums/field'

// 日期精度映射配置
const DATE_PRECISION_CONFIG = {
  '0': { type: 'year' as const, format: 'YYYY' },
  '1': { type: 'month' as const, format: 'YYYY/MM' },
  '2': { type: 'date' as const, format: 'YYYY/MM/DD' },
  '3': { type: 'datetime' as const, format: 'YYYY/MM/DD HH:00' },
  '4': { type: 'datetime' as const, format: 'YYYY/MM/DD HH:mm' },
  '5': { type: 'datetime' as const, format: 'YYYY/MM/DD HH:mm:ss' }
} as const

// 字段配置接口
interface FieldConfig {
  fieldConfExtDOList?: Array<{
    name: string
    value: string
  }>
}

/**
 * 获取字段配置值
 * @param field 字段对象
 * @param configName 配置名称
 * @returns 配置值
 */
export const getFieldConfigValue = (field: FieldConfig, configName: string): string => {
  if (!field.fieldConfExtDOList) return ''
  const config = field.fieldConfExtDOList.find(item => item.name === configName)
  return config ? config.value : ''
}

/**
 * 获取时间选择器类型
 * @param field 字段对象
 * @returns 时间选择器类型
 */
export const getTimePickerType = (field: FieldConfig): 'year' | 'month' | 'date' | 'datetime' => {
  const datePrecision = getFieldConfigValue(field, 'datePrecision')
  return DATE_PRECISION_CONFIG[datePrecision as keyof typeof DATE_PRECISION_CONFIG]?.type || 'datetime'
}

/**
 * 获取时间选择器显示格式
 * @param field 字段对象
 * @returns 时间格式字符串
 */
export const getTimePickerFormat = (field: FieldConfig): string => {
  const datePrecision = getFieldConfigValue(field, 'datePrecision')
  return DATE_PRECISION_CONFIG[datePrecision as keyof typeof DATE_PRECISION_CONFIG]?.format || 'YYYY/MM/DD HH:mm:ss'
}

/**
 * 根据日期精度值获取配置信息
 * @param precision 精度值 ('0' | '1' | '2' | '3' | '4' | '5')
 * @returns 配置对象
 */
export const getDatePrecisionConfig = (precision: string) => {
  return DATE_PRECISION_CONFIG[precision as keyof typeof DATE_PRECISION_CONFIG] || {
    type: 'datetime' as const,
    format: 'YYYY/MM/DD HH:mm:ss'
  }
}

/**
 * 获取所有可用的日期精度选项
 * @returns 日期精度选项数组
 */
export const getDatePrecisionOptions = () => {
  return LableDatePrecisionOptions
}