<template>
  <div class="filter-config">
    <!-- 左侧选择筛选字段区域 -->
    <div class="left-panel">
      <div class="font-bold mb-16px">选择筛选字段</div>
      <VueDraggable
        :list="filterFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'key'"
        :clone="cloneField"
        :sort="false"
        class="field-list"
        @start="onDragStart"
      >
      <template #item="{ element }">
          <FieldPoolItem :hasKeyString="'key'" :element="element" :isFieldUsed="isFieldUsed" />
        </template>
      </VueDraggable>
    </div>

    <!-- 右侧设置筛选规则区域 -->
    <div class="right-panel">
      <div class="panel-header">
        <div class="panel-title">设置筛选规则</div>
        <div class="panel-actions">
          <el-button type="primary" size="small" @click="addRule">添加</el-button>
          <el-button type="danger" size="small" @click="removeLastRule">删除</el-button>
        </div>
      </div>
      <div class="rule-list">
        <div v-for="(rule, index) in filterRules" :key="rule.id" class="rule-item">
          <div class="rule-content">
            <!-- 字段拖拽区域 -->
            <div class="rule-field">
              <div
                class="field-drop-area"
                @dragover.prevent
                @drop="(e) => onFieldDrop(e, index)"
              >
                <div v-if="rule.field" class="field-display">
                  <span>{{ getFieldLabel(rule.field) }}</span>
                  <el-button
                    type="danger"
                    size="small"
                    circle
                    @click="removeField(index)"
                    class="delete-btn"
                  >
                    <Icon icon="ep:close" />
                  </el-button>
                </div>
                <div v-else class="field-placeholder">
                  请拖入筛选字段
                </div>
              </div>
            </div>

            <!-- 操作符选择 -->
            <el-select
              v-model="rule.operator"
              placeholder="选择操作符"
              size="small"
              class="operator-select"
            >
              <el-option
                v-for="(label, value) in operators"
                :key="value"
                :label="label"
                :value="value"
              />
            </el-select>

            <!-- 值输入框 -->
            <el-input
              v-model="rule.value"
              placeholder="请输入值"
              size="small"
              class="value-input"
            />
          </div>

          <!-- 且/或按钮 -->
          <div v-if="index < filterRules.length - 1" class="logic-button">
            <el-button
              type="primary"
              size="small"
              plain
              @click="toggleLogic(index)"
            >
              {{ rule.logic === 'and' ? '且' : '或' }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueDraggable from 'vuedraggable'
import FieldPoolItem from './FieldPoolItem.vue'
import { ElButton, ElSelect, ElOption, ElInput, ElTag } from 'element-plus'

interface FilterField {
  key: string
  label: string
  type: string
}

interface FilterRule {
  id: number
  field: string | null
  operator: string
  value: string
  logic: 'and' | 'or'
}

// 左侧可选字段
const filterFields = ref<FilterField[]>([
  { key: 'sysTag', label: '系统标签', type: 'text' },
  { key: 'certType', label: '证件类型', type: 'text' },
  { key: 'region', label: '区域', type: 'text' }
])

// 右侧规则列表
const filterRules = ref<FilterRule[]>([
  {
    id: Date.now(),
    field: null,
    operator: 'eq',
    value: '',
    logic: 'and'
  }
])

// 当前拖拽的字段
const draggedField = ref<FilterField | null>(null)

// 操作符选项
const operators = {
  eq: '等于',
  neq: '不等于',
  like: '包含',
  notLike: '不包含',
  gt: '大于',
  lt: '小于',
  gte: '大于等于',
  lte: '小于等于'
}

// 检查字段是否已被使用
const isFieldUsed = (fieldKey: string) => {
  return filterRules.value.some(rule => rule.field === fieldKey)
}

// 获取字段显示标签
const getFieldLabel = (fieldKey: string) => {
  return filterFields.value.find(f => f.key === fieldKey)?.label || fieldKey
}

// 开始拖拽时保存字段数据
function onDragStart(evt: any) {
  const field = filterFields.value[evt.oldIndex]
  if (field && !isFieldUsed(field.key)) {
    draggedField.value = field
  }
}

// 克隆字段函数
function cloneField(field: FilterField) {
  return isFieldUsed(field.key) ? false : { ...field }
}

// 字段放置处理
function onFieldDrop(e: DragEvent, ruleIndex: number) {
  e.preventDefault()
  if (draggedField.value && !isFieldUsed(draggedField.value.key)) {
    filterRules.value[ruleIndex].field = draggedField.value.key
    draggedField.value = null
  }
}

// 移除字段
function removeField(ruleIndex: number) {
  if (filterRules.value[ruleIndex]) {
    filterRules.value[ruleIndex].field = null
  }
}

// 添加新规则
function addRule() {
  filterRules.value.push({
    id: Date.now(),
    field: null,
    operator: 'eq',
    value: '',
    logic: 'and'
  })
}

// 移除最后一个规则
function removeLastRule() {
  if (filterRules.value.length > 1) {
    filterRules.value.pop()
  }
}

// 切换逻辑操作符
function toggleLogic(index: number) {
  const rule = filterRules.value[index]
  rule.logic = rule.logic === 'and' ? 'or' : 'and'
}
</script>

<style scoped>
.filter-config {
  display: flex;
  gap: 24px;
  height: 100%;
}

.left-panel, .right-panel {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 16px;
}

.left-panel {
  width: 240px;
}

.right-panel {
  flex: 1;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.panel-title {
  font-weight: bold;
  margin-bottom: 16px;
}

.panel-actions {
  display: flex;
  gap: 8px;
}

.field-list {
  min-height: 100px;
}

.field-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 4px;
  background: #f5f7fa;
  border-radius: 4px;
  cursor: grab;
}

.field-item:hover {
  background: #e6f7ff;
}

.field-item-used {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f0f0f0;
}

.field-item-used:hover {
  background: #f0f0f0;
}

.rule-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.rule-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule-content {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.rule-field {
  flex: 1;
}

.field-drop-area {
  min-height: 32px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  padding: 4px 8px;
}

.field-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
}

.field-placeholder {
  color: #909399;
  text-align: center;
  padding: 4px 0;
}

.operator-select {
  width: 120px;
}

.value-input {
  width: 200px;
}

.logic-button {
  display: flex;
  justify-content: center;
  margin: 4px 0;
}

.delete-btn {
  padding: 4px;
}

.mr-2 {
  margin-right: 8px;
}

.ml-auto {
  margin-left: auto;
}
</style>