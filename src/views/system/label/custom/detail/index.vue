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
            @edit="handleEdit"
            @row-click="handleRowClick"
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
          <Sort />
        </el-tab-pane>
        <el-tab-pane label="统计配置" name="Statistical">
          <StatisticConfig />
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

const activeName = ref('field')
const { query } = useRoute() // 查询参数

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 模拟数据
const tableData = ref([]);

// 初始数据备份
const initialData = [...tableData.value];

// 数据更新回调
const onDataUpdate = (newData) => {
  tableData.value = newData;
  console.log('数据已更新:', tableData.value);
};

// 重置数据
const resetData = () => {
  tableData.value = [...initialData];
  console.log('数据已重置');
};

// 编辑处理
const handleEdit = (row) => {
  console.log('编辑行:', row);
  // 这里可以打开编辑对话框
};

// 行点击处理
const handleRowClick = (row) => {
  console.log('双击行:', row);
};

const save = () => {
  console.log('保存')
}

const getDataFieldConfListByManageId = async () => {
  const res = await LabelApi.getDataFieldConfListByManageId({
    manageId: query.id as string
  })
  tableData.value = res
}


/** 初始化 **/
onMounted(() => {
  getDataFieldConfListByManageId()
})
</script>
