<template>
  <div class="overflow-x-auto">
    <div class="flex gap-4 min-w-max">
      <div
        v-for="(item, idx) in config"
        :key="idx"
        class="w-60 flex-shrink-0"
      >
        <el-card shadow="hover" class="text-center">
          <div class="text-gray-500 text-sm">{{ item.name }}</div>
          <div class="text-2xl font-bold mt-1">{{ item.value }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface StatisticItem {
  name: string
  value: number
}

defineProps<{ config: StatisticItem[] }>()
</script>