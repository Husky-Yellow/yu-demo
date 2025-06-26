<template>
  <div>
    <div class="flex justify-end mb-2">
      <el-button type="primary" @click="showDialog = true">添加</el-button>
      <el-button type="danger" @click="removeSelected" :disabled="!selectedRowKeys.length"
        >删除</el-button
      >
      <el-button @click="showPreviewDialog = true">预览</el-button>
    </div>
    <el-table
      row-key="uuid"
      ref="tableRef"
      class="query-sortable-table-container"
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="onSelectionChange"
      :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
    >
      <el-table-column type="selection" width="40" />
      <el-table-column label="查询字段" prop="label">
        <template #default="{ row }">
          <div class="flex flex-col">
            <span>{{ row.field.map(f => f.name).join('、') }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="提示文字" prop="fieldType">
        <template #default="{ row }">
          <el-input v-if="row.fieldType === FieldType.TEXT || row.fieldType === FieldType.NUMBER" v-model="row.hint" size="small" placeholder="请输入提示文字" />
          <!-- todo @zhaokun 多选、单选、日期 控件-->
        </template>
      </el-table-column>
      <el-table-column label="查询类型" prop="queryType">
        <template #default="{ row }">
          <el-radio-group v-model="row.queryType">
            <el-radio v-if="row.fieldType === FieldType.TEXT || row.fieldType === FieldType.NUMBER" :value="0"
              >搜索</el-radio
            >
            <template v-else-if="row.fieldType === 'enum'">
              <el-radio :value="1">单选</el-radio>
              <el-radio :value="2">多选</el-radio>
            </template>
            <template v-else-if="row.fieldType === 'date'">
              <el-radio :value="3">时间</el-radio>
              <el-radio :value="4">时间区间</el-radio>
            </template>
          </el-radio-group>
        </template>
      </el-table-column>
      <el-table-column label="默认值" prop="defaultValue">
        <template #default="{ row }">
          <!-- 搜索：输入框 -->
          <el-input v-if="row.queryType === 0" v-model="row.defaultValue" size="small" placeholder="请输入默认值" />
          <!-- todo @zhaokun 多选、单选、日期 控件  默认值-->
          <!-- 单选/多选：下拉框 -->
          <el-select
            v-else-if="row.queryType === 1 || row.queryType === 2"
            v-model="row.defaultValue"
            size="small"
            :multiple="row.queryType === 2"
            placeholder="请选择"
            style="width: 120px"
          >
            <el-option
              v-for="opt in getEnumOptions(row.key)"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"
            />
          </el-select>
          <!-- 时间/时间区间：时间选择器 -->
          <el-date-picker
            v-else-if="row.queryType === 3 || row.queryType === 4"
            v-model="row.defaultValue"
            type="date"
            placeholder="请选择日期"
            size="small"
            style="width: 140px"
          />
          <el-date-picker
            v-else-if="row.queryType === 5"
            v-model="row.defaultValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
            style="width: 220px"
          />
          <div v-else></div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button link type="primary" v-if="row.queryType === 0" @click="openSubFieldDialog(row)">
            添加字段
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="排序" width="60">
        <template #default="">
          <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 主字段选择弹窗 -->
    <FieldSelectDialog
      v-model="showDialog"
      :fieldList="allFields"
      :selectedKeys="tableData.map((i) => i.uuid!)"
      @confirm="addFields"
    />
    <!-- 子字段选择弹窗 -->
    <SubFieldSelectDialog
      v-model="showSubFieldDialog"
      :field-list="allFields"
      :excluded-keys="subFieldExcludedKeys"
      :selected-keys-prop="currentRow?.field?.map((f) => f.uuid!) || []"
      @confirm="addSubFields"
    />
    <!-- 预览弹窗 -->
    <el-dialog v-model="showPreviewDialog" title="预览" width="80%">
      <QueryPreview :query-fields="tableData" :enum-options="getEnumOptions" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { ElTable } from 'element-plus'
import * as LabelApi from '@/api/system/label'
import FieldSelectDialog from '../common/FieldSelectDialog.vue'
import SubFieldSelectDialog from './SubFieldSelectDialog.vue'
import QueryPreview from './QueryPreview.vue'
import Sortable from 'sortablejs'
import type { LabelFieldConfig, QueryTableRow, QueryResItem } from '@/config/constants/enums/fieldDefault'
import { FieldType } from '@/config/constants/enums/field'

// 单选、多选、区域、标签为单选或者多选  日期和日期区间为日期或者日期区间  文本和数字可以多个字段合并查询
const fieldTypeLabelMap = {
  [FieldType.TEXT]: 0,
  [FieldType.NUMBER]: 0,
  [FieldType.RADIO]: 1,
  [FieldType.CHECKBOX]: 2,
  [FieldType.DATE]: 3,
  [FieldType.DATE_RANGE]: 4,
  [FieldType.ADDRESS]: 0,
  [FieldType.REGION]: 0,
  [FieldType.TAG]: 0,
  [FieldType.ATTACHMENT]: 0,
}

const { query } = useRoute() // 查询参数
const message = useMessage()
// 所有字段
const allFields = shallowRef<LabelFieldConfig[]>([])
// 表格数据
const tableData = ref<QueryTableRow[]>([])
const showDialog = ref<boolean>(false)
const showSubFieldDialog = ref<boolean>(false)
const showPreviewDialog = ref<boolean>(false)
const currentRow = ref<QueryTableRow | null>(null) // 当前行
const selectedRowKeys = ref<string[]>([])
const tableRef = ref<InstanceType<typeof ElTable>>()
const sortable = ref(null)

const subFieldExcludedKeys = computed(() => {
  // 只排除所有已在主表中的字段
  const mainKeys = tableData.value.map((i) => i.uuid).filter((id): id is string => id !== undefined)
  return mainKeys
})

function addFields(ids: string[]) {
  const existKeysSet = new Set(tableData.value.map((i) => i.uuid))
  const toAdd = allFields.value.filter((f) => f.uuid && ids.includes(f.uuid) && !existKeysSet.has(f.uuid))
  toAdd.forEach(f => {
    tableData.value.push({
      ...f,
      field: [{...f}],
      queryType: fieldTypeLabelMap[f.fieldType],
      defaultValue: '',
      hint: '',
      sort: 0,
    })
  })
}


function removeSelected() {
  ElMessageBox.confirm('确定删除吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    LabelApi.deleteQueryConfList({ ids: selectedRowKeys.value }).then(() => {
    tableData.value = tableData.value.filter((row) => !selectedRowKeys.value.includes(row.uuid!))
    selectedRowKeys.value = []
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.error('删除失败')
  })
  })
}

