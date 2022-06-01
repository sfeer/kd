<template>
  <header>
    <a-switch v-model:checked="checked" @change="themeChange"></a-switch>
    <Sketch v-model="colors"></Sketch>
  </header>
  <div class="kd-doc">
    <aside>
      <router-link class="kd-link" v-for="(link, index) in links" :key="index" :to="`/components/${link.name}`">
        {{ link.name }}
      </router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { Sketch } from '@ckpack/vue-color'
  import { Switch as ASwitch } from 'ant-design-vue'
  import comps from './config/comp.config'
  import { ref } from 'vue'
  // @ts-ignore
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

  const links = ref(comps)
  const checked = ref<boolean>(false)
  const colors = ref<string>('#194d33')

  function themeChange() {
    if (checked.value) {
      toggleTheme({ scopeName: `theme-dark` })
    } else {
      toggleTheme({ scopeName: `theme-default` })
    }
  }
</script>

<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .kd-doc {
    display: flex;

    aside {
      width: 200px;
      padding: 15px;
      border-right: 1px solid #ccc;

      .kd-link {
        display: block;
        text-align: center;
      }
    }

    main {
      width: 100%;
      padding: 15px;
    }
  }
</style>
