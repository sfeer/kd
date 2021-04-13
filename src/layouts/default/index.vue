<template>
  <a-layout>
    <layout-header></layout-header>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './header/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
  },
})
</script>
