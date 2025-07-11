import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { handleTree2 } from '@/utils/tree'
import * as LabelApi from '@/api/system/label'
import type { BooleanEnum } from '@/config/constants/enums/label'

// 类型定义
export interface LabelItem {
  id: number
  num: string
  name: string
  type: BooleanEnum
  flag: string
  children?: LabelItem[]
}

export interface QueryParams {
  pageNo: number
  pageSize: number
  name?: string
  status?: string
  labelId?: string
}

/**
 * 标签管理组合式函数
 * @param initialLabelId 初始标签ID
 * @returns 标签管理相关的状态和方法
 */
export const useLabelManagement = (initialLabelId?: string) => {
  const { push } = useRouter()
  const { query } = useRoute()

  const loading = ref(false)
  const list = ref<LabelItem[]>([])
  const total = ref(0)
  const isExpandAll = ref(true)

  const queryParams = reactive<QueryParams>({
    pageNo: 1,
    pageSize: 100,
    name: undefined,
    status: undefined,
    labelId: initialLabelId || (query.lableId as string)
  })

  const queryFormRef = ref()

  /**
   * 获取标签列表
   */
  const getList = async () => {
    loading.value = true
    try {
      const { list: listData, total: totalCount } = await LabelApi.getLabelManagePage(queryParams)
      list.value = handleTree2(listData)
      total.value = totalCount
    } catch (error) {
      console.error('获取标签列表失败:', error)
      ElMessage.error('获取标签列表失败，请稍后重试')
    } finally {
      loading.value = false
    }
  }

  /**
   * 搜索处理
   */
  const handleQuery = () => {
    queryParams.pageNo = 1
    getList()
  }

  /**
   * 重置搜索
   */
  const resetQuery = () => {
    queryParams.pageNo = 1
    queryFormRef.value?.resetFields()
    handleQuery()
  }

  /**
   * 打开详情页面
   */
  const openDetail = (id: number, rootId: number) => {
    push(`/system/label/customDetail?lableId=${query.lableId}&type=${query.type}&manageId=${id}&rootId=${rootId}`)
  }

  return {
    loading,
    list,
    total,
    isExpandAll,
    queryParams,
    queryFormRef,
    getList,
    handleQuery,
    resetQuery,
    openDetail
  }
}