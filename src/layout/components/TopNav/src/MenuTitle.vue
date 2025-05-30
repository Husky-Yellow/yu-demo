<template>
  <div class="menu-title-wrapper">
    <Icon v-if="meta.icon" :icon="meta.icon" />
    <span class="menu-title">{{ meta.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/Icon'
defineProps({
  meta: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.menu-title-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.menu-title {
  white-space: nowrap;
}
</style>