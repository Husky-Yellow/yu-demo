import { markRaw } from 'vue'
import { ElInput, ElSelect, ElDatePicker, ElUpload, ElInputNumber } from 'element-plus'
import { LabelDragField } from '@/config/constants/enums/fieldDefault'
import { FieldType, TextTypeOptions } from '@/config/constants/enums/field'
import type { TableColumnCtx } from 'element-plus'
import dayjs from 'dayjs'

/**
 * 配置项名称类型
 */
export type ConfigName = '字段配置' | '表单配置' | '详情配置' | '操作配置' | '查询配置' | '数据配置' | '排序配置' | '统计配置'

/**
 * 配置项与位置的映射
 */
const CONFIG_MAP: Readonly<Record<ConfigName, number>> = {
  字段配置: 0,
  表单配置: 1,
  详情配置: 2,
  操作配置: 3,
  查询配置: 4,
  数据配置: 5,
  排序配置: 6,
  统计配置: 7
} as const

/**
 * 字段组数据结构
 */
export interface FieldGroup {
  id: string
  name: string
  fields: Array<{
    id: string
    code: string
    name: string
    fieldType: FieldType
    [key: string]: unknown
  }>
  singleRow?: boolean
}

/**
 * 布局配置常量
 */
const LAYOUT_CONFIG = {
  FULL_WIDTH: 24, // 占满整行
  HALF_WIDTH: 12, // 占半行
  THIRD_WIDTH: 8, // 占1/3行
  QUARTER_WIDTH: 6 // 占1/4行
} as const

/**
 * 标志位与配置项映射处理
 *
 * 根据8位标志位字符串和配置项名称，返回该配置项是否启用
 *
 * @param flag - 8位标志位字符串，如 "00000000"
 * @param configName - 配置项名称
 * @returns 配置项是否启用
 *
 * @example
 * ```typescript
 * const isEnabled = handleConfigFlag('10000000', '字段配置')
 * console.log(isEnabled) // true
 * ```
 */
export const handleConfigFlag = (flag: string | number, configName: ConfigName): boolean => {
  // 确保 flag 是字符串类型
  const strFlag = String(flag)

  // 确保标志位长度为8
  const paddedFlag = strFlag.padEnd(8, '0').substring(0, 8)

  // 获取配置项对应的位置
  const position = CONFIG_MAP[configName]
  if (position === undefined) {
    console.error(`无效的配置项名称: ${configName}`)
    return false
  }

  return paddedFlag[position] === '1'
}

/**
 * 过滤和标记分组
 *
 * 根据允许的ID列表过滤字段组，并标记单行显示
 *
 * @param rawData - 原始数据数组
 * @param allowedIds - 允许的字段ID列表
 * @returns 过滤后的字段组数组
 *
 * @example
 * ```typescript
 * const filteredGroups = filterAndMarkGroups(groups, ['field1', 'field2'])
 * ```
 */
export const filterAndMarkGroups = (rawData: unknown, allowedIds: string[]): FieldGroup[] => {
  if (!Array.isArray(rawData)) {
    return []
  }

  return rawData
    .map((group: unknown) => {
      if (!group || typeof group !== 'object' || !('fields' in group)) {
        return null
      }

      const groupObj = group as { fields: unknown[] }
      const filteredFields = Array.isArray(groupObj.fields)
        ? groupObj.fields.filter((field: unknown) =>
            field && typeof field === 'object' && 'id' in field &&
            allowedIds.includes(String(field.id))
          )
        : []

      return {
        ...groupObj,
        fields: filteredFields,
        singleRow: filteredFields.length === 1
      } as FieldGroup
    })
    .filter((group): group is FieldGroup => group !== null && group.fields.length > 0)
}

/**
 * 拖拽表单获取字段组件
 *
 * 根据字段类型返回对应的 Element Plus 组件
 *
 * @param type - 字段类型
 * @returns 对应的组件
 *
 * @example
 * ```typescript
 * const component = getFieldComponent(FieldType.TEXT)
 * ```
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
 *
 * @param field - 字段对象
 * @returns 组件配置对象
 *
 * @example
 * ```typescript
 * const config = getFieldComponentType(field)
 * ```
 */
export const getFieldComponentType = (field: LabelDragField) => {
  const baseConfig = { disabled: true }

  switch (field.fieldType) {
    case FieldType.TEXT: {
      const isTextarea = field.fieldConfExtObj?.value === TextTypeOptions[1].value
      return isTextarea
        ? { ...baseConfig, type: 'textarea', rows: 2 }
        : { ...baseConfig }
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

/**
 * 获取字段占用的列数
 *
 * 根据字段组中的字段数量，计算每个字段应该占用的列数
 *
 * @param fieldGroup - 字段组对象
 * @returns 字段占用的列数
 *
 * @example
 * ```typescript
 * const span = getFieldSpan(fieldGroup)
 * ```
 */
export const getFieldSpan = (fieldGroup: FieldGroup): number => {
  // 安全获取字段数量
  const fieldCount = fieldGroup?.fields?.length || 0

  // 布局规则：
  // - 0个字段：不显示
  // - 1个字段：占满整行
  // - 2个及以上字段：每行2个字段
  switch (fieldCount) {
    case 0:
      return 0
    case 1:
      return LAYOUT_CONFIG.FULL_WIDTH
    default:
      return LAYOUT_CONFIG.HALF_WIDTH
  }
}

/**
 * 时间格式化器
 *
 * 将时间戳格式化为可读的日期时间字符串
 *
 * @param row - 表格行数据
 * @param column - 表格列配置
 * @param cellValue - 单元格值
 * @returns 格式化后的时间字符串
 *
 * @example
 * ```typescript
 * const formattedTime = dateFormatter(row, column, 1735660800000)
 * console.log(formattedTime) // "2024-12-31 00:00:00"
 * ```
 */
export const dateFormatter = (row: unknown, column: TableColumnCtx<unknown>, cellValue: unknown): string => {
  if (!cellValue) {
    return '-'
  }

  // 检查是否为时间戳
  const timestamp = typeof cellValue === 'number'
    ? cellValue
    : /^\d{13}$/.test(String(cellValue))
      ? parseInt(String(cellValue))
      : null

  if (timestamp) {
    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }

  return String(cellValue)
}