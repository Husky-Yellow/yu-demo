import { markRaw } from 'vue'
import { ElInput, ElSelect, ElDatePicker, ElUpload, ElInputNumber } from 'element-plus'
import { LabelDragField } from '@/config/constants/enums/fieldDefault'
import { FieldType, TextTypeOptions } from '@/config/constants/enums/field'

/**
 * 标志位与配置项映射处理
 * @param {string} flag 8位标志位字符串，如 "00000000"
 * @param {string} configName 配置项名称，如 '表单配置'
 * @returns {boolean|string} 获取时返回布尔值，设置时返回新的标志位字符串
 */
export const handleConfigFlag = (flag: string, configName: string): boolean => {
  // 确保 flag 是字符串类型
  const strFlag = String(flag)

  // 配置项与位置的映射
  const configMap: { [key: string]: number } = {
    字段配置: 0,
    表单配置: 1,
    详情配置: 2,
    操作配置: 3,
    查询配置: 4,
    数据配置: 5,
    排序配置: 6,
    统计配置: 7
  }

  // 确保标志位长度为8
  const paddedFlag = strFlag.padEnd(8, '0').substring(0, 8)

  // 获取配置项对应的位置
  const position = configMap[configName]
  if (position === undefined) {
    console.error(`无效的配置项名称: ${configName}`)
    return false // 返回默认值
  }

  return paddedFlag[position] === '1'
}

/**
 * 过滤和标记分组
 * @param rawData 原始数据
 * @param allowedIds 允许的ID列表
 * @returns 过滤后的数据
 */
export const filterAndMarkGroups = (rawData: any, allowedIds: string[]) => {
  if (!Array.isArray(rawData)) return rawData
  return rawData
    .map((group: any) => {
      const filteredFields = Array.isArray(group.fields)
        ? group.fields.filter((field: any) => allowedIds.includes(field.id))
        : []
      return {
        ...group,
        fields: filteredFields,
        singleRow: filteredFields.length === 1
      }
    })
    .filter((group: any) => group.fields.length > 0)
}

/**
 * 拖拽表单 获取字段组件
 * @param type 字段类型
 * @returns 字段组件
 */
export const getFieldComponent = (type: FieldType) => {
  switch (type) {
    case FieldType.TEXT:
      return markRaw(ElInput)
    case FieldType.NUMBER:
      return markRaw(ElInputNumber)
    case FieldType.RADIO:
    case FieldType.CHECKBOX:
      return markRaw(ElSelect)
    case FieldType.DATE:
    case FieldType.DATE_RANGE:
      return markRaw(ElDatePicker)
    case FieldType.ATTACHMENT:
      return markRaw(ElUpload)
    default:
      return markRaw(ElInput)
  }
}

/**
 * 根据字段类型返回表单组件配置
 * @param field - 字段对象
 */
export const getFieldComponentType = (field: LabelDragField) => {
  const baseConfig = { disabled: true }
  switch (field.fieldType) {
    case FieldType.TEXT: {
      const isTextarea = field.fieldConfExtObj?.value === TextTypeOptions[1].value
      return isTextarea ? { ...baseConfig, type: 'textarea', rows: 2 } : { ...baseConfig }
    }
    case FieldType.DATE_RANGE:
      return {
        ...baseConfig,
        type: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    case FieldType.ATTACHMENT:
      return {
        ...baseConfig,
        'list-type': 'picture-card',
        accept: 'image/*',
        limit: 1,
        multiple: false,
        drag: true,
        showFileList: false,
        action: '/mock-upload',
        style: 'width: 100%'
      }
    default:
      return { ...baseConfig }
  }
}
