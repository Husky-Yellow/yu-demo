<template>
  <ContentWrap>
    <div class="h-[calc(100vh-160px)] position">
      <div  class="absolute right-36px z-2" >
        <el-button type="primary" @click="save">保存</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="字段配置" name="field">
          <Field
            :data="tableData"
            @update:data="onDataUpdate"
            ref="fieldRef"
          />
        </el-tab-pane>
        <el-tab-pane label="表单配置" name="Form">
          <!-- 还得再调 -->
          <Form />
        </el-tab-pane>
        <el-tab-pane label="详情配置" name="details">
          <!-- 还得再调 -->
          <Details />
        </el-tab-pane>
        <el-tab-pane label="操作配置" name="operation">
          <Operation ref="operationRef" />
        </el-tab-pane>
        <el-tab-pane label="查询配置" name="query">
          <!-- 没写完啊 -->
          <Query ref="queryRef" />
        </el-tab-pane>
        <el-tab-pane label="数据配置" name="Data">
          <Filter ref="filterRef" />
        </el-tab-pane>
        <el-tab-pane label="排序配置" name="Sorting">
          <Sort ref="sortRef" />
        </el-tab-pane>
        <el-tab-pane label="统计配置" name="Statistical">
          <StatisticConfig ref="statisticRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabelCustomDetail' })
import type { TabsPaneContext } from 'element-plus'
import * as LabelApi from '@/api/system/label'
import Field from '../../components/field/Field.vue'
import Form from '../../components/common/Form.vue'
import Operation from '../../components/common/Operation.vue'
import Query from '../../components/query/Query.vue'
import Filter from '../../components/filter/Filter.vue'
import Sort from '../../components/sort/Sort.vue'
import Details from '../../components/common/Details.vue'
import StatisticConfig from '../../components/statistic/StatisticConfig.vue'
import { generateUUID } from '@/utils'


const { query } = useRoute() // 查询参数


const activeName = ref('field')
// 模拟数据
const tableData = ref([]);
const fieldRef = ref(null);
const statisticRef = ref(null);
const sortRef = ref(null);
const filterRef = ref(null);
const queryRef = ref(null);
const operationRef = ref(null);

// tab name 到 ref 和方法名的映射
const tabActionMap: Record<string, { ref: any, method: string }> = {
  field:        { ref: fieldRef,      method: 'saveTableData' },
  operation:    { ref: operationRef,  method: 'submitForm' },
  query:        { ref: queryRef,      method: 'submitForm' },
  Data:         { ref: filterRef,     method: 'submitForm' },
  Sorting:      { ref: sortRef,       method: 'submitForm' },
  Statistical:  { ref: statisticRef,  method: 'submitForm' }
}

function handleTabAction() {
  const action = tabActionMap[activeName.value]
  if (action && action.ref.value && typeof action.ref.value[action.method] === 'function') {
    action.ref.value[action.method]()
  }
}

// 数据更新回调
const onDataUpdate = (newData) => {
  tableData.value = newData;
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const save = () => {
  handleTabAction()
}

const getDataFieldConfListByManageId = async () => {
  const res = await LabelApi.getFieldConfigList({
    manageId: query.id as string
  })
  tableData.value = res.map(item => {
    return {
      ...item,
      uuid: item.id ? item.id : generateUUID()
    }
  })
}


/** 初始化 **/
onMounted(() => {
  getDataFieldConfListByManageId()
})
</script>
