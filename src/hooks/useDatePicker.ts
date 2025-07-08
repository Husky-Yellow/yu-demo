import { getTimePickerType, getTimePickerFormat, getFieldConfigValue, getDatePrecisionConfig, getDatePrecisionOptions } from '@/utils/datePicker'

// 字段配置接口
interface FieldConfig {
  fieldConfExtDOList?: Array<{
    name: string
    value: string
  }>
}

/**
 * 日期选择器相关的 composable
 */
export const useDatePicker = () => {
  /**
   * 获取时间选择器类型
   */
  const getPickerType = (field: FieldConfig) => getTimePickerType(field)

  /**
   * 获取时间选择器显示格式
   */
  const getPickerFormat = (field: FieldConfig) => getTimePickerFormat(field)

  /**
   * 获取字段配置值
   */
  const getConfigValue = (field: FieldConfig, configName: string) => getFieldConfigValue(field, configName)

  /**
   * 根据日期精度值获取配置信息
   */
  const getPrecisionConfig = (precision: string) => getDatePrecisionConfig(precision)

  /**
   * 获取所有可用的日期精度选项
   */
  const getPrecisionOptions = () => getDatePrecisionOptions()

  return {
    getPickerType,
    getPickerFormat,
    getConfigValue,
    getPrecisionConfig,
    getPrecisionOptions
  }
}