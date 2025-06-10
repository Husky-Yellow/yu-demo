import request from '@/config/axios'

export type DictDataVO = {
  id: number | undefined
  sort: number | undefined
  status: number
  remark: string
  createTime: Date,
  /** 字典类型（如：ai_generate_mode） */
  dictType: string;
  /** 字典值（如："1"） */
  value: string;
  /** 字典标签（如："歌词模式"） */
  label: string;
  /** 颜色类型（预留字段，可选） */
  colorType?: string;
  /** CSS 类名（预留字段，可选） */
  cssClass?: string;
}

/**
 * 获取字典数据列表（简化版）
 * 
 * @description 用于获取系统字典数据，返回包含字典类型、值、标签等信息的数组
 * @returns {Promise<DictDataVO[]>} 包含字典数据的 Promise 对象
 */
export const getSimpleDictDataList = () => {
  return request.get<DictDataVO[]>({ 
    url: '/system/dict-data/simple-list' 
  });
};

// 查询字典数据列表
export const getDictDataPage = (params: PageParam) => {
  return request.get({ url: '/system/dict-data/page', params })
}

// 查询字典数据详情
export const getDictData = (id: number) => {
  return request.get({ url: '/system/dict-data/get?id=' + id })
}

// 新增字典数据
export const createDictData = (data: DictDataVO) => {
  return request.post({ url: '/system/dict-data/create', data })
}

// 修改字典数据
export const updateDictData = (data: DictDataVO) => {
  return request.put({ url: '/system/dict-data/update', data })
}

// 删除字典数据
export const deleteDictData = (id: number) => {
  return request.delete({ url: '/system/dict-data/delete?id=' + id })
}

// 导出字典类型数据
export const exportDictData = (params) => {
  return request.download({ url: '/system/dict-data/export', params })
}