function onSelectionChange(rows: QueryTableRow[]) {
  selectedRowKeys.value = rows.map((r) => r.uuid!)
}

function openSubFieldDialog(row: QueryTableRow) {
  currentRow.value = row
  showSubFieldDialog.value = true
}

function addSubFields(ids: string[]) {
  if (!currentRow.value) return
  const toAdd = allFields.value.filter((f) => ids.includes(f.uuid!))
  currentRow.value.field = toAdd
  showSubFieldDialog.value = false
}

// 初始化 Sortable
const initSortable = () => {
  nextTick(() => {
    const tableEl = (tableRef.value as any)?.$el.querySelector(
      '.query-sortable-table-container .el-table__body-wrapper tbody'
    )

    if (tableEl && !sortable.value) {
      sortable.value = new Sortable(tableEl, {
        animation: 150,
        handle: '.el-table__row',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',

        onStart: () => {},

        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt
          if (oldIndex !== newIndex) {
            const item = tableData.value.splice(oldIndex, 1)[0]
            tableData.value.splice(newIndex, 0, item)
          }
        }
      })
    }
  })
}

const fetchData = async () => {
  const res = await LabelApi.getFieldConfigListByManageId({
    manageId: query.manageId as string
  })
  const queryConfList = await LabelApi.getQueryConfList({
    manageId: query.manageId as string
  })
  allFields.value = res.map(item => {
    item.uuid = item.id
    delete item.id
    return item
  })

  tableData.value = (queryConfList || []).map(item => {
    const field = item.fieldIds ? allFields.value.filter(f => item.fieldIds?.split(',').includes(f.uuid!)) : []
    return {
    ...item,
    fieldType: field[0]?.fieldType,
    field,
  }
  }) as QueryTableRow[]
}

// 生命周期钩子
onMounted(() => {
  initSortable()
  fetchData()
})

const submitForm = async () => {
  const submitData: QueryResItem[] = tableData.value.map((row, index) => {
    return {
      fieldIds: row.field?.map(f => f.uuid!).join(',') || '',
      fieldCodes: row.field?.map(f => f.code).join(',') || '',
      queryType: row.queryType,
      sort: index,
      defaultValue: row.defaultValue,
      hint: row.hint,
      manageId: query.manageId as string,
      id: row.id,
    }
  })
  LabelApi.updateQueryConfList(submitData).then(() => {
    ElMessage.success('更新成功')
  }).catch(() => {
    ElMessage.error('更新失败')
  })
}

defineExpose({ submitForm })


// todo @zhaokun 要处理
function getEnumOptions(key) {
  const map = {
    idType: [
      { label: '身份证', value: 'idcard' },
      { label: '护照', value: 'passport' }
    ],
    level: [
      { label: '一级', value: '1' },
      { label: '二级', value: '2' }
    ],
    gender: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ],
    status: [
      { label: '启用', value: 'enable' },
      { label: '禁用', value: 'disable' }
    ]
  }
  return map[key] || []
}
</script>
