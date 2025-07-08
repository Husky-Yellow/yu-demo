<template>
  <ContentWrap>
    <!-- 统计卡片 -->
    <StatisticCards :config="countConfigDate" />
  </ContentWrap>
  <ContentWrap>
    <!-- 查询 -->
    <SearchForm :fields="queryConfig" @search="onSearch" :operateConfigList="operateConfigList" :selectedRows="selectedRows" />
  </ContentWrap>
  <ContentWrap>
    <!-- 表格区 -->
    <DataTable
      :loading="loading"
      :columns="columns"
      :data="tableData"
      row-key="id"
    >
      <template #actions="{ row }">
        <el-button link type="primary" @click="onAction('view', row)">查看详情</el-button>
      </template>
    </DataTable>

    <!-- 分页 -->
    <Pagination
      v-model:limit="queryParams.pageSize"
      v-model:page="queryParams.pageNo"
      :total="total"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import * as BusinessDataApi from '@/api/system/business-data'
import StatisticCards from './components/StatisticCards.vue'
import SearchForm from './components/SearchForm.vue'
import DataTable from './components/DataTable.vue'
import { LabelFieldConfig, QueryResItem } from '@/config/constants/enums/fieldDefault'
import { OperateTypeEnum } from '@/utils/constants'
import { ExhibitionOperate } from '@/config/constants/enums/exhibition'

defineOptions({ name: 'ExhibitionList' })

const route = useRoute()
const router = useRouter()

const countConfigDate = ref<any[]>([]) // 统计数据
const operateConfigList = ref<ExhibitionOperate[]>([]) // 搜索表单操作列表
const queryConfig = ref<QueryResItem[]>([]) // 搜索表单，
const tableData = ref<any[]>([]) // 表格数据
const columns = ref<LabelFieldConfig[]>([]) // 表格列配置
const selectedRows = ref<any[]>([]) // 表格选中行 用于删除


const formModel = reactive<{ [key: string]: any }>({}) // 搜索表单数据
const loading = ref(true) // 列表的加载中
const queryParams = reactive<BusinessDataApi.BusinessDataListRequest>({
  pageNo: 1,
  pageSize: 10,
  manageId: '',
  searchList: []
})
const total = ref(0) // 列表的总页数

/**
 * 数据转换函数（增强版）
 * @param filterData 过滤数据对象
 * @param metadataList 元数据列表
 * @param separator 字段分隔符，默认为逗号
 * @returns 转换后的 searchList 数组
 */
 function transformToSearchList(
  filterData: Record<string, string>,
  metadataList: Array<{
    fieldCodes: string;
    queryType: number;
  }>,
  separator: string = ','
): Array<{ code: string; type: number; value: string }> {
  return metadataList.flatMap(item => {
    // 检查 filterData 中是否存在该字段
    if (!(item.fieldCodes in filterData)) {
      return [];
    }

    const fieldValues = filterData[item.fieldCodes].trim() || '';
    const codes = item.fieldCodes.split(separator).map(code => code.trim());

    // 处理字段拆分
    if (codes.length === 1) {
      return [{
        code: codes[0],
        type: item.queryType,
        value: fieldValues
      }];
    }

    // 拆分值（处理空值情况）
    const values = fieldValues.split(separator)
      .map(val => val.trim())
      .filter(val => val !== ''); // 过滤空字符串

    // 生成结果（值不足时重复使用最后一个值）
    return codes.map((code, index) => ({
      code,
      type: item.queryType,
      value: values[index] || (values[values.length - 1] || '')
    }));
  });
}


function onSearch(params: any) {
  // 这里可以根据params进行过滤或请求， 要处理数据
  console.log('搜索参数', params, queryConfig.value)
  const searchList = transformToSearchList(params, queryConfig.value as any).filter(item => item.value)
  console.log('searchList', searchList)
  queryParams.searchList = searchList
  getList()
}

function onAction(action: string, row: any) {
  // 这里处理表格操作
  console.log('操作', action, row)
  router.push({
    path: '/basic/people/detail',
    query: {
      id: row.id
    }
  })
}

const getList = async () => {
  loading.value = true
  try {
    tableData.value = []
    const data = await BusinessDataApi.getBusinessDataPage({
      ...queryParams,
    })
    tableData.value = data.list as any[]
    // console.log('getBusinessDataPage', data)
  } finally {
    loading.value = false
  }
}

async function fetchFieldConfig(manageId: string) {
  try {
    return await LabelApi.getFieldConfigList({ manageId })
  } catch (e) {
    console.error('字段配置获取失败', e)
    return []
  }
}

async function fetchQueryConf(manageId: string) {
  try {
    const queryConfList = await LabelApi.getQueryConfList({ manageId })

    // 预构建字段映射和批量处理
    const fieldMap = new Map<string, LabelFieldConfig>()
    const validColumns = columns.value.filter(field => field.id)

    // 一次性构建映射，避免重复遍历
    for (const field of validColumns) {
      fieldMap.set(field.id!, field)
    }

    // 批量处理查询配置
    const processedQueryList = queryConfList.map((field) => {
      const processedField = { ...field } as any

      // 处理字段匹配 - 使用Set提高查找效率
      if (field.fieldIds) {
        const idSet = new Set(field.fieldIds.split(',').filter(Boolean))
        const matchedFields: LabelFieldConfig[] = []

        // 直接遍历Map的entries，避免重复查找
        for (const [id, config] of fieldMap) {
          if (idSet.has(id)) {
            matchedFields.push(config)
          }
        }

        if (matchedFields.length > 0) {
          processedField.fieldNames = matchedFields.map(f => f.name).join(',')
          processedField.fieldName = matchedFields[0].name
          processedField.fieldId = matchedFields[0].id
        }
      }

      // 设置默认值
      if (field.fieldCodes) {
        formModel[field.fieldCodes] = field.defaultValue
      }

      return processedField
    })

    queryConfig.value = processedQueryList
  } catch (e) {
    console.error('查询配置获取失败', e)
    return []
  }
}

const getCountConfigList = async (manageId) => {
  const countConfigList = await LabelApi.getCountConfigList({ manageId })

  // console.log('获取统计配置列表', countConfigList)
  const countData = [{ name: '牡蛎', value: 651 }]

  const countDataMap = new Map(countData.map((item) => [item.name, item.value]))

  countConfigDate.value = countConfigList.map((item) => ({
    ...item,
    name: item.name || '',
    value: countDataMap.get(item.name) ?? 0
  }))
}

const getDataFieldConfListByManageId = async (manageId: string) => {
  const res = await LabelApi.getOperateConfigList({ manageId })
  operateConfigList.value = res.filter((item) => item.showFlag === 1).map((item) => ({
    ...item,
    type: OperateTypeEnum[item.operateType]
  })) as unknown as ExhibitionOperate[]
}

const init = async () => {
  const manageId = (route.meta.manageId as string) || '1938148839818596353'
  // const manageId = '1938148839818596353'
  queryParams.manageId = manageId
  // 获取字段配置
  const res = await fetchFieldConfig(manageId)
  columns.value = res.filter((item: LabelFieldConfig) => item.pcViewFlag === 1)

  await fetchQueryConf(manageId)

  // 获取配置数据
  await getCountConfigList(manageId)
  await getDataFieldConfListByManageId(manageId)
  await getList()


}

onMounted(async () => {
  await init()
})
</script>

<style scoped lang="scss"></style>
