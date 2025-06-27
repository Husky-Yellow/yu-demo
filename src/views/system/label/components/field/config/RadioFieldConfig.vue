<template>
 <!-- 搜索工作栏 -->
 <ContentWrap>
    <el-form
      ref="queryFormRef"
      :inline="true"
      :model="queryParams"
      class="-mb-15px"
      label-width="68px"
      :disabled="disabled"
    >
      <el-form-item label="字典名称" prop="name">
        <el-input
          v-model="queryParams.name"
          class="!w-240px"
          clearable
          placeholder="请输入字典名称"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery">
          <Icon class="mr-5px" icon="ep:search" />
          搜索
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      @selection-change="handleSelectionChange"
      ref="tableRef"
      row-key="id"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" label="字典名称" prop="name" show-overflow-tooltip />
      <el-table-column align="center" label="字典类型" prop="type" width="300" />
      <el-table-column align="center" label="备注" prop="remark" show-overflow-tooltip />
    </el-table>

    <!-- 空数据提示 -->
    <el-empty
      v-if="!loading && list.length === 0"
      description="暂无字典类型数据"
      :image-size="120"
    >
      <el-button type="primary" @click="handleQuery">重新搜索</el-button>
    </el-empty>

    <!-- 分页 -->
    <Pagination
      v-if="list.length > 0"
      v-model:limit="queryParams.pageSize"
      v-model:page="queryParams.pageNo"
      :total="total"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import * as DictTypeApi from '@/api/system/dict/dict.type'
import { FieldType } from '@/config/constants/enums/field';
defineOptions({ name: 'RadioFieldConfig' })

const props = defineProps<{
  modelValue?: any,
  disabled?: boolean
  fieldType: FieldType
}>()

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 字典表格数据
const selectedItems = ref<any[]>([]) // 选中的项目
const selectedCount = ref(0) // 选中数量
const tableRef = ref() // 表格引用

const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  name: props.modelValue?.name,
  status: 0,
})
const queryFormRef = ref() // 搜索的表单

/** 查询字典类型列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await DictTypeApi.getDictTypePage(queryParams)
    list.value = data.list
    total.value = data.total

    // 数据加载完成后，设置选中状态
    nextTick(() => {
      setInitialSelection()
    })
  } finally {
    loading.value = false
  }
}

/** 设置初始选中状态 */
const setInitialSelection = () => {
  if (!props.modelValue?.[0]?.optionsJson || !tableRef.value) return

  try {
    // 解析传入的值
    const fieldConfExtDOList = JSON.parse(props.modelValue?.optionsJson) || []
    if (Array.isArray(fieldConfExtDOList) && fieldConfExtDOList.length > 0) {
      const { type } = fieldConfExtDOList?.[0]
      // 根据传入的数据设置选中状态
      const row = list.value.find((listItem: any) => listItem.type === type)
      if (row) {
        tableRef.value.toggleRowSelection(row, true)
        handleSelectionChange(fieldConfExtDOList)
      }
    }
  } catch (error) {
    console.error('解析modelValue失败:', error)
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 选择变化处理 */
const handleSelectionChange = (selection: any[]) => {
  selectedItems.value = selection
  selectedCount.value = selection.length
}

/** 校验选择 */
const validate = () => {
  if (selectedItems.value.length === 0) {
    ElMessage.warning('请至少选择一个字典类型')
    return false
  }
  if (selectedItems.value.length > 1) {
    ElMessage.warning('最多选择1个字典类型')
    return false
  }
  return true
}

/** 清空选择 */
const convertFormForSubmission = () => {
  return [{
    value: selectedItems.value[0].type,
    name: selectedItems.value[0].name,
    fieldType: props?.fieldType,
    optionsJson: JSON.stringify(selectedItems.value.map((item) => ({
      type: item.type,
      name: item.name
    })))
  }]
}

/** 暴露方法给父组件 */
defineExpose({
  convertFormForSubmission,
  validate,
})

/** 监听modelValue变化 */
watch(
  () => props.modelValue,
  () => {
    if (list.value.length > 0) {
      setInitialSelection()
    }
  },
  { deep: true }
)

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>