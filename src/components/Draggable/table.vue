<template>
  <div :class="[tableClass, 'sortable-table-container']">
    <el-table
      ref="tableRef"
      :data="tableData"
      border
      stripe
      :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
    >

      <!-- 拖拽手柄列 - 第一列 -->
      <el-table-column v-if="dragPosition === 'first'" label="排序" width="60" align="center">
        <template #default>
          <slot name="drag-handle">
            <div :class="dragHandleClass" @mousedown.stop @touchstart.stop>
              <el-icon><Rank /></el-icon>
            </div>
          </slot>
        </template>
      </el-table-column>

      <!-- 动态列 -->
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        :type="column.type" 
        :prop="column.prop as string"
        :label="column.label"
        :width="column.width || 'auto'"
        :align="column.align || 'left'"
      >
        <template v-if="!column.type" #default="scope">
          <component
            v-if="column.render"
            :is="column.render"
            :row="scope.row"
            :index="scope.$index"
            v-bind="column.renderProps"
          />
          <template v-else>{{ scope.row[column.prop || ''] }}</template>
        </template>
      </el-table-column>

         <!-- 拖拽手柄列 - 最后一列 -->
         <el-table-column v-if="dragPosition === 'last'" label="排序" width="60" align="center">
        <template #default>
          <slot name="drag-handle">
            <div :class="dragHandleClass" @mousedown.stop @touchstart.stop>
              <el-icon><Rank /></el-icon>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, defineProps, defineEmits } from 'vue';
import type { ElTable } from 'element-plus';
import Sortable from 'sortablejs';
import { Rank } from '@element-plus/icons-vue';

// 定义表格数据类型
type TableDataItem = Record<string, any>;

// 定义列配置类型
interface TableColumn<T = any> {
  prop?: keyof T; // 将prop限制为数据对象的属性名
  type?: string;
  label: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: Component;
  renderProps?: Record<string, any>;
}


// 完善props类型
const props = defineProps<{
  tableData: TableDataItem[];
  columns: TableColumn[];
  dragHandleClass?: string;
  tableClass?: string;
  dragPosition?: 'first' | 'last'; // 新增：控制拖拽手柄位置
}>();

// 完善emits类型
const emits = defineEmits<{
  (event: 'sort-end', oldIndex: number, newIndex: number): void;
  (event: 'row-click', row: TableDataItem): void;
}>();

// 明确ref类型
const tableRef = ref<InstanceType<typeof ElTable> | null>(null);

onMounted(() => {
  nextTick(() => {
    const tableContainer = document.querySelector(`.${props.tableClass}`);
    if (!tableContainer) return;
    
    // 修复选择器
    const tbody = tableContainer.querySelector('tbody');
    if (!tbody) {
      console.error('未找到表格 tbody');
      return;
    }

    new Sortable(tbody, {
      handle: `.${props.dragHandleClass}`,
      animation: 150,
      onEnd: (evt) => {
        emits('sort-end', evt.oldIndex, evt.newIndex);
      }
    });
  });
});
</script>

<style scoped>
.sortable-table-container {
  margin: 20px 0;
}

.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.drag-handle:active {
  cursor: grabbing;
}
</style>