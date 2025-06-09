<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :row-key="row => row.id"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="序号" type="index" width="55" />
    <el-table-column prop="account" label="账号" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="orgName" label="所属组织" />
    <el-table-column prop="status" label="账号状态">
      <template #default="scope">
        <el-switch
          v-model="scope.row.status"
          :active-value="'启用'"
          :inactive-value="'禁用'"
          @change="handleStatusChange(scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="postName" label="持有岗位" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handleDelete(scope.row)" danger>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineOptions({ name: 'SystemSubscriberSubscriberTable' })
import { defineProps, defineEmits, ref } from 'vue';

defineProps({
  tableData: {
    type: Array,
    required: true,
  },
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