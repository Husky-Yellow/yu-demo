<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-key="row => row.id"
    @selection-change="handleSelectionChange"
    v-loading="loading"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="序号" type="index" width="55" />
    <el-table-column prop="mobile" label="账号" />
    <el-table-column prop="nickname" label="姓名" />
    <el-table-column prop="deptName" label="所属组织" >
      <template #default="scope">
        <span>{{ deptTree.get(scope.row.deptId) }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="账号状态">
      <template #default="scope">
        <el-switch
          v-model="scope.row.status"
             :active-value="CommonStatusEnum.ENABLE"
          :inactive-value="CommonStatusEnum.DISABLE"
          @change="handleStatusChange(scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="deptId" label="持有岗位">
      <template #default="scope">
        {{scope.row.deptId ?'已加入':"未加入" }}
      </template>
    </el-table-column>
    <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button link type="primary" @click="handleDelete(scope.row)" danger>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineOptions({ name: 'SystemSubscriberSubscriberTable' })
import { dateFormatter } from '@/utils/formatTime'
import { CommonStatusEnum } from '@/utils/constants'

defineProps({
  tableData: {
    type: Array,
    required: true,
  },
  deptTree: {
    type: Map<number, string>,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['edit', 'delete', 'select-change','status-change']);
const selectedRows = ref<never[]>([]);

const handleEdit = (row: any) => emits('edit', row);
const handleDelete = (row: any) => emits('delete', row);
const handleStatusChange = (row: any) => emits('status-change', row);

const handleSelectionChange = (val: never[]) => {
  selectedRows.value = val
  emits('select-change', val);
};
</script>