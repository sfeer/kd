<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageLayout',
})
</script>
