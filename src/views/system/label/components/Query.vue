<template>
  <div>
    <div class="flex justify-end mb-2">
      <el-button type="primary" @click="showDialog = true">添加</el-button>
      <el-button type="danger" @click="removeSelected" :disabled="!selectedRowKeys.length">删除</el-button>
      <el-button>预览</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" @selection-change="onSelectionChange">
      <el-table-column type="selection" width="40" />
      <el-table-column label="查询字段" prop="label" />
      <el-table-column label="提示文字" prop="placeholder">
        <template #default="{ row }">
          <el-input v-model="row.placeholder" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="查询类型" prop="queryType">
        <template #default="{ row }">
          <el-radio-group v-model="row.queryType">
            <el-radio v-if="row.type === 'string' || row.type === 'number'" label="search">搜索</el-radio>
            <template v-else-if="row.type === 'enum'">
              <el-radio label="radio">单选</el-radio>
              <el-radio label="checkbox">多选</el-radio>
            </template>
            <template v-else-if="row.type === 'date'">
              <el-radio label="date">时间</el-radio>
              <el-radio label="daterange">时间区间</el-radio>
            </template>
          </el-radio-group>
        </template>
      </el-table-column>
      <el-table-column label="默认值" prop="defaultValue">
        <template #default="{ row }">
          <!-- 搜索：输入框 -->
          <el-input
            v-if="row.queryType === 'search'"
            v-model="row.defaultValue"
            size="small"
          />
          <!-- 单选/多选：下拉框 -->
          <el-select
            v-else-if="row.queryType === 'radio' || row.queryType === 'checkbox'"
            v-model="row.defaultValue"
            size="small"
            :multiple="row.queryType === 'checkbox'"
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
            v-else-if="row.queryType === 'date'"
            v-model="row.defaultValue"
            type="date"
            placeholder="请选择日期"
            size="small"
            style="width: 140px"
          />
          <el-date-picker
            v-else-if="row.queryType === 'daterange'"
            v-model="row.defaultValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
            style="width: 220px"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button
            v-if="row.queryType === 'search'"
            type="text"
            @click="addSubField($index)"
          >
            添加字段
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 字段选择弹窗 -->
    <FieldSelectDialog
      v-model="showDialog"
      :fieldList="allFields"
      :selectedKeys="tableData.map(i => i.key)"
      @confirm="addFields"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FieldSelectDialog from './FieldSelectDialog.vue' // 路径按实际调整

const allFields = ref([
{ key: 'idType', label: '证件类型', type: 'enum' },
  { key: 'idNo', label: '证件号码', type: 'string' },
  { key: 'name', label: '姓名', type: 'string' },
  { key: 'org', label: '组织', type: 'string' },
  { key: 'level', label: '人员等级', type: 'enum' },
  { key: 'addTime', label: '数据添加时间', type: 'date' },
  { key: 'editTime', label: '数据修改时间', type: 'date' },
  { key: 'addUser', label: '数据添加人', type: 'string' },
  { key: 'editUser', label: '数据修改人', type: 'string' },
  { key: 'gender', label: '性别', type: 'enum' },
  { key: 'age', label: '年龄', type: 'number' },
  { key: 'phone', label: '手机号', type: 'string' },
  { key: 'email', label: '邮箱', type: 'string' },
  { key: 'address', label: '地址', type: 'string' },
  { key: 'status', label: '状态', type: 'enum' },
  { key: 'score', label: '分数', type: 'number' },
  { key: 'birthday', label: '出生日期', type: 'date' },
  { key: 'registerTime', label: '注册时间', type: 'date' },
  { key: 'lastLogin', label: '最后登录时间', type: 'date' },
  { key: 'remark', label: '备注', type: 'string' }
])

const tableData = ref([
{ key: 'name', label: '姓名', type: 'string', placeholder: '请输入姓名', queryType: 'search', defaultValue: '' },
  { key: 'idNo', label: '证件号码', type: 'string', placeholder: '请输入证件号码', queryType: 'search', defaultValue: '' },
  { key: 'idType', label: '证件类型', type: 'enum', placeholder: '请选择证件类型', queryType: 'radio', defaultValue: '' },
  { key: 'level', label: '人员等级', type: 'enum', placeholder: '请选择等级', queryType: 'checkbox', defaultValue: '' },
  { key: 'addTime', label: '数据添加时间', type: 'date', placeholder: '请选择时间', queryType: 'date', defaultValue: '' },
  { key: 'editTime', label: '数据修改时间', type: 'date', placeholder: '请选择时间', queryType: 'daterange', defaultValue: '' },
  { key: 'gender', label: '性别', type: 'enum', placeholder: '请选择性别', queryType: 'radio', defaultValue: '' },
  { key: 'age', label: '年龄', type: 'number', placeholder: '请输入年龄', queryType: 'search', defaultValue: '' },
  { key: 'phone', label: '手机号', type: 'string', placeholder: '请输入手机号', queryType: 'search', defaultValue: '' },
  { key: 'status', label: '状态', type: 'enum', placeholder: '请选择状态', queryType: 'checkbox', defaultValue: '' }
])
const showDialog = ref(false)
const selectedRowKeys = ref<string[]>([])

function addFields(keys: string[]) {
  const existKeys = tableData.value.map(i => i.key)
  const toAdd = allFields.value.filter(f => keys.includes(f.key) && !existKeys.includes(f.key))
  tableData.value.push(...toAdd.map(f => ({
    key: f.key,
    label: f.label,
    type: f.type,
    placeholder: '',
    queryType: f.type === 'string' || f.type === 'number' ? 'search' : '',
    defaultValue: ''
  })))
}

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

function removeSelected() {
  tableData.value = tableData.value.filter(row => !selectedRowKeys.value.includes(row.key))
  selectedRowKeys.value = []
}

function onSelectionChange(rows: any[]) {
  selectedRowKeys.value = rows.map(r => r.key)
}

function addSubField(index: number) {
  // 这里可以实现“添加字段”按钮的具体逻辑
}
</script>