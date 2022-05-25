<template>
  <div class="kd-doc">
    <aside>
      <router-link v-for="(link, index) in links" :key="index" :to="`/components/${link.name}`">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
  import comps from './config/comp.config'
  import { ref } from 'vue'

  const links = ref(comps)
</script>

<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .kd-doc {
    display: flex;
    min-height: 100vh;

    aside {
      width: 200px;
      padding: 15px;
      border-right: 1px solid #ccc;
    }

    main {
      width: 100%;
      padding: 15px;
    }
  }
</style>
