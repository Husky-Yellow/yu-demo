<template>
  <el-button-group>
    <el-button
      v-for="action in actions"
      :key="action.action"
      :type="action.type || 'primary'"
      size="small"
      @click="$emit('action', action.action, row)"
    >
      {{ action.label }}
    </el-button>
  </el-button-group>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface ActionConfig {
  label: string
  action: string
  type?: '' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'
}

defineProps<{
  actions: ActionConfig[]
  row: any
}>()

defineEmits<{
  (e: 'action', action: string, row: any): void
}>()
</script> 