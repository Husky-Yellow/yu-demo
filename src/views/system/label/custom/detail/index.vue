<template>
  <ContentWrap>
    <div class="relative h-[calc(100vh-160px)]">
      <div class="absolute right-36px z-2">
        <el-button type="primary" @click="save">保存</el-button>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="tab in tabsConfig"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
          lazy
        >
          <component
            :is="tab.component"
            :ref="(el) => setComponentRef(el, tab.name)"
            :tab="tab"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </ContentWrap>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLabelCustomDetail' })

interface SaveableComponent {
  saveTableData?: () => void
  submitForm?: () => void
  [key: string]: any
}

interface TabConfig {
  name: string
  label: string
  component: Component
  saveMethod?: keyof SaveableComponent
}

const tabsConfig: readonly TabConfig[] = [
  // todo 只调整了，文本、数字 其余的还没有调试
  { name: 'field', label: '字段配置', component: defineAsyncComponent(() => import('../../components/field/Field.vue')), saveMethod: 'saveTableData' },
  // 多选、单选、上传、标签没有调试， 只处理了文本、时间控件，关联关系还没看数据有没有保存 ，字段的过滤还没有加， 字段排序没有加
  { name: 'formEdit', label: '表单配置', component: defineAsyncComponent(() => import('../../components/common/FormEdit.vue')), saveMethod: 'submitForm' },
  { name: 'detailEdit', label: '详情配置', component: defineAsyncComponent(() => import('../../components/common/FormEdit.vue')), saveMethod: 'submitForm' },
  // 调试完成
  { name: 'operation', label: '操作配置', component: defineAsyncComponent(() => import('../../components/common/Operation.vue')), saveMethod: 'submitForm' },
  { name: 'query', label: '查询配置', component: defineAsyncComponent(() => import('../../components/query/Query.vue')), saveMethod: 'submitForm' },
  { name: 'Data', label: '数据配置', component: defineAsyncComponent(() => import('../../components/filter/Filter.vue')), saveMethod: 'submitForm' },
  { name: 'Sorting', label: '排序配置', component: defineAsyncComponent(() => import('../../components/sort/Sort.vue')), saveMethod: 'submitForm' },
  { name: 'Statistical', label: '统计配置', component: defineAsyncComponent(() => import('../../components/statistic/StatisticConfig.vue')), saveMethod: 'submitForm' },
]

const activeName = ref<string>('field')


const componentRefs = shallowRef<Record<string, SaveableComponent>>({})


const setComponentRef = (el: any, name: string) => {
  if (el) {
    componentRefs.value[name] = el
  }
}

const activeTabConfig = computed(() => tabsConfig.find(tab => tab.name === activeName.value))

const save = () => {
  const tab = activeTabConfig.value
  if (!tab?.saveMethod) {
    console.warn(`Tab "${activeName.value}" has no save action defined.`)
    return
  }

  const componentInstance = componentRefs.value[tab.name]
  const saveMethod = componentInstance?.[tab.saveMethod]

  if (typeof saveMethod === 'function') {
    saveMethod()
  } else {
    console.error(
      `Save method '${tab.saveMethod}' not found on component for tab '${tab.name}'.`
    )
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-tabs) {
  height: 100%;

  .el-tabs__content {
    height: calc(100% - 40px);
    overflow-y: auto;
  }
}
</style>
