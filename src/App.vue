<template>
  <header>
    <a-switch v-model:checked="checked"></a-switch>
    <kd-color-picker v-model:pureColor="color"></kd-color-picker>
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
  import { Switch as ASwitch } from 'ant-design-vue'
  import { changeTheme, dynamicTheme } from './assets/style'
  import comps from './config/comp.config'
  import { ref, watch } from 'vue'

  const links = ref(comps)
  const checked = ref<boolean>(false)
  const color = ref<string>('#512da7')

  watch([color, checked], ([v, x]) => {
    dynamicTheme({ 'primary-color': v })
    changeTheme(x ? 'dark' : undefined)
  })
</script>

<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
  }

  header {
    height: 40px;
  }

  .kd-doc {
    height: calc(100% - 40px);
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
