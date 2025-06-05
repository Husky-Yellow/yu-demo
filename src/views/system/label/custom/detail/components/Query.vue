<template>
  <div class="operation-config-table">
    <!-- 添加、删除、预览 -->
    <el-row justify="end">
      <el-col :span="6">
        <el-button>添加</el-button>
        <el-button type="primary">删除</el-button>
        <el-button type="success">预览</el-button>
      </el-col>
    </el-row>
    <div class="query-config-table">
    <el-table
      ref="tableRef"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="queryField"
        label="查询字段"
        align="center"
      />
      <el-table-column
        prop="hintText"
        label="提示文字"
        align="center"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.hintText"
            placeholder="请输入提示文字"
            size="small"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="queryType"
        label="查询类型"
        align="center"
      >
        <template #default="scope">
          <template v-if="scope.row.queryType === 'search'">
            搜索
          </template>
          <template v-else-if="scope.row.queryType === 'radio'">
            <el-radio-group v-model="scope.row.queryTypeDetail">
              <el-radio label="single">单选</el-radio>
              <el-radio label="multiple">多选</el-radio>
            </el-radio-group>
          </template>
          <template v-else-if="scope.row.queryType === 'date'">
            <el-radio-group v-model="scope.row.queryTypeDetail">
              <el-radio label="date">日期</el-radio>
              <el-radio label="dateRange">日期区间</el-radio>
            </el-radio-group>
          </template>
        </template>
      </el-table-column>
      <el-table-column
        prop="defaultValue"
        label="默认值"
        align="center"
      >
        <template #default="scope">
          <template v-if="scope.row.queryType === 'search'">
            <el-input
              v-model="scope.row.defaultValue"
              placeholder="请输入默认值"
              size="small"
            />
          </template>
          <template v-else-if="scope.row.queryType === 'radio'">
            <el-select
              v-model="scope.row.defaultValue"
              placeholder="请选择"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template v-else-if="scope.row.queryType === 'date'">
            <el-date-picker
              v-model="scope.row.defaultValue"
              :type="scope.row.queryTypeDetail === 'date' ? 'date' : 'daterange'"
              placeholder="请选择日期"
              size="small"
            />
          </template>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template #default="scope">
          <div class="drag-handle" @mousedown.stop @touchstart.stop>
            <el-icon><Rank /></el-icon>
          </div>
          <el-button
            type="primary"
            size="small"
            @click="addField(scope.row)"
          >添加字段</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Sortable from 'sortablejs';
import { ElTable, ElTableColumn, ElInput, ElRadioGroup, ElRadio, ElSelect, ElOption, ElDatePicker, ElButton, ElIcon } from 'element-plus';
import { Rank } from '@element-plus/icons-vue'

interface QueryConfig {
  queryField: string;
  hintText: string;
  queryType: 'search' | 'radio' | 'date';
  queryTypeDetail?: 'single' | 'multiple' | 'date' | 'dateRange';
  defaultValue?: string | (string | number)[] | Date | Date[];
}

const tableData = ref<QueryConfig[]>([
  {
    queryField: '姓名 证件号码',
    hintText: '请输入姓名/证件号码',
    queryType: 'search',
    defaultValue: ''
  },
  {
    queryField: '证件号码',
    hintText: '请输入证件号码',
    queryType: 'search',
    defaultValue: ''
  },
  {
    queryField: '证件类型',
    hintText: '请选择证件类型',
    queryType: 'radio',
    queryTypeDetail: 'single',
    defaultValue: ''
  },
  {
    queryField: '多选',
    hintText: '请选择x xx',
    queryType: 'radio',
    queryTypeDetail: 'multiple',
    defaultValue: ''
  },
  {
    queryField: '数据添加时间',
    hintText: '请选择时间',
    queryType: 'date',
    queryTypeDetail: 'dateRange',
    defaultValue: []
  }
]);

const options = ref([
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' }
]);

const tableRef = ref<any>(null);

onMounted(() => {
  nextTick(() => {
    const tbody = tableRef.value.$el.querySelector('tbody');
    if (tbody) {
      new Sortable(tbody, {
        handle: '.drag-handle',
        animation: 150,
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex !== newIndex) {
            const item = tableData.value.splice(oldIndex, 1)[0];
            tableData.value.splice(newIndex, 0, item);
          }
        }
      });
    }
  });
});

const addField = (row: QueryConfig) => {
  // 这里可实现添加字段逻辑，比如复制当前行数据等，示例简单 push 演示
  const newRow = { ...row };
  tableData.value.push(newRow);
};
</script>

<style scoped>
.operation-config-table {
  padding: 20px;
}

.drag-handle {
  cursor: grab;
  color: #409eff;
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drag-handle:active {
  cursor: grabbing;
}

.sortable-ghost {
  background-color: #f5f7fa;
  opacity: 0.6;
}

.sortable-chosen {
  background-color: #e6f7ff;
}

.footer {
  margin-top: 20px;
  text-align: right;
}
</style>