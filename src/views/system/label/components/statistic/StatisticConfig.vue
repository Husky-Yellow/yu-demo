<template>
  <div class="flex gap-3 h-full">
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
      <div class="font-bold mb-16px">选择统计字段</div>
      <VueDraggable
        :list="statisticConfigFields"
        :group="{ name: 'fields', pull: 'clone', put: false }"
        :item-key="'uuid'"
        :clone="cloneField"
        :sort="false"
        class="min-h-[100px]"
      >
        <template #item="{ element }">
          <FieldPoolItem :hasKeyString="'uuid'" :element="element" :isFieldUsed="isFieldUsed" />
        </template>
      </VueDraggable>
    </div>
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 flex-1">
      <div class="panel-header">
        <div class="font-bold">统计设置</div>
        <div class="panel-actions">
          <el-button type="primary" @click="addStatistic">添加</el-button>
          <el-button type="danger" :disabled="statistics.length <= 1" @click="removeSelectedStatistic">删除</el-button>
        </div>
      </div>
      <el-form :model="statistics" ref="statFormRef">
        <VueDraggable :list="statistics" :item-key="'uuid'" class="statistic-list">
          <template #item="{ element: item, index: idx }">
            <div
              class="stat-item"
              :class="{ 'stat-item-selected': selectedIndex === idx }"
              @click="handleStatisticClick(idx)"
            >
              <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer" />
              <div class="stat-item-header">
                名称：
                <el-form-item
                  :prop="`${idx}.name`"
                  :rules="getStatisticNameRules(idx)"
                >
                  <el-input
                    v-model="item.name"
                    placeholder="请输入统计名称"
                    class="!w-[200px] mt-18px"
                  />
                </el-form-item>
              </div>

              <VueDraggable
                class="stat-drop-area"
                :list="item.fields"
                :group="{ name: 'fields', pull: false, put: () => item.fields.length === 0 }"
                :item-key="'uuid'"
                @add="(evt) => onFieldDrop(idx, evt)"
              >
                <template #item="{ element: field, index: fieldIndex }">
                  <div class="stat-field-item">
                    <span class="!w-[80px] text-right mr-6px">{{ field.name }}</span>
                    <el-form-item
                      :prop="`${idx}.fields.${fieldIndex}.filterType`"
                      :rules="{ required: true, message: '请选择条件' }"
                    >
                      <el-select v-model="field.filterType" class="!w-[120px] mt-18px mr-6px">
                        <el-option
                          v-for="operatorItem in OperatorOptions"
                          :key="operatorItem.value"
                          :label="operatorItem.label"
                          :value="Number(operatorItem.value)"
                        />
                      </el-select>
                    </el-form-item>

                    <template v-if="isSelectField(field.fieldType)">
                      <el-form-item
                        :prop="`${idx}.fields.${fieldIndex}.data`"
                        :rules="{ required: true, message: '请选择值' }"
                      >
                        <el-select
                          v-model="field.data"
                          :multiple="field.fieldType === FieldType.CHECKBOX"
                          placeholder="请选择"
                          class="!w-220px mt-18px mr-6px"
                        >
                          <el-option
                            v-for="opt in field.selectedOptions"
                            :key="opt.value"
                            :label="opt.label"
                            :value="opt.value"
                          />
                        </el-select>
                      </el-form-item>
                    </template>

                    <template v-else-if="isTreeField(field.fieldType)">
                      <el-form-item
                        :prop="`${idx}.fields.${fieldIndex}.data`"
                        :rules="{ required: true, message: '请选择值' }"
                      >
                        <el-tree-select
                          v-model="field.data"
                          :data="deptList"
                          check-strictly
                          :render-after-expand="false"
                          check-on-click-node
                          class="!w-220px mt-18px mr-6px"
                          :props="treeSelectProps"
                        />
                      </el-form-item>
                    </template>

                    <el-button @click="removeField(idx, fieldIndex)">删除</el-button>
                  </div>
                </template>
                <template #footer>
                  <div v-if="item.fields.length === 0" class="stat-drop-placeholder">
                    请拖入统计字段
                  </div>
                </template>
              </VueDraggable>
            </div>
          </template>
        </VueDraggable>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import { ElInput, ElButton, ElSelect, ElOption, ElTreeSelect } from 'element-plus'
