<template>
  <div class="flex gap-3 h-full">
    <div class="bg-white rounded-[6px] shadow-[0_2px_8px_#f0f1f2] p-4 w-[240px]">
      <div class="font-bold mb-16px">选择统计字段</div>
      <VueDraggable
        :list="fields"
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
          <el-button type="danger" @click="removeLastStatistic">删除</el-button>
        </div>
      </div>
      <el-form :model="statistics" ref="statFormRef">
        <VueDraggable :list="statistics" :item-key="'id'" class="statistic-list">
          <template #item="{ element: item, index: idx }">
            <div class="stat-item" @click="handleStatisticClick(idx)">
              <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer" />
              <div class="stat-item-header">
                名称：
                <el-form-item
                  :prop="`${idx}.name`"
                  :rules="[
                    { required: true, message: '请输入统计名称', trigger: 'blur' },
                    { validator: validateNameUnique, trigger: 'blur' },
                    { validator: validateFieldsNotEmpty(idx), trigger: 'submit' }
                  ]"
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
                :item-key="'key'"
                @add="(evt) => onFieldDrop(idx, evt)"
              >
                <template #item="{ element, index }">
                  <div class="stat-field-item">
                    <!-- todo 这里要改成标签类型 -->
                    <span class="!w-[80px] text-right mr-6px">{{ element.name }}</span>
                    <el-form-item
                      :prop="`${idx}.fields.${index}.filterType`"
                      :rules="{ required: true, message: '请选择条件' }"
                    >
                      <el-select v-model="element.filterType" class="!w-[120px] mt-18px mr-6px">
                        <el-option
                          v-for="operatorItem in OperatorOptions"
                          :key="operatorItem.value"
                          :label="operatorItem.label"
                          :value="Number(operatorItem.value)"
                        />
                      </el-select>
                    </el-form-item>
                    <template v-if="element.type === 'select'">
                      <el-form-item
                        :prop="`${idx}.fields.${index}.value`"
                        :rules="{ required: true, message: '请选择值' }"
                      >
                        <el-select v-model="element.value" class="!w-[200px] mt-18px mr-6px">
                          <el-option
                            v-for="opt in element.options"
                            :key="opt.value"
                            :label="opt.label"
                            :value="opt.value"
                          />
                        </el-select>
                      </el-form-item>
                    </template>
                    <template v-else>
                      <el-form-item
                        :prop="`${idx}.fields.${index}.value`"
                        :rules="{ required: true, message: '请选择值' }"
                      >
                        <el-input v-model="element.value" class="!w-[200px] mt-18px mr-6px" />
                      </el-form-item>
                    </template>
                    <el-button @click="removeField(idx, index)">删除</el-button>
                  </div>
                </template>
                <template #footer>
                  <div v-if="item.fields.length === 0" class="stat-drop-placeholder"
                    >请拖入统计字段</div
                  >
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
import { ElInput, ElButton, ElSelect, ElOption } from 'element-plus'
import type { FormInstance } from 'element-plus'
import * as LabelApi from '@/api/system/label'
import FieldPoolItem from '../common/FieldPoolItem.vue'
import { OperatorOptions } from '@/config/constants/enums/label'
import type { LabelFieldConfig, StatisticItem, StatisticField } from '@/config/constants/enums/fieldDefault'
import { pick } from 'lodash-es'

const { query } = useRoute() // 查询参数
// 示例字段
const fields = ref<LabelFieldConfig[]>([])
const slectIndex = ref<number>(-1)
/** 统计项列表：用户配置的统计规则 */
const statistics = ref<StatisticItem[]>([{
  uuid: Date.now(),
  name: '',
  fields: []
}])
const statFormRef = ref<FormInstance>()

/** 计算所有统计项中已使用的字段的 key 集合 */
const usedFieldKeys = computed(() => {
  const keys = new Set<string>()
  statistics.value.forEach((stat) => {
    stat.fields.forEach((field) => {
      keys.add(field.uuid as string)
    })
  })
  return keys
})

/**
 * 检查指定 key 的字段是否已被使用
 * @param key - 字段的 key
 * @returns 如果已使用则返回 true，否则返回 false
 */
function isFieldUsed(key: string): boolean {
  return usedFieldKeys.value.has(key)
}

