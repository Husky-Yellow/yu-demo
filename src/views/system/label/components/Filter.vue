<template>
  <div class="filter-config">
    <!-- 左侧选择筛选字段区域 -->
    <div class="left-panel">
      <div class="panel-header">
        <el-icon><Filter /></el-icon>
        <span class="panel-title">选择筛选字段</span>
      </div>
      <div class="field-search">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索字段..."
          size="small"
          suffix-icon="Search"
        />
      </div>
      <div class="field-list" ref="fieldList">
        <div
          v-for="(field, index) in filteredFields"
          :key="field.key + index"
          class="field-item"
          draggable="true"
          @dragstart="handleDragStart(field)"
          @dragend="handleDragEnd"
        >
          <div class="field-info">
            <el-icon class="field-icon" :size="14">
              <Document />
            </el-icon>
            <span>{{ field.label }}</span>
          </div>
          <div class="drag-handle" @mousedown.stop @touchstart.stop>
            <el-icon><Sort /></el-icon>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="primary"    @click="addField">添加字段</el-button>
        <el-button type="danger"    @click="deleteSelectedFields">删除选中</el-button>
      </div>
    </div>

    <!-- 右侧设置筛选规则区域 -->
    <div class="right-panel">
      <div class="panel-header">
        <!-- <el-icon><Rule /></el-icon> -->
        Rule
        <span class="panel-title">设置筛选规则</span>
      </div>
      <div class="rule-list" ref="ruleList">
        <div
          v-for="(rule, index) in filterRules"
          :key="rule.id"
          class="rule-item"
          :class="{ 'active': activeRuleId === rule.id }"
          @click="setActiveRule(rule.id)"
        >
          <el-row :gutter="10">
            <el-col :span="4">
              <el-select
                v-model="rule.field"
                placeholder="选择字段"
                  
              >
                <el-option
                  v-for="field in filterFields"
                  :key="field.key"
                  :label="field.label"
                  :value="field.key"
                />
              </el-select>
            </el-col>
            <el-col :span="3">
              <el-select
                v-model="rule.operator"
                placeholder="操作符"
                  
              >
                <el-option
                  v-for="(opt, optKey) in operators"
                  :key="optKey"
                  :label="opt"
                  :value="optKey"
                />
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-input
                v-model="rule.value"
                placeholder="请输入值"
                  
              />
            </el-col>
            <el-col :span="2" v-if="index < filterRules.length - 1">
              <el-select
                v-model="rule.logic"
                placeholder="逻辑"
                  
              >
                <el-option value="and">且</el-option>
                <el-option value="or">或</el-option>
              </el-select>
            </el-col>
            <el-col :span="2" class="drag-handle-col" v-if="index < filterRules.length - 1">
              <div class="drag-handle" @mousedown.stop @touchstart.stop>
                <!-- <el-icon><Swap /></el-icon> -->
                Swap
              </div>
            </el-col>
            <el-col :span="2" class="delete-col">
              <el-button
                type="danger"
                icon="Delete"
                  
                @click.stop="deleteRule(index)"
              />
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="primary"    @click="addRule">添加规则</el-button>
        <el-button type="danger"    @click="deleteSelectedRules">删除选中</el-button>
        <el-button type="success"    @click="previewFilter">预览结果</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import Sortable from 'sortablejs';
import {
  ElButton,
  ElIcon,
  ElSelect,
  ElOption,
  ElInput,
  ElRow,
  ElCol,

} from 'element-plus';
import {   Filter,
  Document,
  Sort, } from '@element-plus/icons-vue'

// 筛选字段类型定义
interface FilterField {
  key: string;
  label: string;
  type: string; // 字段类型：text/number/date
  selected?: boolean; // 是否选中
}

// 筛选规则类型定义
interface FilterRule {
  id: string;
  field: string; // 关联筛选字段的key
  operator: string; // 操作符，如 'eq'
  value: string; // 筛选值
  logic: 'and' | 'or'; // 逻辑关系
  active: boolean; // 是否激活
}

// 丰富的示例数据：筛选字段
const filterFields = ref<FilterField[]>([
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: '姓名', type: 'text' },
  { key: 'certType', label: '证件类型', type: 'text' },
  { key: 'certNo', label: '证件号码', type: 'text' },
  { key: 'gender', label: '性别', type: 'text' },
  { key: 'age', label: '年龄', type: 'number' },
  { key: 'region', label: '区域', type: 'text' },
  { key: 'sysTag', label: '系统标签', type: 'text' },
  { key: 'createTime', label: '创建时间', type: 'date' },
  { key: 'updateTime', label: '更新时间', type: 'date' }
]);

// 示例数据：筛选规则
const filterRules = ref<FilterRule[]>([
  {
    id: 'rule1',
    field: 'sysTag',
    operator: 'eq',
    value: '重点人员',
    logic: 'and',
    active: false
  },
  {
    id: 'rule2',
    field: 'region',
    operator: 'like',
    value: '朝阳区',
    logic: 'or',
    active: false
  },
  {
    id: 'rule3',
    field: 'age',
    operator: 'gt',
    value: '18',
    logic: 'and',
    active: false
  }
]);

