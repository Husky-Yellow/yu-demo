<template>
  <div class="flex gap-3 h-full p-2">
    <!-- 左侧选择筛选字段区域 -->
    <div class="bg-white rounded-2 shadow p-6 w-60">
      <div class="font-bold mb-16px">选择筛选字段</div>
      <VueDraggable
        :list="filterFields"
        :group="{ name: 'fields', pull: cloneField, put: false }"
        :item-key="'uuid'"
        :clone="cloneField"
        :sort="false"
        class="min-h-[100px]"
        @start="onDragStart"
      >
        <template #item="{ element }">
          <FieldPoolItem :hasKeyString="'uuid'" :element="element" :isFieldUsed="isFieldUsed" />
        </template>
      </VueDraggable>
    </div>

    <!-- 右侧设置筛选规则区域 -->
    <div class="flex-1 bg-white rounded-2 shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <div class="font-bold">设置筛选规则</div>
        <div class="flex gap-2">
          <el-button type="primary" @click="addRule">添加</el-button>
          <!-- <el-button type="danger" @click="removeLastRule">删除</el-button> -->
        </div>
      </div>
      <el-form :model="filterRules" ref="filterFormRef" :inline="true">
        <div v-for="(rule, index) in filterRules" :key="rule.uuid" class="rule-item relative" @click="setClickIndex(rule)">
          <div class="rule-content">
            <el-form-item :prop="`filterRules.${index}.field`" :rules="[{ validator: validateFieldsNotEmpty(rule), trigger: 'submit' }]">
              <div class="bg-gray-100 border border-dashed border-gray-300 rounded px-2px py-2px w-full mt-18px min-w-400px" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
                <div v-if="rule.fieldId" class="field-display">
                  <span>{{ getFieldLabel(rule.fieldId) }}</span>
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
            <el-form-item :prop="`filterRules.${index}.filterType`">
              <el-select class="!w-[160px] mt-18px" v-model="rule.filterType" placeholder="选择操作符">
                <el-option
                  v-for="operatorItem in OperatorOptions"
                  :key="operatorItem.value"
                  :label="operatorItem.label"
                  :value="operatorItem.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item :prop="`filterRules.${index}.data`" :rules="[{ validator: validateValueNotEmpty(rule), trigger: 'submit' }]">
              <!-- 单选、多选、组织、标签 -->
              <el-select
                 v-if="getFieldType(rule.fieldId) === FieldType.RADIO || getFieldType(rule.fieldId) === FieldType.CHECKBOX"
                 v-model="rule.data"
                 :multiple="getFieldType(rule.fieldId) === FieldType.CHECKBOX"
                 placeholder="请选择"
                 class="!w-260px mt-18px"
               >
                 <el-option
                   v-for="opt in rule.selectedOptions"
                   :key="opt.dictType"
                   :label="opt.label"
                   :value="opt.value"
                 />
                </el-select>
                <el-tree-select
                  v-else
                  v-model="rule.data"
                  :data="deptList"
                  check-strictly
                  :render-after-expand="false"
                  check-on-click-node
                  class="!w-260px mt-18px"
                  :props="{
                    ...defaultProps,
                    children: 'childList',
                    label: 'name'
                  }"
                />
            </el-form-item>
          </div>
          <el-button v-show="index !== 0" @click.stop="removeSelectedStatistic(index)" size="small" class="absolute top-0 right-0 z-10" type="danger" :icon="Delete" circle />
          <!-- 且/或按钮 -->
          <div v-if="index < filterRules.length - 1" class="flex justify-center my-1">
            <el-button type="primary" plain @click="toggleLogic(index)">
              {{ rule.connectType === BooleanEnum.TRUE ? '且' : '或' }}
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import type { FormInstance } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import * as FieldConfApi from '@/api/system/data/field-conf'
import * as LabelManageApi from '@/api/system/data/label-manage'
import * as DictDataApi from '@/api/system/dict/dict.data'
import * as ConfApi from '@/api/system/data/conf'
import { OperatorOptions, BooleanEnum } from '@/config/constants/enums/label'
import { FieldType } from '@/config/constants/enums/field'
import type { LabelFieldConfig } from '@/config/constants/enums/fieldDefault'
import { generateUUID } from '@/utils'
import { handleTree2, defaultProps } from '@/utils/tree'

const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:tab'])

// 左侧可选字段
const filterFields = ref<LabelFieldConfig[]>([])
const filterFormRef = ref<FormInstance>()
const clickIndex = ref<number>(-1)
const deptList = ref<Tree[]>([])
const defaultItem =  {
    uuid: generateUUID(),
    fieldId: null,
    filterType: BooleanEnum.TRUE,
    data: undefined,
    connectType: BooleanEnum.TRUE,
    selectedOptions: []
  }
// 右侧规则列表
const filterRules = ref<ConfApi.FilterRuleConfig[]>([
  {
    ...defaultItem
  }
])
// 当前拖拽的字段
const draggedField = ref<LabelFieldConfig | null>(null)

// 检查字段是否已被使用
const isFieldUsed = (fieldKey: string) => {
  return filterRules.value.some((rule) => rule.fieldId === fieldKey)
}

// 获取字段显示标签
const getFieldLabel = (fieldKey: string) => {
  return filterFields.value.find((f) => f.uuid === fieldKey)?.name || fieldKey
}

