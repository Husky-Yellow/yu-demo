<template>
  <div class="operation-config-table">
    <!-- 表格 -->
    <el-table
      ref="tableRef"
      :data="tableData"
      border
      style="width: 100%"
      @sort-change="handleSortChange"
    >
      <!-- 序号 -->
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="80"
      />

      <!-- 按钮类型 -->
      <el-table-column
        label="按钮类型"
        prop="type"
        align="center"
        width="120"
      />

      <!-- 按钮名称（可编辑） -->
      <el-table-column
        label="按钮名称"
        align="center"
        width="180"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.name"
            size="small"
            @blur="handleNameBlur(scope.row)"
          />
        </template>
      </el-table-column>

      <!-- 是否显示（开关） -->
      <el-table-column
        label="是否显示"
        align="center"
        width="120"
      >
        <template #default="scope">
          <el-switch
            v-model="scope.row.visible"
            active-icon="el-icon-check"
            inactive-icon="el-icon-close"
            @change="handleVisibleChange(scope.row)"
          />
        </template>
      </el-table-column>

      <!-- 排序（拖拽手柄） -->
      <el-table-column
        label="排序"
        align="center"
        width="100"
      >
        <template #default="">
          <el-icon>
            <Rank />
          </el-icon>
        </template>
      </el-table-column>
    </el-table>

    <!-- 保存按钮 -->
    <div class="footer">
      <el-button type="primary" @click="handleSave">保存配置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Sortable from 'sortablejs'
import { ElMessage } from 'element-plus'
import type { TableColumnCtx } from 'element-plus'
import { Rank } from '@element-plus/icons-vue'

// 表格数据类型
interface OperationButton {
  id: number // 假设后端有ID
  type: string // 按钮类型：添加/编辑/删除等
  name: string // 按钮名称
  visible: boolean // 是否显示
  sort: number // 排序值
}

// 表格数据
const tableData = ref<OperationButton[]>([
  { id: 1, type: '添加', name: '添加', visible: true, sort: 1 },
  { id: 3, type: '编辑', name: '编辑', visible: true, sort: 2 },
  { id: 4, type: '删除', name: '删除', visible: true, sort: 3 },
  { id: 5, type: '导入', name: '导入', visible: true, sort: 4 },
  { id: 6, type: '导出', name: '导出', visible: true, sort: 5 }
])

// 表格引用
const tableRef = ref<any>(null)

// 初始化拖拽排序
onMounted(() => {
  nextTick(() => {
    const tbody = tableRef.value.$el.querySelector('tbody')
    if (tbody) {
      Sortable.create(tbody, {
        handle: '.drag-handle', // 拖拽手柄
        animation: 150,
        onEnd: (evt) => {
          // 拖拽结束后更新排序
          const oldIndex = evt.oldIndex
          const newIndex = evt.newIndex
          if (oldIndex !== newIndex) {
            const movedItem = tableData.value.splice(oldIndex, 1)[0]
            tableData.value.splice(newIndex, 0, movedItem)
            
            // 同步更新排序值（可选：也可在保存时统一处理）
            tableData.value.forEach((item, index) => {
              item.sort = index + 1
            })
          }
        }
      })
    }
  })
})


// 新增：排序变更处理
const handleSortChange = (sortInfo: { 
  column: TableColumnCtx<OperationButton>;
  prop: string;
  order: 'ascending' | 'descending' | null;
}) => {
  const { prop, order } = sortInfo
  
  // 如果没有排序，恢复原始顺序
  if (!order) {
    tableData.value.sort((a, b) => a.sort - b.sort)
    return
  }
  
  // 根据排序字段和方向排序
  tableData.value.sort((a, b) => {
    if (order === 'ascending') {
      return a[prop] > b[prop] ? 1 : -1
    } else {
      return a[prop] < b[prop] ? 1 : -1
    }
  })
  
  // 如果是对 sort 字段排序，更新实际排序值
  if (prop === 'sort') {
    tableData.value.forEach((item, index) => {
      item.sort = index + 1
    })
  }
}

// 按钮名称修改
const handleNameBlur = (row: OperationButton) => {
  console.log('按钮名称修改：', row)
  // 可在此调用接口更新名称
}

// 显示状态修改
const handleVisibleChange = (row: OperationButton) => {
  console.log('显示状态修改：', row)
  // 可在此调用接口更新显示状态
}

// 保存配置
const handleSave = () => {
  // 1. 整理最终提交数据
  const submitData = tableData.value.map(item => ({
    id: item.id,
    name: item.name,
    visible: item.visible,
    sort: item.sort
  }))

  // 2. 调用后端接口（示例）
  // api.saveOperationConfig(submitData).then(res => {
  //   if (res.success) {
  //     ElMessage.success('保存成功！')
  //   } else {
  //     ElMessage.error('保存失败，请重试')
  //   }
  // })

  console.log('提交给后端的数据：', submitData)
  ElMessage.success('模拟保存成功（实际需对接接口）')
}
</script>

<style scoped>
.operation-config-table {
  padding: 20px;
}

/* 拖拽手柄样式 */
.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
}

.drag-handle:active {
  cursor: grabbing;
}

.footer {
  margin-top: 20px;
  text-align: right;
}
</style>