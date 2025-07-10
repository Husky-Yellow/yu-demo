<template>
  <!-- 超出两个有更多搜索 -->
  <el-form :model="form" label-width="0px">
    <el-row :gutter="16" flex>
      <el-col v-for="field in fields" :key="field.id || field.fieldCodes" :span="8">
        <el-form-item :prop="field.fieldCodes">
          <component
            :is="getFieldComponent(field.queryType)"
            v-model="form[field.fieldCodes || field.id || field.hint]"
            :placeholder="field.hint"
            v-bind="getComponentProps(field)"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
          <el-button v-if="fields.length > 2" @click="handleReset">更多搜索</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row v-if="operateConfigList.length">
      <el-col :span="24" style="text-align: right; margin-top: 12px">
        <el-button
          v-for="item in operateConfigList"
          :key="item.operateType"
          :disabled="(item.operateType === 1 || item.operateType === 2) && !selectedRows.length"
          @click="handleOperate(item)"
          >{{ item.operateName }}</el-button
        >
      </el-col>
    </el-row>
  </el-form>
  <CreateForm ref="createFormRef" @submit="handleSubmit" />
</template>

<script setup lang="ts">
import { ExhibitionOperate } from '@/config/constants/enums/exhibition'
import CreateForm from './CreateForm.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getFieldComponent } from '@/utils/formatter'

const router = useRouter()

interface SearchField {
  id?: string
  manageId: string
  field?: any[]
  fieldCodes?: string
  fieldIds?: string
  queryType: number // 0-搜索 1-单选 2-多选 3-日期区间 4-日期
  defaultValue: any
  hint: string
  sort: number
  options?: { label: string; value: string | number }[]
}

const props = defineProps<{
  fields: SearchField[]
  operateConfigList: ExhibitionOperate[]
  selectedRows: any[]
}>()
const form = reactive<Record<string, any>>({})
const emit = defineEmits(['search', 'delete'])

const createFormRef = ref<InstanceType<typeof CreateForm>>()

initForm()
watch(() => props.fields, initForm, { deep: true })

function getComponentProps(field: SearchField) {
  const queryTypePropsMap = {
    0: () => ({ clearable: true }),
    1: (field: SearchField) => ({ options: field.options }),
    2: (field: SearchField) => ({ options: field.options, multiple: true }),
    3: () => ({
      type: 'daterange',
      rangeSeparator: '至',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期'
    }),
    4: () => ({ type: 'date' })
  }
  const fn = queryTypePropsMap[field.queryType]
  return fn ? fn(field) : {}
}

function getKey(field: SearchField) {
  return field.fieldCodes || field.id || field.hint
}

function initForm() {
  props.fields.forEach((f) => {
    form[getKey(f)] = f.defaultValue ?? (f.queryType === 2 ? [] : '')
  })
}

function handleSearch() {
  emit('search', { ...form })
}

function handleReset() {
  props.fields.forEach((f) => {
    form[getKey(f)] = f.defaultValue ?? (f.queryType === 2 ? [] : '')
  })
  // 实际项目中可 emit('search', { ...form })
  console.log('重置参数', { ...form })
}

function handleOperate(item: ExhibitionOperate) {
  // 这里处理表格操作
  if (item.operateType === 0) {
    // 打开第一层弹窗
    createFormRef.value?.open('people')
  }
  if (item.operateType === 1) {
    // 打开编辑
    if (!props.selectedRows.length) {
      ElMessage.warning('请先选择要编辑的数据')
      return
    }
    router.push({
      path: '/basic/people/create',
      query: {
        id: props.selectedRows[0].id,
        editType: 1,
        type: 1
      }
    })
  }
  // 删除的话，要判断表格中有没有选中的
  if (item.operateType === 2) {
    // 打开删除
    if (!props.selectedRows.length) {
      ElMessage.warning('请先选择要删除的数据')
      return
    }
    // 打开删除
    ElMessageBox.confirm('确定要删除吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      console.log('删除')
      emit('delete', props.selectedRows)
    })
  }
  // console.log('操作', item)
}

function handleSubmit(data: any) {
  // console.log('提交', data)
  // 跳转到编辑、新建页面
  router.push({
    path: '/basic/people/create',
    query: {
      ...data.data,
      type: data.type
    }
  })
}
</script>
