<template>
  <div class="h-full flex flex-col">
    <!-- 搜索框 -->
    <el-input
      v-model="searchKeyword"
      class="mb-20px"
      clearable
      :placeholder="placeholderText"
    >
      <template #prefix>
        <Icon icon="ep:search" />
      </template>
    </el-input>

    <!-- 树形结构 -->
    <el-tree
      ref="treeRef"
      :data="treeData"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      :props="treeProps"
      :default-expand-all="expandAll"
      highlight-current
      node-key="id"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TreeSelector' })
import type { ElTree } from 'element-plus';

// 定义组件属性
const props = defineProps({
  /** 初始加载数据的API函数 */
  loadApi: {
    type: Function,
    required: true
  },
  /** 搜索框占位文本 */
  placeholder: {
    type: String,
    default: '请输入关键词搜索'
  },
  /** 树形结构配置 */
  propsConfig: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'name'
    })
  },
  /** 是否默认展开所有节点 */
  expandAll: {
    type: Boolean,
    default: true
  },
  /** 自定义数据处理函数 */
  dataHandler: {
    type: Function,
    default: (data: any[]) => data
  }
});

// 定义组件事件
const emits = defineEmits(['node-click', 'loaded']);

// 组件状态
const searchKeyword = ref('');
const treeData = ref<any[]>([]);
const treeRef = ref<InstanceType<typeof ElTree>>();

// 计算属性：树形配置
const treeProps = computed(() => props.propsConfig);
const placeholderText = computed(() => props.placeholder);

// 过滤节点方法
const filterNode = (keyword: string, data: any) => {
  if (!keyword) return true;
  return data[treeProps.value.label]?.includes(keyword);
};

// 节点点击事件
const handleNodeClick = (nodeData: any) => {
  emits('node-click', nodeData);
};

// 加载数据
const loadTreeData = async () => {
  try {
    const res = await props.loadApi();
    treeData.value = props.dataHandler(res);
    emits('loaded', treeData.value);
  } catch (error) {
    console.error('加载树形数据失败', error);
  }
};

// 监听搜索关键词变化
watch(searchKeyword, (val) => {
  treeRef.value?.filter(val);
});

// 组件挂载后加载数据
onMounted(() => {
  loadTreeData();
});
</script>