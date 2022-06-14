<template>
  <div class="kd-menu-sys-wrapper">
    <div
      class="kd-menu-sys"
      :class="{ active: activeSys === sys.id }"
      v-for="sys in menu"
      :key="sys.id"
      @click="clickMenu(sys.id)"
    >
      <kd-icon class="kd-menu-sys-icon" :type="`icon-${sys.icon}`"></kd-icon>
      <div>{{ sys.name }}</div>
    </div>
  </div>
  <div class="kd-menu-mod-wrapper" v-if="modules">
    <div class="kd-menu-mod" v-for="mod in modules" :key="mod.id">
      <div class="kd-menu-mod-header">
        <kd-icon class="kd-menu-mod-icon" :type="`icon-${mod.icon}`"></kd-icon>
        <div>{{ mod.name }}</div>
      </div>
      <div class="kd-menu-func-wrapper">
        <div class="kd-menu-func" v-for="func in mod.child" :key="func.id">{{ func.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  const menu = ref([
    {
      id: '1',
      name: '系统1',
      icon: 'user',
      child: [
        {
          id: '11',
          name: '模块1',
          icon: 'start',
          child: [
            { id: '111', name: '功能1' },
            { id: '112', name: '功能2' },
            { id: '113', name: '功能3' },
            { id: '114', name: '功能4' },
          ],
        },
        {
          id: '12',
          name: '模块2',
          icon: 'start',
          child: [
            { id: '121', name: '功能1' },
            { id: '122', name: '功能2' },
            { id: '123', name: '功能3' },
            { id: '124', name: '功能4' },
          ],
        },
        {
          id: '13',
          name: '模块3',
          icon: 'start',
          child: [
            { id: '131', name: '功能1' },
            { id: '132', name: '功能2' },
            { id: '133', name: '功能3' },
            { id: '134', name: '功能4' },
          ],
        },
        {
          id: '14',
          name: '模块4',
          icon: 'start',
          child: [
            { id: '141', name: '功能1' },
            { id: '142', name: '功能2' },
            { id: '143', name: '功能3' },
            { id: '144', name: '功能4' },
          ],
        },
        {
          id: '15',
          name: '模块5',
          icon: 'start',
          child: [
            { id: '151', name: '功能1' },
            { id: '152', name: '功能2' },
            { id: '153', name: '功能3' },
            { id: '154', name: '功能4' },
          ],
        },
      ],
    },
    { id: '2', name: '系统2', icon: 'setting' },
    { id: '3', name: '系统3', icon: 'setting' },
    { id: '4', name: '系统4', icon: 'setting' },
    { id: '5', name: '系统5', icon: 'setting' },
    { id: '6', name: '系统6', icon: 'setting' },
    { id: '7', name: '系统7', icon: 'setting' },
  ])
  const activeSys = ref('')
  const modules = computed(() => menu.value.find(m => m.id === activeSys.value)?.child)
  function clickMenu(v: string) {
    activeSys.value = v
  }
</script>
