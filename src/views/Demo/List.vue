<template>
<div class="app-container">
    <!-- 搜索工作栏 -->
    <el-form
      ref="queryFormRef"
      :model="queryParams"
      :inline="true"
      label-width="100px"
    >
      <el-form-item label="标签编号">
        <el-input
          v-model="queryParams.labelNo"
          placeholder="请输入标签编号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="标签名称">
        <el-input
          v-model="queryParams.labelName"
          placeholder="请输入标签名称"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">
          <Icon icon="ep:search" class="mr-5px" /> 搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon icon="ep:refresh" class="mr-5px" /> 重置
        </el-button>
      </el-form-item>
    </el-form>
    <!-- 操作工具栏 -->
    <el-row :gutter="10" class="mb-10px">
      <el-col :span="1.5">
        <el-button type="primary" plain @click="handleAdd">
          <Icon icon="ep:plus" class="mr-5px" /> 新增业务标签
        </el-button>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-table v-loading="loading" :data="list">
      <el-table-column label="标签编号" align="center" prop="labelNo" />
      <el-table-column label="标签名称" align="center" prop="labelName" />
      <el-table-column label="标签类型" align="center" prop="labelType" />
      <el-table-column label="字段配置" align="center" prop="fieldConfig" />
      <el-table-column label="表单配置" align="center" prop="formConfig" />
      <el-table-column label="详情配置" align="center" prop="detailConfig" />
      <el-table-column label="操作配置" align="center" prop="operationConfig" />
      <el-table-column label="查询配置" align="center" prop="queryConfig" />
      <el-table-column label="数据配置" align="center" prop="dataConfig" />
      <el-table-column label="排序配置" align="center" prop="sortConfig" />
      <el-table-column label="统计配置" align="center" prop="statisticsConfig" />
      <el-table-column label="操作" align="center" width="250" fixed="right">
        <template #default="scope">
          <el-button
            link
            type="primary"
            >
            <!-- @click="handleConfig(scope.row)" -->
            配置
          </el-button>
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            >
            <!-- @click="handleAddChild(scope.row)" -->
            添加子标签
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination
      v-model:total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LabelList' })

const loading = ref(false) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  labelNo: '',
  labelName: ''
})

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    // TODO: 实现查询列表API
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryParams.labelNo = ''
  queryParams.labelName = ''
  handleQuery()
}

/** 添加按钮操作 */
const handleAdd = () => {
  // TODO: 实现添加操作
}

/** 修改按钮操作 */
const handleUpdate = (row: any) => {
  // TODO: 实现修改操作
}

/** 配置按钮操作 */
const handleConfig = (row: any) => {
  // TODO: 实现配置操作
}

/** 添加子标签按钮操作 */
const handleAddChild = (row: any) => {
  // TODO: 实现添加子标签操作
}

/** 初始化 */
onMounted(() => {
  getList()
})
</script>
