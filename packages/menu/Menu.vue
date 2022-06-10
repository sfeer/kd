<template>
  <div class="kd-menu-module" v-for="m in menu" :key="m.id">
    <div class="kd-menu-module-icon">{{ m.icon }}</div>
    <div class="kd-menu-module-name">{{ m.name }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const menu = ref([
    { id: '1', name: '模块1', icon: '' },
    { id: '2', name: '模块2', icon: '' },
    { id: '3', name: '模块3', icon: '' },
    { id: '4', name: '模块4', icon: '' },
    { id: '5', name: '模块5', icon: '' },
    { id: '6', name: '模块6', icon: '' },
    { id: '7', name: '模块7', icon: '' },
  ])
</script>
