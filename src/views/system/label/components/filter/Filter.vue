<template>
  <div class="flex gap-3 h-full">
    <!-- 左侧选择筛选字段区域 -->
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
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
    <div class="right-panel">
      <div class="panel-header">
        <div class="font-bold">设置筛选规则</div>
        <div class="panel-actions">
          <el-button type="primary" @click="addRule">添加</el-button>
          <el-button type="danger" @click="removeLastRule">删除</el-button>
        </div>
      </div>
      <el-form :model="filterRules" ref="filterFormRef" :inline="true">
        <div v-for="(rule, index) in filterRules" :key="rule.uuid" class="rule-item" @click="setClickIndex(rule)">
          <div class="rule-content">
            <el-form-item :prop="`filterRules.${index}.field`" :rules="[{ validator: validateFieldsNotEmpty(rule), trigger: 'submit' }]">
              <div class=" bg-gray-100 border border-dashed border-gray-300 rounded px-2px py-2px w-full mt-18px min-w-300px" @dragover.prevent @drop="(e) => onFieldDrop(e, index)">
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
                 class="!w-240px mt-18px"
               >
                 <el-option
                   v-for="opt in rule.selectedOptions"
                   :key="opt.dictType"
                   :label="opt.label"
                   :value="opt.value"
                 /></el-select>
                 <el-tree-select
                 v-else
                v-model="rule.data"
                :data="deptList"
                check-strictly
                :render-after-expand="false"
                check-on-click-node
                class="!w-240px mt-18px"
                :props="{
                  ...defaultProps,
                  children: 'childList',
                  label: 'name'
                }"
              />
            </el-form-item>
          </div>
          <!-- 且/或按钮 -->
          <div v-if="index < filterRules.length - 1" class="logic-button">
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
import { ElButton, ElSelect, ElOption } from 'element-plus'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import * as LabelApi from '@/api/system/label'
import * as DictDataApi from '@/api/system/dict/dict.data'
import { OperatorOptions, BooleanEnum } from '@/config/constants/enums/label'
import { FieldType } from '@/config/constants/enums/field'
import type { LabelFieldConfig, FilterRuleConfig } from '@/config/constants/enums/fieldDefault'
import { generateUUID } from '@/utils'
import { handleTree2, defaultProps } from '@/utils/tree'
const { query } = useRoute() // 查询参数

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
const filterRules = ref<FilterRuleConfig[]>([
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
  const res = await LabelApi.getFieldConfigDetail({ 'id': row.uuid as string })
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
    console.log(data.list);

    return data.list
  }
  return []
}

const setClickIndex = (rule: FilterRuleConfig) => {
  clickIndex.value = filterRules.value.findIndex((item) => item.uuid === rule.uuid)
}

// 移除字段
function removeField(ruleIndex: number) {
  if (filterRules.value[ruleIndex]) {
    filterRules.value[ruleIndex].fieldId = null
  }
}

/** 获得部门树 */
const getTree = async () => {
  const res = await LabelApi.getLabelManageTree({
    labelId: query.lableId as string
  })
  deptList.value = handleTree2(res)
}

// 添加新规则
function addRule() {
  filterRules.value.push({
    uuid: generateUUID(),
    fieldId: null,
    filterType: BooleanEnum.TRUE,
    data: undefined,
    connectType: BooleanEnum.TRUE,
    selectedOptions: []
  })
}

// 移除最后一个规则
function removeLastRule() {
  if (filterRules.value.length > 1) {
    if (filterRules.value[clickIndex.value]?.uuid) {
      LabelApi.deleteFilterConfList({ id: filterRules.value[clickIndex.value].uuid }).then(() => {
        ElMessage.success('删除成功')
        if (clickIndex.value !== -1) {
          filterRules.value.splice(clickIndex.value, 1)
        } else {
          filterRules.value.pop()
        }
      }).catch(() => {
        ElMessage.error('删除失败')
      })
    } else {
      if (clickIndex.value !== -1) {
        filterRules.value.splice(clickIndex.value, 1)
      } else {
        filterRules.value.pop()
      }
    }
  }
}

// 切换逻辑操作符
function toggleLogic(index: number) {
  const rule = filterRules.value[index]
  rule.connectType = rule.connectType === BooleanEnum.TRUE ? BooleanEnum.FALSE : BooleanEnum.TRUE
}


/**
 * 自定义表单校验规则工厂函数：验证统计项的字段列表是否为空
 * @param idx - 当前统计项的索引
 * @returns 返回一个 Element Plus 的表单校验函数
 */
 const validateFieldsNotEmpty = (item: any) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!item.fieldId) {
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
    if (!item.data) {
      return callback(new Error('请输入值'))
    }
    callback()
  }
}


const fetchData = async () => {
  // todo @zhaokun 单选、多选、组织、标签 需要过滤
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId: query.manageId as string
  })
  const filterRes = await LabelApi.getFilterConfList({
    manageId: query.manageId as string
  })
  filterFields.value = res.filter((item) => item.fieldType === FieldType.RADIO || item.fieldType === FieldType.CHECKBOX || item.fieldType === FieldType.TAG || item.fieldType === FieldType.REGION).map(item => {
    item.uuid = item.id
    delete item.id
    return item
  })
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
        return {
          ...item,
          fieldCode: filterFields.value.find((f) => f.id === item.fieldId)?.code,
          manageId: query.manageId as string,
        }
      })
      LabelApi.updateFilterConfList(submitData).then(() => {
        ElMessage.success('更新成功')
      }).catch(() => {
        ElMessage.error('更新失败')
      })
    } else {
      console.log('error submit!')
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
