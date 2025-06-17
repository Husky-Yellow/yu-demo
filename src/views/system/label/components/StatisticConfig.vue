<template>
  <div class="statistic-config">
    <div class="left-panel">
      <div class="panel-title">选择统计字段</div>
      <VueDraggable
        :list="fields"
        :group="{ name: 'fields', pull: 'clone', put: false }"
        :item-key="'key'"
        :clone="cloneField"
        :sort="false"
        class="field-list"
      >
        <template #item="{ element }">
          <div class="field-item" :class="{ 'field-item-used': isFieldUsed(element.key) }">
            <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer"/>
            <span>{{ element.label }}</span>
            <el-tag v-if="isFieldUsed(element.key)" size="small" class="ml-auto">已使用</el-tag>
          </div>
        </template>
      </VueDraggable>
    </div>
    <div class="right-panel">
      <div class="panel-header">
        <div class="panel-title">统计设置</div>
        <div class="panel-actions">
          <el-button type="primary" size="small" @click="addStatistic">添加</el-button>
          <el-button type="danger" size="small" @click="removeLastStatistic">删除</el-button>
        </div>
      </div>
      <VueDraggable
        :list="statistics"
        :item-key="'id'"
        class="statistic-list"
      >
        <template #item="{ element: item, index: idx }">
          <div class="stat-item">
            <div class="stat-item-header">
              <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer"/>
              <el-input v-model="item.name" placeholder="请输入统计名称" size="small" style="width: 200px;" />
            </div>
            <VueDraggable
              class="stat-drop-area"
              :list="item.fields"
              :group="{ name: 'fields', pull: false, put: true }"
              :item-key="'key'"
              @add="(evt) => onFieldDrop(idx, evt)"
            >
              <template #item="{ element, index }">
                <div class="stat-field-item">
                  <span>{{ element.label }}</span>
                  <el-select v-model="element.condition" size="small" style="width: 90px; margin: 0 8px;">
                    <el-option label="等于" value="=" />
                    <el-option label="不等于" value="!=" />
                  </el-select>
                  <template v-if="element.type === 'select'">
                    <el-select v-model="element.value" size="small" style="width: 120px;">
                      <el-option v-for="opt in element.options" :key="opt.value" :label="opt.label" :value="opt.value" />
                    </el-select>
                  </template>
                  <template v-else>
                    <el-input v-model="element.value" size="small" style="width: 120px;" />
                  </template>
                  <el-button type="text" @click="removeField(idx, index)">删除</el-button>
                  <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer"/>
                </div>
              </template>
              <template #footer>
                <div v-if="item.fields.length === 0" class="stat-drop-placeholder">请拖入统计字段</div>
              </template>
            </VueDraggable>
          </div>
        </template>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueDraggable from 'vuedraggable'
import { ElInput, ElButton, ElSelect, ElOption, ElTag } from 'element-plus'

interface Field {
  key: string
  label: string
  type: 'select' | 'input'
  options?: Array<{ label: string; value: string }>
}

interface StatisticField extends Field {
  condition: '=' | '!='
  value: string
}

interface StatisticItem {
  id: number
  name: string
  fields: StatisticField[]
}

// 示例字段
const fields = ref<Field[]>([
  { key: 'type', label: '证件类型', type: 'select', options: [ { label: '身份证', value: 'id' }, { label: '护照', value: 'passport' } ] },
  { key: 'area', label: '区域', type: 'select', options: [ { label: '北京', value: 'bj' }, { label: '上海', value: 'sh' } ] },
  { key: 'label', label: '系统标签', type: 'input' },
])

const statistics = ref<StatisticItem[]>([
  { id: Date.now(), name: '', fields: [] }
])

// 计算已使用的字段keys
const usedFieldKeys = computed(() => {
  const keys = new Set<string>()
  statistics.value.forEach(stat => {
    stat.fields.forEach(field => {
      keys.add(field.key)
    })
  })
  return keys
})

// 判断字段是否已被使用
function isFieldUsed(key: string): boolean {
  return usedFieldKeys.value.has(key)
}

function cloneField(field: Field): Field | false {
  if (isFieldUsed(field.key)) {
    return false
  }
  return { ...field }
}

function addStatistic() {
  statistics.value.push({ id: Date.now(), name: '', fields: [] })
}

function removeLastStatistic() {
  if (statistics.value.length > 0) {
    statistics.value.pop()
  }
}

function removeField(statIdx: number, fieldIdx: number) {
  statistics.value[statIdx].fields.splice(fieldIdx, 1)
}

function onFieldDrop(statIdx: number, evt: { added: { element: Field; newIndex: number } }) {
  if (evt.added) {
    const field = evt.added.element
    statistics.value[statIdx].fields[evt.added.newIndex] = {
      ...field,
      condition: '=',
      value: '',
    }
  }
}
</script>

<style scoped>
.statistic-config {
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

.field-item-used {
  opacity: 0.6;
  background: #f0f0f0;
  cursor: not-allowed;
}

.field-item:not(.field-item-used):hover {
  background: #e6f7ff;
}

.statistic-list {
  min-height: 100px;
}

.stat-item {
  margin-bottom: 18px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 12px;
  background: #fafbfc;
}

.stat-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.stat-drop-area {
  min-height: 60px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  padding: 8px;
}

.stat-field-item {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 8px;
  background: white;
  border-radius: 4px;
}

.stat-drop-placeholder {
  color: #bbb;
  text-align: center;
  padding: 12px 0;
}

.field-item.sortable-ghost, .stat-field-item.sortable-ghost, .stat-item.sortable-ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.field-item.sortable-drag, .stat-field-item.sortable-drag, .stat-item.sortable-drag {
  opacity: 0.9;
}

.mr-2 {
  margin-right: 8px;
}

.ml-auto {
  margin-left: auto;
}

.text-red-500 {
  color: #f56c6c;
}

.cursor-pointer {
  cursor: pointer;
}
</style> 