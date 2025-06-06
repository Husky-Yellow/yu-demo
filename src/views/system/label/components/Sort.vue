<template>
  <div class="sort-config-container">
    <!-- 左侧选择排序字段区域 -->
    <div class="left-panel">
      <h3>选择排序字段</h3>
      <div class="field-list" ref="leftFieldList">
        <div
          v-for="(field, index) in sortFields"
          :key="field.value + index"
          class="field-item"
          draggable="true"
          @dragstart="handleDragStart(field)"
          @dragend="handleDragEnd"
        >
          {{ field.label }}
          <div class="drag-handle" @mousedown.stop @touchstart.stop>
            <el-icon><Rank /></el-icon>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="primary" @click="addSelectedFields">添加</el-button>
        <el-button type="danger" @click="deleteSelectedFields">删除</el-button>
      </div>
    </div>

    <!-- 右侧排序设置区域 -->
    <div class="right-panel">
      <div class="config-header">
        <h3>排序设置</h3>
        <div class="btn-group">
          <el-button type="success" @click="addNewSortItem">添加</el-button>
          <el-button type="danger" @click="deleteSelectedSortItems">删除</el-button>
        </div>
      </div>
      <div class="sort-item-list" ref="sortItemList">
        <div
          v-for="(item, index) in sortItems"
          :key="item.id"
          class="sort-item"
          :style="{ border: item.active ? '1px dashed #409eff' : '1px solid #ebeef5' }"
          @click="handleItemClick(item, index)"
        >
          <div class="sort-item-header">
            <span>排序顺位{{ index + 1 }}</span>
          </div>
          <el-radio-group v-model="item.sortSelect">
            <el-radio label="dataAddTime">数据添加时间</el-radio>
            <el-radio label="dataModifyTime">数据修改时间</el-radio>
            <el-radio label="customSort">自定义排序</el-radio>
          </el-radio-group>
          <el-select
            v-model="item.sortRule"
            placeholder="请选择排序规则"
            size="small"
          >
            <el-option label="升序" value="asc"/>
            <el-option label="降序" value="desc"/>
          </el-select>
          <div class="drag-handle" @mousedown.stop @touchstart.stop>
            <el-icon><Rank /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Sortable from 'sortablejs';
import { ElButton, ElRadioGroup, ElRadio, ElSelect, ElOption, ElIcon } from 'element-plus';
import { Rank } from '@element-plus/icons-vue'

interface SortField {
  label: string;
  value: string;
}

interface SortItem {
  id: string;
  sortSelect: string; // dataAddTime/dataModifyTime/customSort
  sortRule: string; // asc/desc
  active: boolean;
}

const sortFields = ref<SortField[]>([
  { label: '证件类型', value: 'certType' },
  { label: '证件号码', value: 'certNo' },
  { label: '姓名', value: 'name' },
  { label: '区域', value: 'region' },
  { label: '人员等级', value: 'level' },
  { label: '数据添加时间', value: 'dataAddTime' },
  { label: '数据修改时间', value: 'dataModifyTime' },
  { label: '数据添加人', value: 'dataAdder' },
  { label: '数据修改人', value: 'dataModifier' }
]);

const sortItems = ref<SortItem[]>([
  {
    id: '1',
    sortSelect: 'dataAddTime',
    sortRule: 'asc',
    active: false
  }
]);

const leftFieldList = ref<any>(null);
const sortItemList = ref<any>(null);
let draggedField: SortField | null = null;

onMounted(() => {
  initLeftSortable();
  initRightSortable();
});

// 初始化左侧字段列表的拖拽（调整左侧字段顺序，可选功能）
const initLeftSortable = () => {
  nextTick(() => {
    const el = leftFieldList.value;
    if (el) {
      new Sortable(el, {
        handle: '.drag-handle',
        animation: 150
      });
    }
  });
};

// 初始化右侧排序项的拖拽
const initRightSortable = () => {
  nextTick(() => {
    const el = sortItemList.value;
    if (el) {
      new Sortable(el, {
        handle: '.drag-handle',
        animation: 150,
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            const item = sortItems.value.splice(oldIndex, 1)[0];
            sortItems.value.splice(newIndex, 0, item);
          }
        }
      });
    }
  });
};

// 左侧字段拖拽开始
const handleDragStart = (field: SortField) => {
  draggedField = field;
  (event as DragEvent).dataTransfer?.setData('text/plain', field.value);
  setTimeout(() => {
    const fieldItem = document.querySelector(`[data-value="${field.value}"]`);
    fieldItem?.classList.add('dragging');
  }, 0);
};

// 左侧字段拖拽结束
const handleDragEnd = () => {
  draggedField = null;
  const fieldItems = document.querySelectorAll('.field-item');
  fieldItems.forEach(item => item.classList.remove('dragging'));
};

// 添加选中字段到排序项（简单示例，可完善逻辑将拖拽的字段关联到右侧）
const addSelectedFields = () => {
  if (draggedField) {
    const isExist = draggedField?.value === undefined ? false : sortItems.value.some(item => item.sortSelect === draggedField.value);
    if (!isExist) {
      const newItem: SortItem = {
        id: Date.now().toString(),
        sortSelect: draggedField.value,
        sortRule: 'asc',
        active: false
      };
      sortItems.value.push(newItem);
      nextTick(() => {
        initRightSortable();
      });
    }
  }
};

// 删除选中字段（简单示例，可完善逻辑从左侧移除对应字段等）
const deleteSelectedFields = () => {
  console.log('执行删除选中字段逻辑');
  // 实际可结合选中状态等进行字段删除操作
};

// 添加新的排序项
const addNewSortItem = () => {
  const newItem: SortItem = {
    id: Date.now().toString(),
    sortSelect: 'dataAddTime',
    sortRule: 'asc',
    active: false
  };
  sortItems.value.push(newItem);
  nextTick(() => {
    initRightSortable();
  });
};

// 删除选中的排序项
const deleteSelectedSortItems = () => {
  const activeItems = sortItems.value.filter(item => item.active);
  activeItems.forEach(item => {
    const index = sortItems.value.indexOf(item);
    if (index > -1) {
      sortItems.value.splice(index, 1);
    }
  });
  nextTick(() => {
    initRightSortable();
  });
};

// 点击排序项
const handleItemClick = (item: SortItem, index: number) => {
  sortItems.value.forEach(i => (i.active = false));
  item.active = true;
};
</script>

<style scoped>
.sort-config-container {
  display: flex;
  height: calc(100vh - 60px);
}

.left-panel {
  width: 250px;
  border-right: 1px solid #ebeef5;
  padding: 10px;
}

.right-panel {
  flex: 1;
  padding: 10px;
}

.config-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.field-list,
.sort-item-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field-item,
.sort-item {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.field-item:hover,
.sort-item:hover {
  background-color: #fafafa;
}

.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
}

.drag-handle:active {
  cursor: grabbing;
}

.btn-group {
  margin-top: 10px;
}

.dragging {
  opacity: 0.5;
  transform: scale(0.98);
}
</style>