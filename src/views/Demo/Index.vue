<template>
  <ContentWrap>
    <el-row :gutter="20">
      <!-- 左侧列表 -->
      <el-col :span="6">
        <el-card class="field-list">
          <template #header>
            <div class="header-wrapper">
              <span>字段列表</span>
              <el-tooltip content="从左侧拖拽字段到中间表单区域">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </div>
          </template>
          <draggable
            :list="fieldList"
            :group="{ name: 'fields', pull: (item) => !item.used && 'clone', put: false }"
            item-key="id"
            :clone="cloneField"
            :animation="300"
          >
            <template #item="{ element }">
              <div
                class="field-item"
                :class="{ 'field-item-used': element.used }"
                :data-used="element.used"
              >
                <el-icon>
                  <Edit />
                </el-icon>
                <span class="field-label">{{ element.label }}</span>
              </div>
            </template>
          </draggable>
        </el-card>
      </el-col>

      <!-- 中间表单 -->
      <el-col :span="12">
        <el-card class="form-design">
          <template #header>
            <div class="header-wrapper">
              <span>表单设计</span>
              <el-button type="primary" @click="previewForm">预览</el-button>
            </div>
          </template>
          <draggable
            v-model="formFields"
            group="fields"
            item-key="id"
            class="form-container"
            @add="onFieldAdd"
            handle=".drag-handle"
            :animation="300"
            ghost-class="ghost-class"
          >
            <template #item="{ element }">
              <div class="form-item" @click="selectField(element)">
                <div class="form-item-content">
                  <el-icon class="drag-handle">
                    <Rank />
                  </el-icon>
                  <div class="field-content">
                    <div class="field-title">{{ element.label }}</div>
                    <div v-for="(item, index) in element.items" :key="index" class="field-row">
                      <form-item
                        :type="element.type"
                        v-model="item.value"
                        :placeholder="
                          element.type === 'select'
                            ? '请选择' + element.label
                            : '请输入' + element.label
                        "
                        :options="element.options"
                      />
                      <el-button
                        type="primary"
                        link
                        :icon="Plus"
                        @click="addItem(element)"
                        v-if="index === 0"
                      />
                      <el-button
                        type="danger"
                        link
                        :icon="Delete"
                        @click="removeItem(element, index)"
                        v-else
                      />
                    </div>
                  </div>
                  <el-button type="danger" link :icon="Delete" @click="removeField(element)" />
                </div>
              </div>
            </template>
          </draggable>
        </el-card>
      </el-col>

      <!-- 右侧属性 -->
      <el-col :span="6">
        <el-card class="property-panel">
          <template #header>
            <span>字段属性</span>
          </template>
          <template v-if="selectedField">
            <!-- 是否必填 
                  提示文字 
                  字段联动设置 联动字段仅可选择表中单选、多选类型字段
                    选择联动字段
                    证件类型
                    选择字段值
                    公民身份证
                    选择联动效果 
            -->
            <el-form label-width="80px">
              <el-form-item label="字段名称">
                <el-input v-model="selectedField.label" />
              </el-form-item>
              <el-form-item label="必填">
                <el-switch v-model="selectedField.required" />
              </el-form-item>
              <el-form-item label="提示文字">
                <el-input v-model="selectedField.placeholder" />
              </el-form-item>
              <template v-if="['select', 'checkbox', 'radio'].includes(selectedField.type)">
                <el-form-item label="选项配置">
                  <div
                    v-for="(option, index) in selectedField.options"
                    :key="index"
                    class="option-item"
                  >
                    <el-input
                      v-model="option.label"
                      placeholder="选项文本"
                      style="width: 120px; margin-right: 8px"
                    />
                    <el-input
                      v-model="option.value"
                      placeholder="选项值"
                      style="width: 120px; margin-right: 8px"
                    />
                    <el-button
                      type="danger"
                      link
                      :icon="Delete"
                      @click="removeOption(selectedField, index)"
                    />
                  </div>
                  <el-button type="primary" link :icon="Plus" @click="addOption(selectedField)"
                    >添加选项</el-button
                  >
                </el-form-item>
              </template>
            </el-form>
          </template>
          <el-empty v-else description="请选择字段" />
        </el-card>
      </el-col>
    </el-row>
  </ContentWrap>
  <Correlation />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { Delete, Edit, Plus, QuestionFilled, Rank } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import FormItem from './components/FormItem.vue'