import type { FormInstance, FormItemRule } from 'element-plus'
import * as LabelApi from '@/api/system/label'
import * as DictDataApi from '@/api/system/dict/dict.data'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import { OperatorOptions } from '@/config/constants/enums/label'
import { FieldType } from '@/config/constants/enums/field'
import type { LabelFieldConfig, StatisticItem, StatisticField } from '@/config/constants/enums/fieldDefault'
import { generateUUID } from '@/utils'
import { handleTree2, defaultProps } from '@/utils/tree'

// 类型定义
interface ExtendedStatisticField extends StatisticField {
  selectedOptions?: Array<{ label: string; value: string | number }>
}

interface ExtendedStatisticItem extends StatisticItem {
  fields: ExtendedStatisticField[]
}

// 响应式数据
const { query } = useRoute()
const statisticConfigFields = ref<LabelFieldConfig[]>([])
const selectedIndex = ref<number>(-1)
const deptList = ref<Tree[]>([])
const statistics = ref<ExtendedStatisticItem[]>([{
  uuid: generateUUID(),
  name: '',
  fields: []
}])
const statFormRef = ref<FormInstance>()

// 计算属性
const usedFieldKeys = computed(() => {
  const keys = new Set<string>()
  statistics.value.forEach((stat) => {
    stat.fields.forEach((field) => {
      if (field?.uuid) {
        keys.add(field.uuid)
      }
    })
  })
  return keys
})

const treeSelectProps = computed(() => ({
  ...defaultProps,
  children: 'childList',
  label: 'name'
}))

// 工具函数
const isFieldUsed = (key: string): boolean => {
  return usedFieldKeys.value.has(key)
}

const isSelectField = (fieldType?: FieldType): boolean => {
  return fieldType === FieldType.RADIO || fieldType === FieldType.CHECKBOX
}

const isTreeField = (fieldType?: FieldType): boolean => {
  return fieldType === FieldType.REGION || fieldType === FieldType.TAG
}

const getStatisticNameRules = (idx: number): FormItemRule[] => [
  { required: true, message: '请输入统计名称', trigger: 'blur' },
  { validator: validateNameUnique, trigger: 'blur' },
  { validator: validateFieldsNotEmpty(idx), trigger: 'submit' }
]

// 字段操作
const cloneField = (field: StatisticField): ExtendedStatisticField | false => {
  if (isFieldUsed(field.uuid as string)) {
    return false
  }
  return { ...field, filterType: 1, data: '' }
}

const addStatistic = () => {
  statistics.value.push({ uuid: generateUUID(), name: '', fields: [] })
}

const removeSelectedStatistic = async () => {
  if (statistics.value.length <= 1) return

  const idx = selectedIndex.value
  if (idx === -1) {
    statistics.value.pop()
    return
  }

  const item = statistics.value[idx]
  console.log('removeSelectedStatistic', item)
  if (item?.id) {
    try {
      await LabelApi.deleteCountConfigList({ id: item.id, manageId: query.manageId as string })
      ElMessage.success('删除成功')
      statistics.value.splice(idx, 1)
      selectedIndex.value = -1
    } catch (error) {
      ElMessage.error('删除失败')
    }
  } else {
    statistics.value.splice(idx, 1)
    selectedIndex.value = -1
  }
}

const handleStatisticClick = (idx: number) => {
  selectedIndex.value = idx
}

const removeField = (statIdx: number, fieldIdx: number) => {
  statistics.value[statIdx].fields.splice(fieldIdx, 1)
}

// 字段拖放处理
const onFieldDrop = async (statIdx: number, evt: any) => {
  const fields = statistics.value[statIdx].fields
  const field = fields[0] as ExtendedStatisticField
  if (field) {
    try {
      field.selectedOptions = await getEnumOptions(field)
      field.filterType = field.filterType ?? 1
      field.data = field.data ?? ''
    } catch (error) {
      console.error('获取字段选项失败:', error)
    }
  }
}

// 表单验证
const validateNameUnique = (rule: any, value: any, callback: any) => {
  const index = parseInt(rule.field.split('.')[0], 10)
  if (value && statistics.value.some((item, idx) => item.name === value && idx !== index)) {
    return callback(new Error('统计名称不能重复'))
  }
  callback()
}

