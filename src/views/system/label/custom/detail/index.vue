<template>
  <ContentWrap>
    <div class="h-[calc(100vh-160px)] position">
      <div  class="absolute right-36px z-2" >
        <el-button type="primary">保存</el-button>
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
          <FormDesigner />
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
          数据配置
        </el-tab-pane>
        <el-tab-pane label="排序配置" name="Sorting">
          排序配置
        </el-tab-pane>
        <el-tab-pane label="统计配置" name="Statistical">
          <Statistic />
        </el-tab-pane>
      </el-tabs>
    </div>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabelCustomDetail' })
import type { TabsPaneContext } from 'element-plus'
import Field from './../../components/Field.vue'
import Operation from './../../components/Operation.vue'
import Query from './../../components/Query.vue'
import Details from './../../components/Details.vue'
import { FormDesigner } from '@/components/FormDesigner'

const activeName = ref('field')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 模拟数据
const tableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 45, address: '广州市天河区' },
  { id: 4, name: '赵六', age: 24, address: '深圳市南山区' },
  { id: 5, name: '钱七', age: 36, address: '杭州市西湖区' },
  { id: 6, name: '孙八', age: 29, address: '南京市鼓楼区' },
  { id: 7, name: '周九', age: 41, address: '成都市武侯区' },
  { id: 8, name: '吴十', age: 33, address: '武汉市武昌区' }
]);

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
</script>
