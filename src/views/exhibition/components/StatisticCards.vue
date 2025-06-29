<template>
  <el-row :gutter="16">
    <el-col
      v-for="(item, idx) in stats"
      :key="idx"
      :span="6"
    >
      <el-card shadow="hover" class="stat-card">
        <div class="stat-label">{{ item.label }}</div>
        <div class="stat-value">{{ item.value }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface StatItem {
  label: string
  value: number | string
}

defineProps<{ stats: StatItem[] }>()
</script>

<style scoped>
.stat-card {
  text-align: center;
}
.stat-label {
  color: #888;
  font-size: 14px;
}
.stat-value {
  font-size: 22px;
  font-weight: bold;
  margin-top: 4px;
}
</style> 