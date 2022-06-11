<template>
  <div
    class="kd-menu-module"
    :class="{ active: activeMenu === m.id }"
    v-for="m in menu"
    :key="m.id"
    @click="clickMenu(m.id)"
  >
    <kd-icon class="kd-menu-module-icon" :type="`icon-${m.icon}`"></kd-icon>
    <div class="kd-menu-module-name">{{ m.name }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const menu = ref([
    { id: '1', name: '模块1', icon: 'user' },
    { id: '2', name: '模块2', icon: 'setting' },
    { id: '3', name: '模块3', icon: 'setting' },
    { id: '4', name: '模块4', icon: 'setting' },
    { id: '5', name: '模块5', icon: 'setting' },
    { id: '6', name: '模块6', icon: 'setting' },
    { id: '7', name: '模块7', icon: 'setting' },
  ])
  const activeMenu = ref('')
  function clickMenu(v: string) {
    activeMenu.value = v
  }
</script>