// 操作符映射（根据字段类型动态显示）
const operators = ref({
  eq: '=',
  neq: '!=',
  like: '包含',
  notLike: '不包含',
  gt: '>',
  lt: '<',
  gte: '>=',
  lte: '<=',
  in: '在...中',
  notIn: '不在...中',
  isNull: '为空',
  notNull: '不为空'
});

// 搜索关键词
const searchKeyword = ref('');

// 计算过滤后的字段列表
const filteredFields = computed(() => {
  if (!searchKeyword.value) return filterFields.value;
  return filterFields.value.filter(field => 
    field.label.includes(searchKeyword.value)
  );
});

// 当前激活的规则ID
const activeRuleId = ref('');

const fieldList = ref<any>(null);
const ruleList = ref<any>(null);
let draggedField: FilterField | null = null;

onMounted(() => {
  initSortable();
});

// 初始化拖拽排序
const initSortable = () => {
  nextTick(() => {
    // 左侧字段列表拖拽排序
    if (fieldList.value) {
      new Sortable(fieldList.value, {
        handle: '.drag-handle',
        animation: 150
      });
    }

    // 右侧规则列表拖拽排序
    if (ruleList.value) {
      new Sortable(ruleList.value, {
        handle: '.drag-handle',
        animation: 150,
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            const item = filterRules.value.splice(oldIndex, 1)[0];
            filterRules.value.splice(newIndex, 0, item);
          }
        }
      });
    }
  });
};

// 左侧字段拖拽开始
const handleDragStart = (field: FilterField) => {
  draggedField = field;
  (event as DragEvent).dataTransfer?.setData('text/plain', field.key);
  (event?.target as HTMLElement).classList.add('dragging');
};

// 左侧字段拖拽结束
const handleDragEnd = () => {
  draggedField = null;
  document.querySelectorAll('.field-item').forEach(item => {
    item.classList.remove('dragging');
  });
};

// 添加新的筛选规则
const addRule = () => {
  const newRule: FilterRule = {
    id: `rule${Date.now()}`,
    field: filterFields.value[0].key,
    operator: 'eq',
    value: '',
    logic: 'and',
    active: false
  };
  filterRules.value.push(newRule);
  nextTick(() => {
    initSortable();
  });
};

// 删除筛选规则
const deleteRule = (index: number) => {
  filterRules.value.splice(index, 1);
  if (activeRuleId.value === filterRules.value[index]?.id) {
    activeRuleId.value = '';
  }
  nextTick(() => {
    initSortable();
  });
};

// 设置激活的规则
const setActiveRule = (ruleId: string) => {
  activeRuleId.value = ruleId;
};

// 添加新字段
const addField = () => {
  const newField: FilterField = {
    key: `field${Date.now()}`,
    label: '新字段',
    type: 'text',
    selected: false
  };
  filterFields.value.push(newField);
};

// 删除选中的字段
const deleteSelectedFields = () => {
  filterFields.value = filterFields.value.filter(field => !field.selected);
};

// 删除选中的规则
const deleteSelectedRules = () => {
  filterRules.value = filterRules.value.filter(rule => !rule.active);
  activeRuleId.value = '';
};

// 预览筛选结果
const previewFilter = () => {
  const activeRules = filterRules.value.filter(rule => rule.value.trim() !== '');
  console.log('筛选条件:', activeRules);
  // 这里可以实现实际的筛选逻辑
  alert(`已应用 ${activeRules.length} 个筛选条件`);
};
</script>

<style scoped>
.filter-config {
  display: flex;
  height: calc(100vh - 60px);
}

.left-panel,
.right-panel {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.left-panel {
  width: 280px;
  margin-right: 10px;
}

.panel-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.panel-title {
  font-weight: bold;
  margin-left: 5px;
}

.field-search {
  margin-bottom: 10px;
}

.field-list,
.rule-list {
  flex: 1;
  overflow-y: auto;
  min-height: 100px;
}

.field-item {
  padding: 8px 12px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin-bottom: 5px;
  cursor: move;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  transition: all 0.2s;
}

.field-item:hover {
  background-color: #f5f7fa;
}

.field-info {
  display: flex;
  align-items: center;
}

.field-icon {
  margin-right: 8px;
  color: #909399;
}

.rule-item {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.rule-item.active {
  background-color: #f0f9ff;
  border: 1px solid #409eff;
}

.drag-handle {
  cursor: grab;
  color: #409eff;
}

.drag-handle:active {
  cursor: grabbing;
}

.dragging {
  opacity: 0.5;
  transform: scale(0.98);
}

.btn-group {
  margin-top: 10px;
  display: flex;
  gap: 8px;
}
</style>