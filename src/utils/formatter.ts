import { floatToFixed2 } from '@/utils'

// 格式化金额【分转元】
// @ts-ignore
export const fenToYuanFormat = (_, __, cellValue: any, ___) => {
  return `￥${floatToFixed2(cellValue)}`
}


/**
 * 标志位与配置项映射处理
 * @param {string} flag 8位标志位字符串，如 "00000000"
 * @param {string} configName 配置项名称，如 '表单配置'
 * @returns {boolean|string} 获取时返回布尔值，设置时返回新的标志位字符串
 */
export const handleConfigFlag = (flag: string, configName: string): boolean => {
  // 确保 flag 是字符串类型
  const strFlag = String(flag);

  // 配置项与位置的映射
  const configMap: { [key: string]: number } = {
    '字段配置': 0,
    '表单配置': 1,
    '详情配置': 2,
    '操作配置': 3,
    '查询配置': 4,
    '数据配置': 5,
    '排序配置': 6,
    '统计配置': 7
  };

  // 确保标志位长度为8
  const paddedFlag = strFlag.padEnd(8, '0').substring(0, 8);

  // 获取配置项对应的位置
  const position = configMap[configName];
  if (position === undefined) {
    console.error(`无效的配置项名称: ${configName}`);
    return false; // 返回默认值
  }

  return paddedFlag[position] === '1';
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