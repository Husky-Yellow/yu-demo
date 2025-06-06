<template>
  <div class="drag-config-container">
    <!-- 左侧数据字段列表 -->
    <div class="left-panel">
      <h3>数据字段</h3>
      <div class="field-list" ref="leftList">
        <div
          v-for="item in leftListData"
          :key="item.id"
          class="field-item"
          draggable="true"
          @dragstart="handleDragStart(item)"
          @dragend="handleDragEnd"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <!-- 右侧详情配置区 -->
    <div class="right-panel">
      <div class="right-header">
        <h3>详情配置</h3>
        <el-button type="text" @click="oneKeyLayout">一键布局</el-button>
      </div>
      <div class="config-list" ref="rightConfigList">
        <div
          v-for="(item, index) in rightConfigData"
          :key="item.id"
          class="config-item"
          :style="{ border: item.active ? '1px dashed #409eff' : '1px solid #ebeef5' }"
          @click="handleItemClick(item, index)"
        >
        <div class="drag-handle" @mousedown.stop @touchstart.stop>
          <el-icon><Rank /></el-icon>
        </div>
          <span>{{ item.label }}：</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Sortable from 'sortablejs';
import { ElButton, ElIcon } from 'element-plus';
import { Rank } from '@element-plus/icons-vue'

interface FieldItem {
  id: string;
  label: string;
}

interface ConfigItem {
  id: string;
  label: string;
  active: boolean;
}

// 左侧列表数据
const leftListData = ref<FieldItem[]>([
  { id: '1', label: '证件类型' },
  { id: '2', label: '证件号码' },
  { id: '3', label: '姓名' },
  { id: '4', label: '区域' },
  { id: '5', label: '系统标签' },
  { id: '6', label: '数据添加时间' },
  { id: '7', label: '数据修改时间' },
  { id: '8', label: '数据添加人' },
  { id: '9', label: '数据修改人' },
]);

// 右侧配置项数据
const rightConfigData = ref<ConfigItem[]>([
  { id: '3', label: '姓名', active: false },
  { id: '2', label: '证件号码', active: true },
]);

const leftList = ref<HTMLElement | null>(null);
const rightConfigList = ref<HTMLElement | null>(null);
let draggedItem: FieldItem | null = null;

onMounted(() => {
  // 初始化右侧配置项的拖拽排序
  initRightSortable();
  
  // 为右侧容器添加拖拽相关事件
  const rightEl = rightConfigList.value;
  if (rightEl) {
    rightEl.addEventListener('dragover', handleDragOver);
    rightEl.addEventListener('drop', handleDrop);
  }
});

// 处理左侧列表项拖拽开始
const handleDragStart = (item: FieldItem) => {
  draggedItem = item;
  setTimeout(() => {
    // 拖拽开始后，隐藏原元素（可选效果）
  }, 0);
};

// 处理左侧列表项拖拽结束
const handleDragEnd = () => {
  draggedItem = null;
};

// 处理右侧容器拖拽经过
const handleDragOver = (e: DragEvent) => {
  e.preventDefault(); // 必须阻止默认行为才能触发 drop 事件
};

// 处理右侧容器放置
const handleDrop = (e: DragEvent) => {
  e.preventDefault();
  if (draggedItem) {
    const isExist = rightConfigData.value.some((item) => item.id === draggedItem?.id);
    if (!isExist && draggedItem) {
      rightConfigData.value.push({
        id: draggedItem.id,
        label: draggedItem.label,
        active: false,
      });
      // 重新初始化右侧拖拽
      nextTick(() => {
        initRightSortable();
      });
    }
  }
};

// 初始化右侧配置项的拖拽排序
const initRightSortable = () => {
  nextTick(() => {
    const el = rightConfigList.value;
    if (el) {
      new Sortable(el, {
        handle: '.drag-handle',
        animation: 150,
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            const item = rightConfigData.value.splice(oldIndex, 1)[0];
            rightConfigData.value.splice(newIndex, 0, item);
          }
        },
      });
    }
  });
};

// 点击右侧配置项
const handleItemClick = (item: ConfigItem, index: number) => {
  rightConfigData.value.forEach((i) => (i.active = false));
  item.active = true;
};


// 一键布局
const oneKeyLayout = () => {
  // 按左侧列表顺序重新排列右侧配置项
  const orderedItems = leftListData.value
    .filter((leftItem) => rightConfigData.value.some((rightItem) => rightItem.id === leftItem.id))
    .map((leftItem) => {
      const found = rightConfigData.value.find((rightItem) => rightItem.id === leftItem.id);
      return found || { id: leftItem.id, label: leftItem.label, active: false };
    });
  
  if (orderedItems.length > 0) {
    rightConfigData.value = orderedItems;
    nextTick(() => {
      initRightSortable();
    });
  }
};
</script>

<style scoped>
.drag-config-container {
  display: flex;
  height: calc(100vh - 60px);
}

.left-panel {
  width: 200px;
  border-right: 1px solid #ebeef5;
  padding: 10px;
}

.right-panel {
  flex: 1;
  padding: 10px;
}

.right-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.field-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-item {
  padding: 8px 12px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  cursor: move;
  background-color: #fafafa;
  transition: all 0.2s;
}

.field-item:hover {
  background-color: #f5f7fa;
}

.config-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.config-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.2s;
}

.config-item:hover {
  background-color: #fafafa;
}

.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
  margin-left: 10px;
}

.drag-handle:active {
  cursor: grabbing;
}

.add-btn, .del-btn {
  margin-left: 5px;
}
</style>