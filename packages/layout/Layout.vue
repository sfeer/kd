<template>
  <div class="kd-layout" :class="mode">
    <div class="kd-content"><slot></slot></div>
    <div class="kd-header">
      <div class="kd-logo" v-if="mode === 'classic'">LOGO</div>
      <div class="kd-title">XXXX系统</div>
      <kd-menu v-if="mode === 'classic'" :data="menu"></kd-menu>
      <div class="kd-seach-form">搜索框</div>
      <kd-icon class="kd-theme-icon" type="icon-yifu" @click="openModal"></kd-icon>
      <a-modal v-model:visible="visible" title="定制主题" :footer="null">
        <a-switch v-model:checked="mode" checked-value="classic" un-checked-value="default"></a-switch>
        <a-switch v-model:checked="theme" checked-value="dark" un-checked-value="default"></a-switch>
        <kd-color-picker v-model:pureColor="color"></kd-color-picker>
      </a-modal>
    </div>
    <div class="kd-sider" v-if="mode === 'default'">
      <div class="kd-logo">LOGO</div>
      <kd-menu :data="menu"></kd-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Switch as ASwitch } from 'ant-design-vue'
  import { PropType, ref, watch } from 'vue'
  import { changeTheme, dynamicTheme } from '../style'
  import Color from 'color'
  import { MenuItem } from '../menu/menuTypes'

  defineProps({ menu: Array as PropType<MenuItem[]> })

  const visible = ref<boolean>(false)
  const mode = ref<string>('default')
  const theme = ref<string>('default')
  const color = ref<string>('#005ca7')

  watch(theme, v => changeTheme(v))
  watch(color, v => {
    const color = Color(v)
    dynamicTheme({
      '--kd-primary-color': v,
      '--kd-primary-color-hover': color.lighten(0.3).hex(),
      '--kd-primary-color-active': color.darken(0.3).hex(),
      '--ant-primary-color': v,
      '--ant-primary-color-hover': color.lighten(0.3).hex(),
      '--ant-primary-color-active': color.darken(0.3).hex(),
    })
  })

  function openModal() {
    visible.value = true
  }
</script>
