<template>
  <div
    class="flex items-center px-2 py-1 mb-2 bg-[#f5f7fa] rounded cursor-grab justify-between"
    :class="{
      'opacity-60 bg-[#f0f0f0] cursor-not-allowed hover:bg-[#e6f7ff]': isFieldUsed(element[hasKeyString])
    }"
  >
    <div class="flex items-center">
      <span>{{ element.name }}</span>
      <el-tag v-if="isFieldUsed(element[hasKeyString])" size="small" class="ml-10px">已使用</el-tag>
    </div>
    <Icon icon="ep:rank" class="text-red-500 mr-2 cursor-pointer" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  element: any
  hasKeyString: string
  isFieldUsed: (key: string) => boolean
}>()
</script>