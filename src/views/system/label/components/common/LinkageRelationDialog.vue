<template>
  <el-dialog v-model="visible" title="查看联动关系" width="800px" @close="onClose">
    <div ref="containerRef" class="relative min-h-75 bg-gray-100 px-4 py-8">
      <!-- 字段横向平铺区 -->
      <div class="flex gap-8 relative z-2">
        <div
          v-for="field in allFields"
          :key="field.id"
          class="min-w-30 min-h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center font-medium text-lg relative z-1 shadow"
          :id="`dialog-field-${field.id}`"
        >
          {{ field.label }}
        </div>
      </div>
      <!-- 连线区 -->
      <div class="absolute left-0 top-0 w-full h-full pointer-events-none z-1">
        <div
          v-for="line in lines"
          :key="line.key"
          class="absolute h-0.5 rounded bg-blue-500"
          :style="line.style"
        ></div>
      </div>
    </div>
    <template #footer>
      <el-button @click="onClose">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { watch, ref, computed, nextTick } from 'vue'
import type { FormRow, FormField, RowItem } from '@/hooks/web/useFormEditHandlers'

const props = defineProps<{
  modelValue: boolean
  formRows: FormRow[]
}>()
const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)
watch(() => props.modelValue, v => visible.value = v)
watch(visible, v => emit('update:modelValue', v))

function isFormField(field: RowItem): field is FormField {
  return field && typeof field === 'object' && 'label' in field && 'linkage' in field
}

const allFields = computed(() => {
  // 横向平铺所有字段
  return props.formRows.flatMap(row => row.fields).filter(isFormField)
})

const containerRef = ref<HTMLElement | null>(null)
const lines = ref<any[]>([])

function drawLines() {
  const newLines: any[] = []
  allFields.value.forEach((field: FormField) => {
    if (field.linkage?.enabled && field.linkage.targetFieldId) {
      const sourceEl = document.getElementById(`dialog-field-${field.id}`)
      const targetEl = document.getElementById(`dialog-field-${field.linkage.targetFieldId}`)
      const container = containerRef.value
      if (sourceEl && targetEl && container) {
        const cRect = container.getBoundingClientRect()
        const sRect = sourceEl.getBoundingClientRect()
        const tRect = targetEl.getBoundingClientRect()
        // 连线从 source 右边中点到 target 左边中点
        const x1 = sRect.right - cRect.left
        const y1 = sRect.top + sRect.height / 2 - cRect.top
        const x2 = tRect.left - cRect.left
        const y2 = tRect.top + tRect.height / 2 - cRect.top
        const dx = x2 - x1
        const dy = y2 - y1
        const length = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx) * 180 / Math.PI
        newLines.push({
          key: field.id + '-' + field.linkage.targetFieldId,
          style: {
            left: `${x1}px`,
            top: `${y1}px`,
            width: `${length}px`,
            background: field.linkage.effect === 'show' ? '#409EFF' : '#67C23A',
            transform: `rotate(${angle}deg)`,
            'transform-origin': '0 50%',
            'z-index': 2,
          }
        })
      }
    }
  })
  lines.value = newLines
}

function onClose() {
  visible.value = false
}

watch(visible, v => {
  if (v) nextTick(drawLines)
})
</script>