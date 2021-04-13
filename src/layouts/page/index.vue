<template>
  <router-view>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageLayout',
})
</script>
