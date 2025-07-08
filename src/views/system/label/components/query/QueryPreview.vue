<template>
  <!-- 查询预览 -->
  <div class="query-preview">
    <el-form :model="formModel" label-width="0px" class="query-form">
      <el-row :gutter="16">
        <el-col v-for="field in visibleFields" :key="field.key" :span="8">
          <el-form-item>
            <component
              :is="getFieldComponent(field.queryType)"
              v-model="formModel[field.key]"
              :placeholder="getPlaceholder(field)"
              v-bind="getFieldComponentType(field)"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <template v-if="isExpanded">
          <el-col v-for="field in hiddenFields" :key="field.key" :span="8">
            <el-form-item>
              <component
                :is="getFieldComponent(field.queryType)"
                v-model="formModel[field.key]"
                :placeholder="getPlaceholder(field)"
                v-bind="getFieldComponentType(field)"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="8" class="action-buttons">
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button @click="handleReset">重置</el-button>
            <el-button v-if="queryFields.length > 2"  @click="toggleExpand">
              {{ isExpanded ? '收起' : '更多搜索' }}
              <el-icon>
                <ArrowUp v-if="isExpanded" />
                <ArrowDown v-else />
              </el-icon>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { getFieldComponent, getFieldComponentType } from '@/utils/formatter'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

const props = defineProps<{
  queryFields: any[]
}>()

const isExpanded = ref(false)
const formModel = reactive<{ [key: string]: any }>({})

// Initialize form model
props.queryFields.forEach((field) => {
  formModel[field.key] = field.defaultValue
})

const visibleFields = computed(() => props.queryFields.slice(0, 2))
const hiddenFields = computed(() => props.queryFields.slice(2))

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function getPlaceholder(field: any) {
  return field.hint
}

function handleReset() {
  props.queryFields.forEach((field) => {
    formModel[field.key] = field.defaultValue || ''
  })
}
</script>

<style scoped>
.query-preview {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.action-buttons {
  display: flex;
  align-items: center;
}
</style>