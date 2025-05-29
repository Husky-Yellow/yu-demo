<template>
  <div class="container flex gap-2 border rounded-lg">
    <ComponentList />
    <FormDesigner />
    <PropertyPanel />
  </div>
</template>

<script setup lang="ts">
import ComponentList from './components/ComponentList.vue'
import FormDesigner from './components/FormDesigner.vue'
import PropertyPanel from './components/PropertyPanel.vue'

defineOptions({ name: 'InfraCreate' })
</script>

<style scoped>
</style>