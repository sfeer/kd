<template>
  <div class="kd-menu-sys-wrapper">
    <div
      class="kd-menu-sys"
      :class="{ active: activeSys === sys.id }"
      v-for="sys in data"
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
        <div @click="clickMenuItem(mod)">{{ mod.name }}</div>
      </div>
      <div class="kd-menu-func-wrapper">
        <div class="kd-menu-func" v-for="func in mod.child" :key="func.id" @click="clickMenuItem(func)">
          {{ func.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType, ref } from 'vue'
  import { MenuItem } from './menuTypes'

  const props = defineProps({ data: { type: Array as PropType<MenuItem[]>, required: true } })
  const emit = defineEmits(['click'])
  const activeSys = ref('')
  const modules = computed(() => props.data?.find(m => m.id === activeSys.value)?.child)

  function clickMenu(v: string) {
    activeSys.value = activeSys.value === v ? '' : v
  }

  function clickMenuItem(v: MenuItem) {
    emit('click', v)
    activeSys.value = ''
  }
</script>