/**
 * 克隆字段到统计项中。如果字段已被使用，则不允许克隆。
 * @param field - 要克隆的字段
 * @returns 克隆后的字段对象，如果字段已使用则返回 false
 */
function cloneField(field: StatisticField): StatisticField | false {
  if (isFieldUsed(field.uuid as string)) {
    return false
  }
  return { ...field, filterType: 1, value: '' }
}

/** 添加一个新的空统计项 */
function addStatistic() {
  statistics.value.push({ uuid: Date.now(), name: '', fields: [] })
}

/** 删除最后一个统计项 */
function removeLastStatistic() {
  if (statistics.value.length > 0) {
    if (slectIndex.value >= 0 && slectIndex.value < statistics.value.length) {
      statistics.value.splice(slectIndex.value, 1)
      // 删除后重置选择索引
      slectIndex.value = -1
    } else {
      statistics.value.pop()
    }
  }
}

const handleStatisticClick = (idx: number) => {
  slectIndex.value = idx
}

/**
 * 从指定的统计项中删除一个字段
 * @param statIdx - 统计项的索引
 * @param fieldIdx - 字段的索引
 */
function removeField(statIdx: number, fieldIdx: number) {
  statistics.value[statIdx].fields.splice(fieldIdx, 1)
}

/**
 * 处理字段拖放到统计项的事件
 * @param statIdx - 目标统计项的索引
 * @param evt - 拖放事件对象，包含添加的元素信息
 */
 function onFieldDrop(statIdx: number, evt: any) {
  const field = statistics.value[statIdx].fields[evt.newIndex]
  if (field) {
    if (field.filterType === undefined) field.filterType = 1
    if (field.value === undefined) field.value = ''
  }
}

/**
 * 自定义表单校验规则：验证统计名称是否唯一
 * @param rule - 校验规则
 * @param value - 当前输入框的值
 * @param callback - 回调函数
 */
const validateNameUnique = (rule: any, value: any, callback: any) => {
  const index = parseInt(rule.field.split('.')[0], 10)
  if (value && statistics.value.some((item, idx) => item.name === value && idx !== index)) {
    return callback(new Error('统计名称不能重复'))
  }
  callback()
}

/**
 * 自定义表单校验规则工厂函数：验证统计项的字段列表是否为空
 * @param idx - 当前统计项的索引
 * @returns 返回一个 Element Plus 的表单校验函数
 */
const validateFieldsNotEmpty = (idx: number) => {
  return (_rule: any, _value: any, callback: any) => {
    if (!statistics.value[idx].fields || statistics.value[idx].fields.length === 0) {
      return callback(new Error('请拖入统计字段'))
    }
    callback()
  }
}

/**
 * 触发表单校验，并处理校验结果。
 * 这是暴露给父组件的方法。
 */
const submitForm = () => {
  if (!statFormRef.value) return
  statFormRef.value.validate((valid) => {
    if (valid) {
      console.log(statistics.value)
      const submitData = statistics.value.map((item, index) => {
        console.log(item.fields);

        const obj = pick({
          ...item,
          ...item.fields[0]
        }, ['id', 'manageId', 'formId','fieldId','name','type','filterType','bizType'])
        console.log(obj);

        return {
          ...obj,
          type: item.type ||item.fields[0]?.bizType,
          sort: index,
          manageId: query.labelId as string,
        }
      }) as unknown as StatisticItem[]
      console.log(submitData)
      LabelApi.updateCountConfigList(submitData).then(() => {
        ElMessage.success('统计配置更新成功')
      }).catch(() => {
        ElMessage.error('统计配置更新失败')
      })
    } else {
      console.log('error submit!')
    }
  })
}

const fetchData = async () => {
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId: query.labelId as string
  })
  const countConfigList = await LabelApi.getCountConfigList({
    manageId: query.labelId as string
  })
  fields.value = res.map((item) => {
    delete item.id
    item.uuid = item.id
    return item
  })

  if (countConfigList.length > 0) {
    statistics.value = countConfigList.map((item) => ({
      ...item,
      fields: [item]
    })) as unknown as StatisticItem[]
  }

  console.log(statistics.value)
}


// 生命周期钩子
onMounted(() => {
  fetchData()
})

/** 向父组件暴露 submitForm 方法 */
defineExpose({ submitForm })
</script>

<style scoped>
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
