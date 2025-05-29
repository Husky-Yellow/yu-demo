<template>
  <el-form class="container flex gap-4 border rounded-lg">
    <div class="flex-1 bg-white p-1 rounded shadow min-h-[600px] border">
      <div class="p-1 min-h-[760px]" @dragover.prevent @drop="handleDrop">
        <template v-if="formItems.length === 0">
          <div class="h-full flex items-center justify-center text-gray-400"> 拖拽组件到这里 </div>
        </template>
        <div v-else class="space-y-4">
          <div class="relative">
            <div
              v-for="(row, rowIndex) in formItems"
              :key="rowIndex"
              class="border-2 border-dashed relative border-gray-300 relative m-t-4 grid gap-2"
              :class="[row.isGrid ? 'grid-row grid-cols-[20px_1fr_1fr] min-h-[100px]' : 'form-row grid-cols-[20px_1fr]']"
              @click="selectItem(row)"
              draggable="true"
              @dragstart.stop="(e) => handleDragStartRow(e, rowIndex)"
              @dragover.prevent.stop="handleDragOverRow"
              @drop.stop="(e) => handleDropRow(e, rowIndex)"
            >
              <template v-if="row.isGrid">
                <div class="drag-handle cursor-move flex items-center h-full">
                  <el-icon><Rank /></el-icon>
                </div>
                <div
                  v-for="(item, colIndex) in row.columns"
                  :key="colIndex"
                  class="grid-item relative p-2 border rounded border-2 border-dashed border-gray-300"
                  @dragover.prevent.stop
                  @drop.stop="(e) => handleDrop(e, rowIndex, colIndex)"
                >
                  <FormItemRenderer :item="item" :index="colIndex" @select="selectItem(row)" />
                  <div
                    class="grid-item-tools absolute top-0 right-0 shadow-sm rounded-bl p-1"
                  >
                    <el-button
                      type="danger"
                      size="small"
                      :icon="Delete"
                      circle
                      @click="removeGridItem(rowIndex, colIndex)"
                    />
                  </div>
                </div>
                <div class="absolute -top-8 -right-10 p-1">
                  <el-button type="danger" :icon="Delete" circle @click="removeItem(rowIndex)" />
                </div>
              </template>
              <template v-else>
                <div class="drag-handle cursor-move p-t-1">
                  <el-icon><Rank /></el-icon>
                </div>
                <FormItemRenderer :item="row" :index="colIndex" @select="selectItem(row)">
                  <template #delete-btn>
                    <div class="absolute -top-10 -right-9 p-1">
                      <el-button
                        type="danger"
                        size="small"
                        :icon="Delete"
                        circle
                        @click="removeItem(rowIndex)"
                      />
                    </div>
                  </template>
                </FormItemRenderer>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { Delete, Rank } from '@element-plus/icons-vue'
import { useFormDesigner } from '@/hooks/web/useFormDesigner'
import { useFormDesignerStore } from '@/store/modules/formDesigner';
import FormItemRenderer from './FormItemRenderer.vue'
defineOptions({ name: 'InfraCreateFormDesigner' })

const formDesignerStore = useFormDesignerStore();
const { selectedItem, updateItem, getComponent } = useFormDesigner()

const {
  formItems,
  handleDrop,
  removeItem,
  removeGridItem,
  handleDragStartRow,
  handleDragOverRow,
  handleDropRow
} = useFormDesigner()


const selectItem = (row) => {
  formDesignerStore.selectItem(row)
}

// Helper functions for grid columns (assuming selectedItem is a grid)
const addGridColumn = () => {
   if (selectedItem.value && selectedItem.value.isGrid) {
      const placeholder = getComponent('placeholder');
      if(placeholder) {
         (selectedItem.value).columns.push(placeholder);
         updateItem(selectedItem.value);
      }
   }
}

const removeLastGridColumn = () => {
   if (selectedItem.value && selectedItem.value.isGrid && (selectedItem.value).columns.length > 1) {
      const removedCol = (selectedItem.value).columns.pop();
      // TODO: Check usage of components inside the removed column if any
      updateItem(selectedItem.value);
   }
}


</script>

<style scoped>
.grid-row {
  padding: 10px;
}

.form-row {
  padding: 18px 18px 0 18px;
}

.grid-item {
  min-height: 60px;
}

.grid-item-tools {
  display: none;
}

.grid-item:hover .grid-item-tools {
  display: block;
}

.drag-handle {
  pointer-events: all;
  cursor: move;
  z-index: 100;
}

[draggable="true"] {
  user-select: none;
  -webkit-user-drag: element;
}
</style>