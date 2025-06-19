<template>
  <el-dialog v-model="visible" title="新增" width="500px" @close="onCancel">
    <el-checkbox-group v-model="checkedKeys">
      <el-row>
        <el-col :span="24" v-for="item in fieldList" :key="item.key" class="mb-2">
          <div class="flex items-center">
            <Icon icon="ep:text" class="mr-2" />
            <span class="flex-1">{{ item.label }}</span>
            <el-checkbox :label="item.key" />
          </div>
        </el-col>
      </el-row>
    </el-checkbox-group>
    <template #footer>
      <el-button @click="onCancel">取消</el-button>
      <el-button type="primary" @click="onConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'
const props = defineProps<{
  modelValue: boolean
  fieldList: Array<{ key: string; label: string }>
  selectedKeys: string[]
}>()
const emit = defineEmits(['update:modelValue', 'confirm'])

const visible = ref(props.modelValue)
watch(() => props.modelValue, v => visible.value = v)
watch(visible, v => emit('update:modelValue', v))

const checkedKeys = ref([...props.selectedKeys])
watch(() => props.selectedKeys, v => checkedKeys.value = [...v])

const onCancel = () => { visible.value = false }
const onConfirm = () => {
  emit('confirm', checkedKeys.value)
  visible.value = false
}
</script>