const validateFieldsNotEmpty = (idx: number) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!statistics.value[idx].fields || statistics.value[idx].fields.length === 0) {
      return callback(new Error('请拖入统计字段'))
    }
    callback()
  }
}

// 数据获取
const getTree = async () => {
  try {
    const res = await LabelApi.getLabelManageTree({
      labelId: query.lableId as string
    })
    deptList.value = handleTree2(res)
  } catch (error) {
    console.error('获取部门树失败:', error)
  }
}

const getEnumOptions = async (field: ExtendedStatisticField) => {
  try {
    // 标签和区域
    if (isTreeField(field.fieldType)) {
      return deptList.value
    }

    // 单选、多选需要获取字典
    if (isSelectField(field.fieldType)) {
      const res = await LabelApi.getFieldConfigDetail({ id: field.uuid as string })
      const val = res.fieldConfExtDOList?.[0]?.value
      if (val) {
        const data = await DictDataApi.getDictDataPage({
          pageNo: 1,
          pageSize: 10,
          dictType: val
        })
        return data.list
      }
    }
    return []
  } catch (error) {
    console.error('获取枚举选项失败:', error)
    return []
  }
}

// 表单提交
const submitForm = () => {
  if (!statFormRef.value) return

  statFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const submitData = statistics.value.map((item, index) => {
          const [field] = item.fields
          return {
            id: item.id ?? undefined,
            manageId: query.manageId as string,
            fieldId: field?.uuid ?? '',
            name: item.name,
            type: field?.bizType ?? '',
            filterType: field?.filterType ?? 1,
            data: field?.data ?? '',
            sort: index,
          }
        })

        await LabelApi.updateCountConfigList(submitData)
        ElMessage.success('统计配置更新成功')
        await fetchData()
      } catch (error) {
        ElMessage.error('统计配置更新失败')
      }
    } else {
      console.log('表单验证失败')
    }
  })
}

const fetchData = async () => {
  try {
    const [fieldConfigRes, countConfigList] = await Promise.all([
      LabelApi.getFieldConfigListByManageId({ manageId: query.manageId as string }),
      LabelApi.getCountConfigList({ manageId: query.manageId as string })
    ])

    // 处理字段配置
    statisticConfigFields.value = fieldConfigRes
      .filter((item) => isSelectField(item.fieldType) || isTreeField(item.fieldType))
      .map((item) => ({
        ...item,
        uuid: item.id,
        id: undefined
      }))

    // 处理统计配置
    if (countConfigList.length > 0) {
      statistics.value = await Promise.all(
        countConfigList.map(async (item) => {
          const field = fieldConfigRes.find((f) => String(f.id) === String(item.fieldId))
          const selectedOptions = field ? await getEnumOptions(field as ExtendedStatisticField) : []

          return {
            ...item,
            fields: field
              ? [{
                  ...(field as ExtendedStatisticField),
                  uuid: field.id,
                  filterType: item.filterType,
                  data: item.data,
                  bizType: item.type,
                  selectedOptions
                }]
              : []
          }
        })
      )
    }
  } catch (error) {
    console.error('获取数据失败:', error)
    ElMessage.error('获取数据失败')
  }
}

// 生命周期
onMounted(() => {
  fetchData()
  getTree()
})

// 暴露方法
defineExpose({ submitForm })
</script>

<style scoped>
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.panel-actions {
  display: flex;
  gap: 8px;
}

.statistic-list {
  min-height: 100px;
}

.stat-item {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 2px 6px;
  background: #fafbfc;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.stat-item:hover {
  border-color: #409eff;
  background: #f0f9ff;
}

.stat-item-selected {
  border-color: #409eff;
  background: #e6f7ff;
}

.stat-item-header {
  display: flex;
  align-items: center;
}

.stat-drop-area {
  min-height: 40px;
  background: #f5f7fa;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  padding: 4px;
  margin-left: 6px;
  flex: 1;
}

.stat-field-item {
  display: flex;
  align-items: center;
  padding: 2px 8px;
  background: white;
  border-radius: 4px;
  margin-bottom: 4px;
}

.stat-drop-placeholder {
  color: #bbb;
  text-align: center;
  padding: 12px 0;
}

.field-item.sortable-ghost,
.stat-field-item.sortable-ghost,
.stat-item.sortable-ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.field-item.sortable-drag,
.stat-field-item.sortable-drag,
.stat-item.sortable-drag {
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
