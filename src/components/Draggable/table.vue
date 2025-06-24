<template>
  <div :class="[tableClass, 'sortable-table-container']">
    <el-table
      ref="tableRef"
      :data="tableData"
      border
      stripe
      :header-cell-style="headerCellStyle"
      @row-click="handleRowClick"
    >
      <!-- 拖拽手柄列 - 第一列 -->
      <el-table-column
        v-if="dragPosition === 'first'"
        label="排序"
        width="60"
        align="center"
        fixed="left"
      >
        <template #default>
          <slot name="drag-handle">
            <div
              :class="dragHandleClass"
              @mousedown.stop
              @touchstart.stop
              title="拖拽排序"
            >
              <el-icon><Rank /></el-icon>
            </div>
          </slot>
        </template>
      </el-table-column>

      <!-- 动态列 -->
      <el-table-column
        v-for="(column, columnIndex) in columns"
        :key="getColumnKey(column, columnIndex)"
        :type="column.type"
        :prop="column.prop as string"
        :label="column.label"
        :width="column.width || 'auto'"
        :align="column.align || 'left'"
        :min-width="column.minWidth"
        :show-overflow-tooltip="column.showOverflowTooltip !== false"
      >
        <template v-if="!column.type" #default="scope">
          <component
            v-if="column.render"
            :is="column.render"
            :row="scope.row"
            :index="scope.$index"
            v-bind="column.renderProps || {}"
          />
          <template v-else>
            {{ getCellValue(scope.row, column.prop) }}
          </template>
        </template>
      </el-table-column>

      <!-- 拖拽手柄列 - 最后一列 -->
      <el-table-column
        v-if="dragPosition === 'last'"
        label="排序"
        width="60"
        align="center"
        fixed="right"
      >
        <template #default>
          <slot name="drag-handle">
            <div
              :class="dragHandleClass"
              @mousedown.stop
              @touchstart.stop
              title="拖拽排序"
            >
              <el-icon><Rank /></el-icon>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { ElTable } from 'element-plus';
import Sortable from 'sortablejs';
import { Rank } from '@element-plus/icons-vue';

// 定义表格数据类型
export type TableDataItem = Record<string, any>;

// 定义列配置类型
export interface TableColumn<T = any> {
  prop?: keyof T;
  type?: 'index' | 'selection' | 'expand';
  label: string;
  width?: string | number;
  minWidth?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: Component;
  renderProps?: Record<string, any>;
  showOverflowTooltip?: boolean;
  sortable?: boolean;
  fixed?: boolean | 'left' | 'right';
}

// Props 类型定义
interface Props {
  tableData: TableDataItem[];
  columns: TableColumn[];
  dragHandleClass?: string;
  tableClass?: string;
  dragPosition?: 'first' | 'last';
  headerCellStyle?: Record<string, any>;
  rowKey?: string | ((row: TableDataItem) => string);
}

// Emits 类型定义
interface Emits {
  (event: 'sort-end', oldIndex: number, newIndex: number): void;
  (event: 'row-click', row: TableDataItem, column: any, evt: Event): void;
  (event: 'sort-start', evt: Sortable.SortableEvent): void;
  (event: 'sort-move', evt: Sortable.SortableEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  dragHandleClass: 'drag-handle',
  tableClass: 'sortable-table',
  dragPosition: 'last',
  headerCellStyle: () => ({ background: '#f5f7fa', color: '#606266' }),
  showOverflowTooltip: true
});

const emits = defineEmits<Emits>();

// Refs
const tableRef = ref<InstanceType<typeof ElTable> | null>(null);
let sortableInstance: Sortable | null = null;

// Computed
const headerCellStyle = computed(() => props.headerCellStyle);

// Methods
const getColumnKey = (column: TableColumn, index: number): string => {
  return column.prop ? String(column.prop) : `column-${index}`;
};

const getCellValue = (row: TableDataItem, prop?: string | number | symbol): any => {
  if (!prop) return '';

  const propStr = String(prop);
  // 支持嵌套属性访问，如 'user.name'
  return propStr.split('.').reduce((obj, key) => obj?.[key], row) ?? '';
};

const handleRowClick = (row: TableDataItem, column: any, evt: Event) => {
  emits('row-click', row, column, evt);
};

const initSortable = () => {
  if (!props.tableClass) return;

  const tableContainer = document.querySelector(`.${props.tableClass}`);
  if (!tableContainer) {
    console.warn(`未找到表格容器: .${props.tableClass}`);
    return;
  }

  const tbody = tableContainer.querySelector('tbody');
  if (!tbody) {
    console.warn('未找到表格 tbody');
    return;
  }

  // 销毁之前的实例
  if (sortableInstance) {
    sortableInstance.destroy();
  }

  sortableInstance = new Sortable(tbody, {
    handle: `.${props.dragHandleClass}`,
    animation: 150,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    onStart: (evt) => {
      emits('sort-start', evt);
    },
    onMove: (evt) => {
      emits('sort-move', evt);
    },
    onEnd: (evt) => {
      emits('sort-end', evt.oldIndex, evt.newIndex);
    }
  });
};

// Lifecycle
onMounted(() => {
  nextTick(() => {
    initSortable();
  });
});

onUnmounted(() => {
  if (sortableInstance) {
    sortableInstance.destroy();
    sortableInstance = null;
  }
});

// Expose methods
defineExpose({
  tableRef,
  initSortable,
  destroySortable: () => {
    if (sortableInstance) {
      sortableInstance.destroy();
      sortableInstance = null;
    }
  }
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
  transition: color 0.2s ease;
}

.drag-handle:hover {
  color: #66b1ff;
}

.drag-handle:active {
  cursor: grabbing;
  color: #337ecc;
}

/* Sortable 拖拽样式 */
:deep(.sortable-ghost) {
  background-color: #f5f7fa !important;
  opacity: 0.6;
}

:deep(.sortable-chosen) {
  background-color: #e6f7ff !important;
}

:deep(.sortable-drag) {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>