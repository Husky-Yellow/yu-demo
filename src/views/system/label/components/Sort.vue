<template>
  <div class="sort-config">
    <!-- 左侧选择排序字段区域 -->
    <div class="left-panel">
      <div class="panel-title">选择排序字段</div>
      <VueDraggable
        :list="sortFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'value'"
        :clone="cloneField"
        :sort="false"
        class="field-list"
        @start="onDragStart"
      >
        <template #item="{ element }">
          <FieldPoolItem :hasKeyString="'value'" :element="element" :isFieldUsed="isFieldUsed" />
        </template>
      </VueDraggable>
    </div>

    <!-- 右侧排序设置区域 -->
    <div class="right-panel">
      <div class="panel-header">
        <div class="panel-title">排序设置</div>
        <div class="panel-actions">
          <el-button type="primary" size="small" @click="addSortItem">添加</el-button>
          <el-button type="danger" size="small" @click="removeLastSortItem">删除</el-button>
        </div>
      </div>
      <div v-for="(item, index) in sortItems" :key="item.id" class="sort-item">
        <div class="sort-item-header">
          <span>排序顺位{{ index + 1 }}</span>
        </div>
        <div class="sort-item-content">
          <div class="sort-type">
            <el-radio-group v-model="item.sortType">
              <el-radio label="dataAddTime">数据添加时间</el-radio>
              <el-radio label="dataModifyTime">数据修改时间</el-radio>
              <el-radio label="custom">自定义排序</el-radio>
            </el-radio-group>
          </div>
          <div v-if="item.sortType === 'custom'" class="sort-field">
            <div class="sort-drop-area" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
              <div v-if="item.field" class="sort-field-item">
                <span>{{ item.field.label }}</span>
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
              <div v-else class="sort-drop-placeholder">
                请输入排序字段
              </div>
            </div>
          </div>
          <div class="sort-rule">
            <el-select v-model="item.sortRule" placeholder="请选择排序规则" size="small">
              <el-option label="升序" value="asc" />
              <el-option label="降序" value="desc" />
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import FieldPoolItem from './FieldPoolItem.vue'
import { ElButton, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus'

interface SortField {
  label: string
  value: string
}

interface SortItem {
  id: number
  sortType: 'dataAddTime' | 'dataModifyTime' | 'custom'
  sortRule: 'asc' | 'desc'
  field?: SortField | null
}

// 左侧可选字段
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
])

// 右侧排序项列表
const sortItems = ref<SortItem[]>([
  {
    id: Date.now(),
    sortType: 'dataAddTime',
    sortRule: 'asc',
    field: null
  }
])

// 当前拖拽的字段
const draggedField = ref<SortField | null>(null)

// 检查字段是否已被使用
const isFieldUsed = (fieldValue: string) => {
  return sortItems.value.some(item => item.field?.value === fieldValue)
}

// 克隆字段函数，如果字段已使用则返回false阻止拖拽
function cloneField(field: SortField) {
  return isFieldUsed(field.value) ? false : { ...field }
}

function addSortItem() {
  sortItems.value.push({
    id: Date.now(),
    sortType: 'custom',
    sortRule: 'asc',
    field: null
  })
}

function removeLastSortItem() {
  if (sortItems.value.length > 1) {
    sortItems.value.pop()
  }
}

// 开始拖拽时保存字段数据
function onDragStart(evt: any) {
  const field = sortFields.value[evt.oldIndex]
  if (field && !isFieldUsed(field.value)) {
    draggedField.value = field
  }
}

// 修改 onFieldDrop 函数
function onFieldDrop(e: DragEvent, sortIndex: number) {
  e.preventDefault()
  if (draggedField.value && !isFieldUsed(draggedField.value.value)) {
    sortItems.value[sortIndex].field = { ...draggedField.value }
    draggedField.value = null
  }
}

function removeField(sortIndex: number) {
  if (sortItems.value[sortIndex]) {
    sortItems.value[sortIndex].field = null
  }
}
</script>

<style scoped>
.sort-config {
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

.sort-item {
  margin-bottom: 18px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 12px;
  background: #fafbfc;
}

.sort-item-header {
  margin-bottom: 12px;
  font-weight: bold;
}

.sort-item-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sort-type {
  margin-bottom: 8px;
}

.sort-drop-area {
  min-height: 40px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 0;
}

.sort-field-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: white;
  border-radius: 4px;
}

.sort-drop-placeholder {
  color: #bbb;
  text-align: center;
  padding: 12px 0;
}

.sort-rule {
  margin-top: 8px;
}

.text-red-500 {
  color: #f56c6c;
}

.mr-2 {
  margin-right: 8px;
}

.ml-auto {
  margin-left: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.delete-btn {
  padding: 4px;
}
</style>