<template>
  <ContentWrap>
    <div class="h-[calc(100vh-160px)] position">
      <div  class="absolute right-36px z-2" >
        <el-button type="primary">保存</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="字段配置" name="Field">
          字段配置
        </el-tab-pane>
        <el-tab-pane label="表单配置" name="Form">
          表单配置
        </el-tab-pane>
        <el-tab-pane label="详情配置" name="Details">
          详情配置
        </el-tab-pane>
        <el-tab-pane label="操作配置" name="Operation">
          操作配置
        </el-tab-pane>
        <el-tab-pane label="查询配置" name="Query">
          查询配置
        </el-tab-pane>
        <el-tab-pane label="数据配置" name="Data">
          数据配置
        </el-tab-pane>
        <el-tab-pane label="排序配置" name="Sorting">
          排序配置
        </el-tab-pane>
        <el-tab-pane label="统计配置" name="Statistical">
          统计配置
        </el-tab-pane>
      </el-tabs>
    </div>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabelCustomDetail' })
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('Field')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
