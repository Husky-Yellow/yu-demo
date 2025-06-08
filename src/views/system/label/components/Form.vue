<template>
  <div class="container flex gap-2">
    <!-- todo   当推拽的 grid 组件时，里面不可以继续放 grid 组件 --->
    <ComponentList />
    <FormDesigner />
    <PropertyPanel />
  </div>
</template>

<script setup lang="ts">
import ComponentList from '@/components/FormDesigner/src/components/ComponentList.vue'
import FormDesigner from '@/components/FormDesigner/src/components/FormDesigner.vue'
import PropertyPanel from '@/components/FormDesigner/src/components/PropertyPanel.vue'

defineOptions({ name: 'InfraCreate' })
</script>

<style scoped>
</style>