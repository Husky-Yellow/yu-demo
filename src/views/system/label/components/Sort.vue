<template>
  <div class="flex gap-3 h-full">
    <!-- 左侧选择排序字段区域 -->
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
      <div class="font-bold mb-16px">选择排序字段</div>
      <VueDraggable
        :list="sortFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'value'"
        :clone="cloneField"
        :sort="false"
        class="min-h-[100px]"
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
        <div class="font-bold mb-16px">排序设置</div>
        <div class="panel-actions">
          <el-button type="primary" @click="addSortItem">添加</el-button>
          <el-button type="danger" @click="removeLastSortItem">删除</el-button>
        </div>
      </div>
      <el-form :model="formModel.sortItems" ref="sortFormRef" label-width="100px">
        <div v-for="(item, index) in formModel.sortItems" :key="item.id" class="sort-item">
          <div class="sort-item-header">
            <span>排序顺位{{ index + 1 }}</span>
          </div>
          <el-form-item label="排序类型" :prop="`sortItems.${index}.sortType`">
            <el-radio-group v-model="item.sortType">
              <el-radio label="dataAddTime">数据添加时间</el-radio>
              <el-radio label="dataModifyTime">数据修改时间</el-radio>
              <el-radio label="custom">自定义排序</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-if="item.sortType === 'custom'"
            label="排序字段"
            :prop="`sortItems.${index}.field`"
            :rules="[{ validator: validateFieldsNotEmpty(item), trigger: 'submit' }]"
          >
            <div class="sort-drop-area" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
              <div v-if="item.field" class="sort-field-item">
                <span>{{ item.field.label }}</span>
                <el-button type="danger" size="small" circle @click="removeField(index)">
                  <Icon icon="ep:close" />
                </el-button>
              </div>
              <div v-else class="sort-drop-placeholder"> 请输入排序字段 </div>
            </div>
          </el-form-item>
          <el-form-item label="排序规则" :prop="`sortItems.${index}.sortRule`">
            <el-select v-model="item.sortRule" placeholder="请选择排序规则">
              <el-option label="升序" value="asc" />
              <el-option label="降序" value="desc" />
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import FieldPoolItem from './FieldPoolItem.vue'
import { ElButton, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus'
import type { FormInstance } from 'element-plus'

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
// const sortItems = ref<SortItem[]>([
//   {
//     id: Date.now(),
//     sortType: 'dataAddTime',
//     sortRule: 'asc',
//     field: null
//   }
// ])

const formModel = ref<{ sortItems: SortItem[] }>({
  sortItems: [
    {
      id: Date.now(),
      sortType: 'dataAddTime',
      sortRule: 'asc',
      field: null
    }
  ]
})

const sortFormRef = ref<FormInstance>()

// 当前拖拽的字段
const draggedField = ref<SortField | null>(null)

// 检查字段是否已被使用
const isFieldUsed = (fieldValue: string) => {
  return formModel.value.sortItems.some((item) => item.field?.value === fieldValue)
}

// 克隆字段函数，如果字段已使用则返回false阻止拖拽
function cloneField(field: SortField) {
  return isFieldUsed(field.value) ? false : { ...field }
}

function addSortItem() {
  formModel.value.sortItems.push({
    id: Date.now(),
    sortType: 'custom',
    sortRule: 'asc',
    field: null
  })
}

function removeLastSortItem() {
  if (formModel.value.sortItems.length > 1) {
    formModel.value.sortItems.pop()
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
    formModel.value.sortItems[sortIndex].field = { ...draggedField.value }
    draggedField.value = null
  }
}

function removeField(sortIndex: number) {
  if (formModel.value.sortItems[sortIndex]) {
    formModel.value.sortItems[sortIndex].field = null
  }
}

/**
 * 自定义表单校验规则工厂函数：验证统计项的字段列表是否为空
 * @param idx - 当前统计项的索引
 * @returns 返回一个 Element Plus 的表单校验函数
 */
const validateFieldsNotEmpty = (item: SortItem) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.field) {
      return callback(new Error('请拖入排序字段'))
    }
    callback()
  }
}

const submitForm = () => {
  if (!sortFormRef.value) return
  sortFormRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
      console.log(formModel.value.sortItems)
    } else {
      console.log('error submit!')
    }
  })
}

defineExpose({ submitForm })
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
}

.panel-actions {
  display: flex;
  gap: 8px;
}

.field-list {
  min-height: 100px;
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

.sort-drop-area {
  min-height: 20px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
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
</style>