const getFieldType = (fieldKey: string | null) => {
  return filterFields.value.find((f) => f.uuid === fieldKey)?.fieldType
}

// 开始拖拽时保存字段数据
function onDragStart(evt: any) {
  const field = filterFields.value[evt.oldIndex]
  if (field && !isFieldUsed(field.uuid as string)) {
    draggedField.value = field
  }
}

// 克隆字段函数
function cloneField(field: LabelFieldConfig) {
  return isFieldUsed(field.uuid!) ? false : { ...field }
}

// 字段放置处理
async function onFieldDrop(e: DragEvent, ruleIndex: number) {
  e.preventDefault()
  if (draggedField.value && !isFieldUsed(draggedField.value.uuid as string)) {
    filterRules.value[ruleIndex].fieldId = draggedField.value.uuid as string
    const filed = filterFields.value.find((f) => f.uuid === draggedField.value?.uuid)

    if(filed){
      filterRules.value[ruleIndex].selectedOptions = await getEnumOptions(filed)
    }
    draggedField.value = null
  }
}

const getEnumOptions = async (row) => {
  if(row.fieldType === FieldType.REGION || row.fieldType === FieldType.TAG){
    return deptList.value
  }
  // 单选、多选需要获取字典
  const res = await FieldConfApi.getFieldConfigDetail({ 'id': row.uuid as string })
  filterFields.value.forEach((item) => {
    if(item.uuid === row.uuid){
      item = {
        ...item,
        ...res
      }
    }
  })
  const val = res.fieldConfExtDOList?.[0]?.value
  if(val){
    const data = await DictDataApi.getDictDataPage({
      pageNo: 1,
      pageSize: 10,
      dictType: val,
    })

    return data.list
  }
  return []
}

const setClickIndex = (rule: ConfApi.FilterRuleConfig) => {
  clickIndex.value = filterRules.value.findIndex((item) => item.uuid === rule.uuid)
}

// 移除字段
const removeField = (ruleIndex: number) => {
  if (filterRules.value[ruleIndex]) {
    filterRules.value[ruleIndex].fieldId = null
  }
}

/** 获得部门树 */
const getTree = async () => {
  const res = await LabelManageApi.getLabelManageTree({
    labelId: query.lableId as string
  })
  deptList.value = handleTree2(res)
}

// 添加新规则
const addRule = () => {
  filterRules.value.push({
    uuid: generateUUID(),
    fieldId: null,
    filterType: BooleanEnum.TRUE,
    data: undefined,
    connectType: BooleanEnum.TRUE,
    selectedOptions: []
  })
}

const removeSelectedStatistic = (index: number) => {
  const items = filterRules.value;
  if (items.length <= 1) return;

  const removeAt = (index: number) => items.splice(index, 1);
  const removeLast = () => items.pop();

  if (index !== -1 && items[index]?.uuid) {
    ConfApi.deleteFilterConfList({ id: items[index].uuid as string, manageId: query.manageId as string })
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


// 切换逻辑操作符
const toggleLogic = (index: number) => {
  const rule = filterRules.value[index]
  rule.connectType = rule.connectType === BooleanEnum.TRUE ? BooleanEnum.FALSE : BooleanEnum.TRUE
}


/**
 * 验证筛选字段是否已选择
 */
const validateFieldsNotEmpty = (item: ConfApi.FilterRuleConfig) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.fieldId) {
      return callback(new Error('请拖入筛选字段'))
    }
    callback()
  }
}

/**
 * 验证筛选值是否已输入
 */
const validateValueNotEmpty = (item: ConfApi.FilterRuleConfig) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.data) {
      return callback(new Error('请输入筛选值'))
    }
    callback()
  }
}


const fetchData = async () => {
  const res = await FieldConfApi.getFieldConfigListByManageId({
    manageId: query.manageId as string
  })
  const filterRes = await ConfApi.getFilterConfList({
    manageId: query.manageId as string
  })

  const supportedFieldTypes = [FieldType.RADIO, FieldType.CHECKBOX, FieldType.TAG, FieldType.REGION]
  filterFields.value = res
    .filter((item) => supportedFieldTypes.includes(item.fieldType))
    .map(item => ({
      ...item,
      uuid: item.id
    }))

  filterRules.value = filterRes.length
  ? await Promise.all(
      filterRes.map(async (item) => {
        const field = filterFields.value.find((f) => f.uuid === item.fieldId)
        if (field) {
          item.selectedOptions = await getEnumOptions(field) ?? []
        }
        return item
      })
    )
  : [defaultItem]
}

const submitForm = () => {
  if (!filterFormRef.value) return
  filterFormRef.value.validate((valid) => {
    if (valid) {
      const submitData = filterRules.value.map((item) => {
        const { selectedOptions, ...itemWithoutOptions } = item
        const field = filterFields.value.find((f) => f.uuid === item.fieldId)
        return {
          ...itemWithoutOptions,
          fieldCode: field?.code,
          manageId: query.manageId as string,
        }
      })
      ConfApi.updateFilterConfList(submitData).then(() => {
        ElMessage.success('更新成功')
      }).catch(() => {
        ElMessage.error('更新失败')
      }).finally(() => {
        emits('update:tab', false)
      })
    } else {
      console.error('error submit!')
    }
  })
}
// 生命周期钩子
onMounted(() => {
  fetchData()
  getTree()
})

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
