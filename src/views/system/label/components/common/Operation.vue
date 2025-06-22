<template>
  <ContentWrap class="operation-config-table">
    <DraggableTable
      :table-data="tableData"
      :columns="columns as any[]"
      drag-handle-class="drag-handle"
      table-class="operation-table"
      @sort-end="handleSortEnd"
       drag-position="last"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import { ref,h, defineComponent } from 'vue';
import { ElMessage } from 'element-plus';
import DraggableTable from '@/components/Draggable/table.vue';
import { ElInput, ElSwitch } from 'element-plus'

interface OperationButton {
  id: number;
  type: string;
  name: string;
  visible: boolean;
  sort: number;
}


const tableData = ref<OperationButton[]>([
  { id: 1, type: '添加', name: '添加', visible: true, sort: 1 },
  { id: 2, type: '编辑', name: '编辑', visible: true, sort: 2 },
  { id: 3, type: '删除', name: '删除', visible: true, sort: 3 },
  { id: 4, type: '导入', name: '导入', visible: true, sort: 4 },
  { id: 5, type: '导出', name: '导出', visible: true, sort: 5 },
]);

// 定义表格列配置
const columns = ref([
  {
    type: 'index',
    label: '序号',
    width: 120,
    align: 'center'
  },
  {
    prop: 'type',
    label: '按钮类型',
    align: 'center'
  },
  {
    prop: 'name',
    label: '按钮名称',
    align: 'center',
    render: defineComponent({
      props: ['row'],
      setup(props) {
        return () => h(ElInput, {
          modelValue: props.row.name,
          size: 'small',
          'onUpdate:modelValue': (value: string) => {
            // eslint-disable-next-line vue/no-mutating-props
            props.row.name = value;
          },
          onBlur: () => handleNameBlur(props.row)
        });
      }
    })
  },
  {
    prop: 'visible',
    label: '是否显示',
    align: 'center',
    render: defineComponent({
      props: ['row'],
      setup(props) {
        return () => h(ElSwitch, {
          modelValue: props.row.visible,
          'onUpdate:modelValue': (value: boolean) => {
            // eslint-disable-next-line vue/no-mutating-props
            props.row.visible = value;
            handleVisibleChange(props.row);
          }
        });
      }
    })
  }
]);



const handleSortEnd = (oldIndex: number, newIndex: number) => {
  console.log('Drag ended', { oldIndex, newIndex });

  if (oldIndex !== newIndex) {
    const item = tableData.value.splice(oldIndex, 1)[0];
    tableData.value.splice(newIndex, 0, item);

    // 更新排序字段
    tableData.value.forEach((item, index) => {
      item.sort = index + 1;
    });

    console.log('New order:', tableData.value);
  }
};

const handleNameBlur = (row: OperationButton) => {
  console.log('Name updated:', row);
  // 这里可以添加API调用
};

const handleVisibleChange = (row: OperationButton) => {
  console.log('Visibility updated:', row);
  // 这里可以添加API调用
};


const submitForm = () => {
  const submitData = tableData.value

  console.log('Data to save:', submitData);
  ElMessage.success('配置已保存');
}
defineExpose({ submitForm })
</script>

<style scoped>
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