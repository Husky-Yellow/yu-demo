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
          <Form />
        </el-tab-pane>
        <el-tab-pane label="详情配置" name="details">
          <Details />
        </el-tab-pane>
        <el-tab-pane label="操作配置" name="operation">
          <Operation />
        </el-tab-pane>
        <el-tab-pane label="查询配置" name="query">
          <Query />
        </el-tab-pane>
        <el-tab-pane label="数据配置" name="Data">
          <Filter />
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
import Field from './../../components/Field.vue'
import Form from './../../components/Form.vue'
import Operation from './../../components/Operation.vue'
import Query from './../../components/Query.vue'
import Sort from './../../components/Sort.vue'
import Filter from './../../components/Filter.vue'
import Details from './../../components/Details.vue'
import StatisticConfig from './../../components/StatisticConfig.vue'
import { generateUUID } from '@/utils'


const { query } = useRoute() // 查询参数


const activeName = ref('field')
// 模拟数据
const tableData = ref([]);
const fieldRef = ref(null);
const statisticRef = ref(null);
const sortRef = ref(null);

// 数据更新回调
const onDataUpdate = (newData) => {
  tableData.value = newData;
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const save = () => {
  switch (activeName.value) {
    case 'field':
      (fieldRef.value as any).saveTableData()
      break;
    case 'Form':
      break;
    case 'details':
      break;
    case 'operation':
      break;
    case 'query':
      break;
    case 'Data':
      break;
    case 'Sorting':
      (sortRef.value as any).submitForm()
      break;
    case 'Statistical':
      (statisticRef.value as any).submitForm()
      break;
  }
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
