<template>
  <div class="flex gap-3 h-full p-2">
    <!-- 左侧选择排序字段区域 -->
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
      <div class="font-bold mb-16px">选择排序字段</div>
      <VueDraggable
        :list="sortFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'id'"
        :clone="cloneField"
        :sort="false"
        class="min-h-[100px]"
        @start="onDragStart"
      >
        <template #item="{ element }">
          <FieldPoolItem :hasKeyString="'id'" :element="element" :isFieldUsed="isFieldUsed" />
        </template>
      </VueDraggable>
    </div>

    <!-- 右侧排序设置区域 -->
    <div class="right-panel">
      <div class="panel-header">
        <div class="font-bold mb-16px">排序设置</div>
        <div class="panel-actions">
          <el-button type="primary" @click="addSortItem">添加</el-button>
          <!-- <el-button type="danger" @click="removeLastSortItem">删除</el-button> -->
        </div>
      </div>
      <div class="overflow-y-auto h-[calc(100vh-340px)]">
        <el-form :model="formModel.sortItems" ref="sortFormRef" label-width="100px">
          <div v-for="(item, index) in formModel.sortItems" :key="item.uuid" class="sort-item relative">
            <div class="sort-item-header">
              <span>排序顺位{{ index + 1 }}</span>
            </div>
            <el-form-item label="排序类型" :prop="`sortItems.${index}.type`">
              <el-radio-group v-model="item.type">
                <el-radio :value="0">数据添加时间</el-radio>
                <el-radio :value="1">数据修改时间</el-radio>
                <el-radio :value="2">自定义排序</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-if="item.type === 2"
              label="排序字段"
              :prop="`sortItems.${index}.field`"
              :rules="[{ validator: validateFieldsNotEmpty(item), trigger: 'submit' }]"
            >
              <div class="min-h-[20px] bg-gray-100 border border-dashed border-gray-300 rounded px-2 py-2 w-full" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
                <div v-if="item.field" class="sort-field-item">
                  <span>{{ item.field.name }}</span>
                  <el-button type="danger" size="small" circle @click="removeField(index)">
                    <Icon icon="ep:close" />
                  </el-button>
                </div>
                <div v-else class="text-[#bbb] text-center py-2 px-0"> 请输入排序字段 </div>
              </div>
            </el-form-item>
            <el-form-item label="排序规则" :prop="`sortItems.${index}.rule`">
              <el-select v-model="item.rule" placeholder="请选择排序规则">
                <el-option label="升序" :value="1" />
                <el-option label="降序" :value="0" />
              </el-select>
            </el-form-item>
            <el-button v-show="index !== 0" @click.stop="removeSelectedStatistic(index)" size="small" class="absolute top-0 right-0 z-10" type="danger" :icon="Delete" circle />
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import {
  Delete,
} from '@element-plus/icons-vue'
import * as FieldConfApi from '@/api/system/data/field-conf'
import * as SortConfApi from '@/api/system/data/sort-conf'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import { ElButton, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus'
import type { FormInstance } from 'element-plus'
import type { LabelFieldConfig, SortItem } from '@/config/constants/enums/fieldDefault'
import { generateUUID } from '@/utils'

const { query } = useRoute() // 查询参数

// 左侧可选字段
const sortFields = ref<LabelFieldConfig[]>([])

const formModel = ref<{ sortItems: SortItem[] }>({
  sortItems: [
    {
      uuid: generateUUID(),
      type: 0,
      rule: 1,
      field: null,
      manageId: query.manageId as string
    }
  ]
})

const sortFormRef = ref<FormInstance>()
// const clickIndex = ref<number>(-1)
// 当前拖拽的字段
const draggedField = ref<LabelFieldConfig | null>(null)

// 检查字段是否已被使用
const isFieldUsed = (fieldValue: string) => {
  return formModel.value.sortItems.some((item) => item.field?.id === fieldValue)
}

// 克隆字段函数，如果字段已使用则返回false阻止拖拽
function cloneField(field: LabelFieldConfig) {
  return isFieldUsed(field.id as string) ? false : { ...field }
}

function addSortItem() {
  formModel.value.sortItems.push({
    uuid: generateUUID(),
    type: 2,
    rule: 1,
    field: null,
    manageId: query.manageId as string
  })
}

const removeSelectedStatistic = (index: number) => {
  const items = formModel.value.sortItems;
  if (items.length <= 1) return;

  const removeAt = (index: number) => items.splice(index, 1);
  const removeLast = () => items.pop();

  if (index !== -1 && items[index]?.id) {
    SortConfApi.deleteSortConfList({ id: items[index].id as string, manageId: query.manageId as string })
      .then(() => {
        ElMessage.success('删除成功');
        removeAt(index);
      })
      .catch(() => {
        ElMessage.error('删除失败');
      });
  } else if (index !== -1) {
    removeAt(index);
  } else {
    removeLast();
  }
}

// 开始拖拽时保存字段数据
function onDragStart(evt: any) {
  const field = sortFields.value[evt.oldIndex]
  if (field && !isFieldUsed(field.id as string)) {
    draggedField.value = field
  }
}

// 修改 onFieldDrop 函数
function onFieldDrop(e: DragEvent, sortIndex: number) {
  e.preventDefault()
  if (draggedField.value && !isFieldUsed(draggedField.value.id as string)) {
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
      const submitData = formModel.value.sortItems.map((item, index) => ({
        fieldId: item.field?.id,
        sort: index,
        manageId: query.manageId as string,
        rule: item.rule,
        type: item.type,
        id: item?.id || ''
      })) as SortItem[]
      SortConfApi.updateSortConfList(submitData).then(() => {
        ElMessage.success('排序配置更新成功')
        fetchData()
      })
      .catch(() => {
        ElMessage.error('排序配置更新失败')
      })
    } else {
      console.error('error submit!')
    }
  })
}

const fetchData = async () => {
  const res = await FieldConfApi.getFieldConfigListByManageId({
    manageId: query.manageId as string
  })
  sortFields.value = res
  const sortConfList = await SortConfApi.getSortConfList({
    manageId: query.manageId as string
  })
  if (sortConfList.length > 0) {
    formModel.value.sortItems = sortConfList.map((item) => {
      return {
        ...item,
        field: sortFields.value.find((f) => f.id === item.fieldId) || null
      }
    })
  }
}


// 生命周期钩子
onMounted(() => {
  fetchData()
})

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
  margin-bottom: 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 12px 12px 0;
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
