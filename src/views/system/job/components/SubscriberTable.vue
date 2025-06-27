<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-key="row => row.id"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="序号" type="index" width="55" />
    <el-table-column prop="nickname" label="岗位名称" />
    <el-table-column prop="deptName" label="所属组织" />
    <el-table-column prop="deptName" label="数据权限" />
    <el-table-column prop="status" label="状态">
      <template #default="scope">
        <el-switch
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="0"
          @change="handleStatusChange(scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="deptId" label="岗位人数" />
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button link type="primary" @click="handleEdit(scope.row)">权限配置</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineOptions({ name: 'SystemSubscriberSubscriberTable' })
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(['edit', 'delete', 'select-change','status-change']);
const selectedRows = ref<never[]>([]);

const handleEdit = (row: any) => emits('edit', row);
const handleStatusChange = (row: any) => emits('status-change', row);

const handleSelectionChange = (val: never[]) => {
  selectedRows.value = val
  emits('select-change', val);
};
</script>