<template>
  <ContentWrap>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-alert
          title="仅能删除本次新增字段，保存后字段无法再删除"
          type="info"
          :closable="false"
          show-icon
        />
      </el-col>
      <el-col :span="6" :offset="6">
        <el-button @click="openForm">添加基础字段</el-button>
        <el-button :disabled="multipleSelection.length === 0" type="primary" @click="handleEdit"
          >编辑</el-button
        >
        <el-button :disabled="multipleSelection.length === 0 || !multipleSelection[0]?.id" type="success" @click="handleDelete"
          >删除</el-button
        >
      </el-col>
    </el-row>
    <el-table
      ref="tableRef"
      :data="tableData"
      stripe
      class="field-sortable-table-container"
      row-key="uuid"
      @selection-change="handleSelectionChange"
       :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
    >
      <el-table-column type="selection" width="55" :selectable="selectable" />
      <el-table-column prop="code" label="Code" align="center">
        <template #default="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="字段名称" align="center">
        <template #default="scope">
          <el-button
            type="primary"
            link
            @click="handleRowClick(scope.row)"
          >
          {{ scope.row.name }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="字段说明" align="center" />
      <el-table-column prop="fieldType" label="字段类型" align="center" >
        <template #default="scope">
          {{ FieldTypeLabel[scope.row.fieldType] }}
        </template>
      </el-table-column>
      <el-table-column prop="length" label="字段长度" align="center">
        <template #default="scope">
          {{ scope.row.length }}
        </template>
      </el-table-column>
      <el-table-column prop="encFlag" label="是否加密" align="center">
        <template #default="scope">
          {{ scope.row.encFlag ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="addFlag" label="新增表单" align="center">
        <template #default="scope">
          <el-checkbox v-model="scope.row.addFlag" label="" />
        </template>
      </el-table-column>
      <el-table-column prop="editFlag" label="编辑表单" align="center">
        <template #default="scope">
          <el-checkbox v-model="scope.row.editFlag" label="" />
        </template>
      </el-table-column>
      <el-table-column prop="appViewFlag" label="移动端列表" align="center">
        <template #default="scope">
          <div class="cursor-pointer" @click="handleViewFlag(scope.row, 'appViewFlag')">
            <el-icon v-if="scope.row.appViewFlag"><View /></el-icon>
            <el-icon v-else><Hide /></el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="pcViewFlag" label="管理端列表" align="center">
        <template #default="scope">
          <div class="cursor-pointer" @click="handleViewFlag(scope.row, 'pcViewFlag')">
            <el-icon v-if="scope.row.pcViewFlag"><View /></el-icon>
            <el-icon v-else><Hide /></el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="排序" width="140" align="center">
        <template #default="">
          <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer" />
        </template>
      </el-table-column>
    </el-table>
    <FieldEdit ref="formRef" @update:data="updateData" />
  </ContentWrap>
</template>

<script setup lang="ts">
import * as LabelApi from '@/api/system/label'
import type { TableInstance } from 'element-plus'
import { generateUUID } from '@/utils'
import Sortable from 'sortablejs'
import FieldEdit from './FieldEdit.vue'
import { View, Hide } from '@element-plus/icons-vue'
import { FieldTypeLabel } from '@/config/constants'


const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
const { query } = useRoute() // 查询参数
const emits = defineEmits(['update:data', 'edit', 'row-click', 'delete'])

const tableRef = ref<TableInstance | null>(null)
const multipleSelection = ref<any[]>([])
const sortable = ref(null)
const tableData = ref<LabelApi.LabelFieldConfig[]>([...(props.data as LabelApi.LabelFieldConfig[])])

const selectable = (row: any) => ![1].includes(row.bizType) // todo 系统字段不可点击

// 初始化 Sortable
const initSortable = () => {
  nextTick(() => {
    const tableEl = (tableRef.value as any)?.$el.querySelector(
      '.field-sortable-table-container .el-table__body-wrapper tbody'
    )

    if (tableEl && !sortable.value) {
      sortable.value = new Sortable(tableEl, {
        animation: 150,
        handle: '.el-table__row',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',

        // 开始拖拽
        onStart: () => {
          console.log('开始拖拽')
        },

        // 结束拖拽
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt
          if (oldIndex !== newIndex) {
            // 调整表格数据顺
            const item = tableData.value.splice(oldIndex, 1)[0]
            tableData.value.splice(newIndex, 0, item)
          }
        }
      })
    }
  })
}

const handleSelectionChange = (val: any[]) => {
  multipleSelection.value = val
}

const handleRowClick = (row: any) => {
  formRef.value.open('show', row)
}

const getDataFieldConfListByManageId = async () => {
  const res = await LabelApi.getFieldConfigList({
    manageId: query.id as string
  })
  tableData.value = res.map(item => {
    return {
      ...item,
      uuid: item.id ? item.id : generateUUID()
    }
  })
}



// 生命周期钩子
onMounted(() => {
  initSortable()
  getDataFieldConfListByManageId()
})

onBeforeUnmount(() => {
  // 销毁 Sortable 实例
  if (sortable.value) {
    ;(sortable.value as any).destroy()
    sortable.value = null
  }
})

// 监听数据变化
watch(
  () => props.data,
  (newVal) => {
    tableData.value = [...(newVal as LabelApi.LabelFieldConfig[])]
    // 如果表格已渲染，重新初始化 Sortable
    if (tableRef.value) {
      initSortable()
    }
  },
  { deep: true }
)

// 事件处理
const handleEdit = () => {
  formRef.value.open('edit', multipleSelection.value[0])
}

// 事件处理
const handleDelete = () => {
  const { id, uuid } = multipleSelection.value[0]
  tableData.value = tableData.value.filter((item) => item?.id !== id && item.uuid !== uuid)
}

const updateData = (data) => {
  if (!data.uuid && !data.id) {
    data.uuid = generateUUID();
  }
  const identifier = data.id || data.uuid;
  const index = tableData.value.findIndex(
    item => item.id === identifier || item.uuid === identifier
  );
  // 如果 data 没有 uuid 则生成一个
  if (index !== -1) {
    // 使用展开运算符保留响应式
    tableData.value.splice(index, 1, { ...tableData.value[index], ...data });
  } else {
    tableData.value.push({ ...data });
  }
}

const handleViewFlag = (row: any, flag: string) => {
  row[flag] = !row[flag]
}

const saveTableData = async () => {
  const data = tableData.value.map((item, index) => {
    delete item.uuid
    return {
      ...item,
      sort: index + 1
    }
  })
  handleSelectionChange([])
  await LabelApi.updateFieldConfigList(data)
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = () => {
  formRef.value.open('add', null)
}
defineExpose({ saveTableData })
</script>

<style scoped>
/* 拖拽时的样式 */
.sortable-ghost {
  background-color: #f5f7fa;
  opacity: 0.6;
}

.sortable-chosen {
  background-color: #e6f7ff;
}

.sortable-drag {
  cursor: move;
}
</style>
