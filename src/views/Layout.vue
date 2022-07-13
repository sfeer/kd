<template>
  <kd-layout title="XXXX平台" :menu="menu" @clickMenu="clickMenu">
    <router-view />
  </kd-layout>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import { useRouter } from 'vue-router'
  import type { MenuItem } from '../../packages/menu/menuTypes'

  const menu = inject('menu')
  const router = useRouter()
  function clickMenu(v: MenuItem) {
    v.url && router.push(v.url)
  }
</script>
