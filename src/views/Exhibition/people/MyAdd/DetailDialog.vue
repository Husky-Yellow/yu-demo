<template>
  <el-dialog v-model="dialogVisible" :title="currentLabel + '详情'" width="60%" @close="$emit('update:visible', false)">
    <component :is="currentDetailComponent" :detail="detail" />
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, watch, ref } from 'vue'
import type { PropType } from 'vue'
defineOptions({ name: 'ExhibitionPeopleMyAddDetailDialog' })
const props = defineProps({
  visible: Boolean,
  type: String,
  detail: Object as PropType<Record<string, any>>
})
const emit = defineEmits(['update:visible'])

const dialogVisible = ref(props.visible)
watch(() => props.visible, v => dialogVisible.value = v)
watch(dialogVisible, v => emit('update:visible', v))

const typeList = [
  { label: '户籍人口', value: 'hukou' },
  { label: '信访人员', value: 'xinfang' },
  { label: '吸毒人员', value: 'xidu' },
  { label: '困境儿童', value: 'kunjing' }
]
const currentLabel = computed(() => {
  return typeList.find(item => item.value === props.type)?.label || ''
})

const componentMap = {
  hukou: defineAsyncComponent(() => import('./components/HukouDetail.vue')),
  xinfang: defineAsyncComponent(() => import('./components/XinfangDetail.vue')),
  xidu: defineAsyncComponent(() => import('./components/XiduDetail.vue')),
  kunjing: defineAsyncComponent(() => import('./components/KunjingDetail.vue'))
}
const currentDetailComponent = computed(() => componentMap[props.type || 'hukou'])
</script>