import Correlation from './components/Correlation.vue'

interface Field {
  id: number
  label: string
  used: boolean
  required: boolean
  placeholder: string
  type: 'input' | 'number' | 'select' | 'checkbox' | 'radio' // 新增字段类型
  items: { value: string }[]
  options?: { label: string; value: any }[] // 新增选项配置，用于下拉框、多选框等
}

// 左侧字段列表
const fieldList = ref<Field[]>([
  {
    id: 1,
    label: '姓名',
    type: 'input',
    used: false,
    required: false,
    placeholder: '',
    items: [{ value: '' }]
  },
  {
    id: 2,
    label: '年龄',
    type: 'number',
    used: false,
    required: false,
    placeholder: '',
    items: [{ value: '' }]
  },
  {
    id: 3,
    label: '性别',
    type: 'select',
    used: false,
    required: false,
    placeholder: '',
    items: [{ value: '' }],
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    id: 4,
    label: '爱好',
    type: 'checkbox',
    used: false,
    required: false,
    placeholder: '',
    items: [{ value: '' }],
    options: [
      { label: '阅读', value: 'reading' },
      { label: '运动', value: 'sports' },
      { label: '音乐', value: 'music' }
    ]
  },
  {
    id: 5,
    label: '学历',
    type: 'radio',
    used: false,
    required: false,
    placeholder: '',
    items: [{ value: '' }],
    options: [
      { label: '本科', value: 'bachelor' },
      { label: '硕士', value: 'master' },
      { label: '博士', value: 'phd' }
    ]
  }
])

// 中间表单字段
const formFields = ref<Field[]>([])

// 当前选中的字段
const selectedField = ref<Field | null>(null)

// 克隆字段
const cloneField = (field: Field) => {
  return { ...field, items: [{ value: '' }] }
}

// 添加字段到表单
const onFieldAdd = (evt: any) => {
  const field = formFields.value[evt.newIndex]
  const sourceField = fieldList.value.find((f) => f.id === field.id)
  if (sourceField) {
    sourceField.used = true
    ElMessage.success(`已添加「${sourceField.label}」字段`)
  }
}

// 添加选项
const addOption = (field: Field) => {
  if (!field.options) {
    field.options = []
  }
  field.options.push({ label: '', value: '' })
}

// 删除选项
const removeOption = (field: Field, index: number) => {
  field.options?.splice(index, 1)
}

// 选择字段
const selectField = (field: Field) => {
  selectedField.value = field
}

// 删除字段
const removeField = (field: Field) => {
  const index = formFields.value.findIndex((f) => f.id === field.id)
  if (index > -1) {
    formFields.value.splice(index, 1)
    const sourceField = fieldList.value.find((f) => f.id === field.id)
    if (sourceField) {
      sourceField.used = false
      ElMessage.success(`已移除「${sourceField.label}」字段`)
    }
  }
  if (selectedField.value?.id === field.id) {
    selectedField.value = null
  }
}

// 添加输入项
const addItem = (field: Field) => {
  field.items.push({ value: '' })
}

// 删除输入项
const removeItem = (field: Field, index: number) => {
  field.items.splice(index, 1)
}

// 预览表单
const previewForm = () => {
  console.log('表单数据：', formFields.value)
  ElMessage.success('请在控制台查看表单数据')
}
</script>

<style scoped>
.field-list,
.form-design,
.property-panel {
  min-height: 400px;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  cursor: move;
  transition: all 0.3s;
}

.field-item:hover {
  border-color: #409eff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field-item-used {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #f5f7fa;
}

.field-label {
  flex: 1;
}

.form-container {
  min-height: 100px;
}

.form-item {
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 4px;
  background-color: #f5f7fa;
  transition: all 0.3s;
}

.form-item:hover {
  background-color: #e9ecef;
}

.form-item-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.field-content {
  flex: 1;
}

.field-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.field-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.drag-handle {
  cursor: move;
}

.drag-handle:hover {
  color: #409eff;
}

.ghost-class {
  opacity: 0.5;
  background-color: #e6f1fc;
  border: 1px dashed #409eff;
}
</style>
