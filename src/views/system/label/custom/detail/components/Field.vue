<template>
  <div class="sortable-table-container">
    <el-table
      ref="tableRef"
      :data="tableData"
      stripe
      @row-dblclick="handleRowClick">
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-icon><Rank /></el-icon>
        </template>
      </el-table-column>
      
      <el-table-column prop="name" label="Code" />
      <el-table-column prop="name" label="字段名称" />
      <el-table-column prop="name" label="字段说明" />
      <el-table-column prop="name" label="字段类型" />
      <el-table-column prop="name" label="字段长度" />
      <el-table-column prop="name" label="是否加密" />
      <el-table-column prop="name" label="新增表单" />
      <el-table-column prop="name" label="编辑表单" />
      <el-table-column prop="name" label="移动端列表" />
      <el-table-column prop="name" label="管理端列表" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </div>
</template>

<script setup>
import Sortable from 'sortablejs';
import { Rank } from '@element-plus/icons-vue'
// Rank

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const emits = defineEmits(['update:data', 'edit', 'row-click']);

const tableRef = ref(null);
const sortable = ref(null);
const tableData = ref([...props.data]);

// 更新父组件数据
const updateParentData = () => {
  emits('update:data', [...tableData.value]);
};

// 初始化 Sortable
const initSortable = () => {
  nextTick(() => {
    const tableEl = tableRef.value.$el.querySelector('.el-table__body-wrapper tbody');
    
    if (tableEl && !sortable.value) {
      sortable.value = new Sortable(tableEl, {
        animation: 150,
        handle: '.el-table__row',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        
        // 开始拖拽
        onStart: () => {
          console.log('开始拖拽');
        },
        
        // 结束拖拽
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            // 调整表格数据顺序
            const item = tableData.value.splice(oldIndex, 1)[0];
            tableData.value.splice(newIndex, 0, item);
            updateParentData();
          }
        }
      });
    }
  });
};

// 生命周期钩子
onMounted(() => {
  initSortable();
});

onBeforeUnmount(() => {
  // 销毁 Sortable 实例
  if (sortable.value) {
    sortable.value.destroy();
    sortable.value = null;
  }
});

// 监听数据变化
watch(() => props.data, (newVal) => {
  tableData.value = [...newVal];
  // 如果表格已渲染，重新初始化 Sortable
  if (tableRef.value) {
    initSortable();
  }
}, { deep: true });

// 事件处理
const handleEdit = (row) => {
  emits('edit', row);
};

const handleRowClick = (row) => {
  emits('row-click', row);
};
</script>

<style scoped>
.sortable-table-container {
  margin: 20px;
}

/* 拖拽时的样式 */
.sortable-ghost {
  background-color: #f5f7fa;
  opacity: 0.6;
}

.sortable-chosen {
  background-color: #e6f7ff;
}

.sortable-drag {
  cursor: move;
}
</style>    