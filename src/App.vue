<template>
  <a-config-provider>
    <header>
      <a-switch v-model:checked="checked" @change="themeChange"></a-switch>
      <kd-color-picker v-model:pureColor="color"></kd-color-picker>
      <div>{{ color }}</div>
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
  </a-config-provider>
</template>

<script setup lang="ts">
  import { Switch as ASwitch, ConfigProvider as AConfigProvider } from 'ant-design-vue'
  import comps from './config/comp.config'
  import { ref, watch } from 'vue'

  const links = ref(comps)
  const checked = ref<boolean>(false)
  const color = ref<string>('#512da7')

  watch(color, v => {
    AConfigProvider.config({
      theme: {
        primaryColor: v,
      },
    })
  })

  function themeChange() {
    // if (checked.value) {
    //   toggleTheme({ scopeName: `theme-dark` })
    // } else {
    //   toggleTheme({ scopeName: `theme-default` })
    // }
  }
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
