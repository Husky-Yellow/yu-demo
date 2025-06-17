<template>
  <div :class="status ? 'text-success' : 'text-gray-400'">
    <Icon :icon="status ? 'ep:circle-check' : 'ep:circle-close'" />
  </div>
</template>

<script setup>
import { handleConfigFlag } from '@/utils/formatter'
const props = defineProps({
  flag: {
    type: String,
    required: true
  },
  configName: {
    type: String,
    required: true
  }
})
// 获取配置状态
const status = computed(() =>
  handleConfigFlag(props.flag, props.configName)
)
</script>
