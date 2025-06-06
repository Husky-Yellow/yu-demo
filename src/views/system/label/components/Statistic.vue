
<template>
  <div class="statistic-config-container">
    <!-- 左侧选择统计字段区域 -->
    <div class="left-panel">
      <el-checkbox-group v-model="checkedFields">
        <el-checkbox
          v-for="field in statisticFields"
          :key="field.value"
          :label="field.value"
        >
          {{ field.label }}
        </el-checkbox>
      </el-checkbox-group>
      <div class="btn-group">
        <el-button type="primary" @click="addSelectedFields">添加</el-button>
        <el-button type="danger" @click="deleteSelectedFields">删除</el-button>
      </div>
    </div>

    <!-- 右侧统计设置区域 -->
    <div class="right-panel">
      <div class="config-header">
        <h3>统计设置</h3>
        <div class="btn-group">
          <el-button type="success" @click="addNewStatisticItem">添加</el-button>
          <el-button type="danger" @click="deleteSelectedStatisticItems">删除</el-button>
        </div>
      </div>
      <div class="statistic-item-list" ref="statisticItemList">
        <div
          v-for="(item, index) in statisticItems"
          :key="item.id"
          class="statistic-item"
          :style="{ border: item.active ? '1px dashed #409eff' : '1px solid #ebeef5' }"
          @click="handleItemClick(item, index)"
        >
          <el-row :gutter="10">
            <el-col :span="6">
              <el-input
                v-model="item.name"
                placeholder="请输入统计名称"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <el-select
                v-model="item.field"
                placeholder="请选择统计字段"
                size="small"
              >
                <el-option
                  v-for="field in statisticFields"
                  :key="field.value"
                  :label="field.label"
                  :value="field.value"
                />
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-select
                v-model="item.condition"
                placeholder="请选择条件"
                size="small"
              >
                <el-option
                  v-for="(cond, condKey) in conditions"
                  :key="condKey"
                  :label="cond"
                  :value="condKey"
                />
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-input
                v-model="item.value"
                placeholder="请输入值"
                size="small"
              />
              <div class="drag-handle" @mousedown.stop @touchstart.stop>
                <el-icon><Rank /></el-icon>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Sortable from 'sortablejs';
import { ElCheckboxGroup, ElCheckbox, ElButton, ElRow, ElCol, ElInput, ElSelect, ElOption, ElIcon } from 'element-plus';
import { Rank } from '@element-plus/icons-vue'

interface StatisticField {
  label: string;
  value: string;
}

interface StatisticItem {
  id: string;
  name: string;
  field: string;
  condition: string;
  value: string;
  active: boolean;
}

const statisticFields = ref<StatisticField[]>([
  { label: '证件类型', value: 'certType' },
  { label: '区域', value: 'region' },
  { label: '系统标签', value: 'sysTag' }
]);

const conditions = ref({
  equal: '=',
  notEqual: '!=',
  like: 'like'
  // 可根据实际需求扩展更多条件
});

const checkedFields = ref<string[]>([]);
const statisticItems = ref<StatisticItem[]>([
  {
    id: '1',
    name: '户籍人口',
    field: 'sysTag',
    condition: 'equal',
    value: '',
    active: false
  },
  {
    id: '2',
    name: '刑满释放人员',
    field: '',
    condition: '',
    value: '',
    active: false
  },
  {
    id: '3',
    name: '请输入统计名称',
    field: '',
    condition: '',
    value: '',
    active: false
  }
]);

const statisticItemList = ref<any>(null);

onMounted(() => {
  initSortable();
});

// 初始化拖拽排序
const initSortable = () => {
  nextTick(() => {
    const el = statisticItemList.value;
    if (el) {
      new Sortable(el, {
        handle: '.drag-handle',
        animation: 150,
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            const item = statisticItems.value.splice(oldIndex, 1)[0];
            statisticItems.value.splice(newIndex, 0, item);
          }
        }
      });
    }
  });
};

// 添加选中的字段到统计项（简单示例，可根据实际逻辑调整）
const addSelectedFields = () => {
  // 这里可根据 checkedFields 做更复杂的添加逻辑，比如遍历选中字段添加到右侧对应位置等
  console.log('选中要添加的字段：', checkedFields.value);
};

// 删除选中的字段（简单示例，可根据实际逻辑调整）
const deleteSelectedFields = () => {
  console.log('删除选中的字段：', checkedFields.value);
  // 实际可从左侧列表等移除对应字段逻辑
};

// 添加新的统计项
const addNewStatisticItem = () => {
  const newItem: StatisticItem = {
    id: Date.now().toString(),
    name: '请输入统计名称',
    field: '',
    condition: '',
    value: '',
    active: false
  };
  statisticItems.value.push(newItem);
  nextTick(() => {
    initSortable();
  });
};

// 删除选中的统计项
const deleteSelectedStatisticItems = () => {
  const activeItems = statisticItems.value.filter(item => item.active);
  activeItems.forEach(item => {
    const index = statisticItems.value.indexOf(item);
    if (index > -1) {
      statisticItems.value.splice(index, 1);
    }
  });
  nextTick(() => {
    initSortable();
  });
};

// 点击统计项
const handleItemClick = (item: StatisticItem, index: number) => {
  statisticItems.value.forEach(i => (i.active = false));
  item.active = true;
};
</script>

<style scoped>
.statistic-config-container {
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

.statistic-item-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.statistic-item {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.2s;
}

.statistic-item:hover {
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

.btn-group {
  margin-top: 10px;
}
</style>