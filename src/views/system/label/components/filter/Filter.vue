<template>
  <div class="flex gap-3 h-full">
    <!-- 左侧选择筛选字段区域 -->
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
      <div class="font-bold mb-16px">选择筛选字段</div>
      <VueDraggable
        :list="filterFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'key'"
        :clone="cloneField"
        :sort="false"
        class="min-h-[100px]"
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
        <div class="font-bold">设置筛选规则</div>
        <div class="panel-actions">
          <el-button type="primary" @click="addRule">添加</el-button>
          <el-button type="danger" @click="removeLastRule">删除</el-button>
        </div>
      </div>
      <el-form :model="filterRules" ref="filterFormRef" :inline="true">
        <div v-for="(rule, index) in filterRules" :key="rule.id" class="rule-item">
          <div class="rule-content">
            <el-form-item :prop="`filterRules.${index}.field`" :rules="[{ validator: validateFieldsNotEmpty(rule), trigger: 'submit' }]">
              <div class=" bg-gray-100 border border-dashed border-gray-300 rounded px-2px py-2px w-full mt-18px min-w-300px" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
                <div v-if="rule.field" class="field-display">
                  <span>{{ getFieldLabel(rule.field) }}</span>
                  <el-button
                    type="danger"
                    size="small"
                    circle
                    @click="removeField(index)"
                  >
                    <Icon icon="ep:close" />
                  </el-button>
                </div>
                <div v-else class="text-[#bbb] text-center"> 请拖入筛选字段 </div>
              </div>
            </el-form-item>
            <el-form-item :prop="`filterRules.${index}.operator`">
              <el-select class="!w-[200px] mt-18px" v-model="rule.operator" placeholder="选择操作符">
                <el-option
                  v-for="operatorItem in OperatorOptions"
                  :key="operatorItem.value"
                  :label="operatorItem.label"
                  :value="operatorItem.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item :prop="`filterRules.${index}.value`" :rules="[{ validator: validateValueNotEmpty(rule), trigger: 'submit' }]">
              <el-input v-model="rule.value" placeholder="请输入值"  class="!w-[200px] mt-18px"/>
            </el-form-item>
          </div>
          <!-- 且/或按钮 -->
          <div v-if="index < filterRules.length - 1" class="logic-button">
            <el-button type="primary" plain @click="toggleLogic(index)">
              {{ rule.logic === 'and' ? '且' : '或' }}
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueDraggable from 'vuedraggable'
import { OperatorOptions } from '@/config/constants/enums/label'
import type { FormInstance } from 'element-plus'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import { ElButton, ElSelect, ElOption, ElInput } from 'element-plus'

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
const filterFormRef = ref<FormInstance>()

// 右侧规则列表
const filterRules = ref<FilterRule[]>([
  {
    id: Date.now(),
    field: null,
    operator: '=',
    value: '',
    logic: 'and'
  }
])


// 当前拖拽的字段
const draggedField = ref<FilterField | null>(null)

// 检查字段是否已被使用
const isFieldUsed = (fieldKey: string) => {
  return filterRules.value.some((rule) => rule.field === fieldKey)
}

// 获取字段显示标签
const getFieldLabel = (fieldKey: string) => {
  return filterFields.value.find((f) => f.key === fieldKey)?.label || fieldKey
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
    operator: '=',
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


/**
 * 自定义表单校验规则工厂函数：验证统计项的字段列表是否为空
 * @param idx - 当前统计项的索引
 * @returns 返回一个 Element Plus 的表单校验函数
 */
 const validateFieldsNotEmpty = (item: any) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.field) {
      return callback(new Error('请拖入排序字段'))
    }
    callback()
  }
}


/**
 * 自定义表单校验规则工厂函数：验证统计项的字段列表是否为空
 * @param idx - 当前统计项的索引
 * @returns 返回一个 Element Plus 的表单校验函数
 */
 const validateValueNotEmpty = (item: any) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.value) {
      return callback(new Error('请输入值'))
    }
    callback()
  }
}



const submitForm = () => {
  if (!filterFormRef.value) return
  filterFormRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
      console.log(filterRules.value)
    } else {
      console.log('error submit!')
    }
  })
}

defineExpose({
  submitForm
})
</script>

<style scoped>
.left-panel,
.right-panel {
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


.rule-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rule-content {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 2px 0 0 10px;
  background: #fafbfc;
}

.field-drop-area {
  min-height: 10px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  padding: 4px 8px;
  width: 100%;
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
  width: 100%;
}


.logic-button {
  display: flex;
  justify-content: center;
  margin: 4px 0;
}

</style>
