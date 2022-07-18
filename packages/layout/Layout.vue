<template>
  <div class="kd-layout" :class="mode">
    <div class="kd-content"><slot></slot></div>
    <div class="kd-header">
      <div class="kd-logo" v-if="mode === 'classic'">LOGO</div>
      <div class="kd-title">{{ title }}</div>
      <kd-menu v-if="mode === 'classic'" :data="menu" @click="$emit('clickMenu', $event)"></kd-menu>
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
      <kd-menu :data="menu" @click="$emit('clickMenu', $event)"></kd-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Switch as ASwitch } from 'ant-design-vue'
  import { PropType, provide, ref, watch } from 'vue'
  import { changeTheme, dynamicTheme } from '../style'
  import Color from 'color'
  import { MenuItem } from '../menu/menuTypes'

  defineProps({ title: String, menu: Array as PropType<MenuItem[]> })

  const visible = ref<boolean>(false)
  const mode = ref<string>('default')
  const theme = ref<string>('default')
  const color = ref<string>('#005ca7')

  provide('theme', theme)
  watch(theme, v => changeTheme(v))

  watch(color, v => {
    const color = Color(v)
    dynamicTheme({
      '--kd-primary-color': v,
      '--kd-primary-1': color.fade(0.9).hexa(),
      '--kd-primary-2': color.fade(0.8).hexa(),
      '--kd-primary-3': color.fade(0.7).hexa(),
      '--kd-primary-4': color.fade(0.6).hexa(),
      '--kd-primary-5': color.fade(0.5).hexa(),
      '--kd-primary-6': color.fade(0.4).hexa(),
      '--kd-primary-7': color.fade(0.3).hexa(),
      '--kd-primary-8': color.fade(0.2).hexa(),
      '--kd-primary-9': color.fade(0.1).hexa(),
      '--kd-primary-color-hover': color.lighten(0.3).hex(),
      '--kd-primary-color-active': color.darken(0.3).hex(),

      '--ant-primary-color': v,
      '--ant-primary-color-hover': color.lighten(0.3).hex(),
      '--ant-primary-color-active': color.darken(0.3).hex(),
      '--ant-primary-color-active-deprecated-d-02': color.lighten(0.7).hex(),
      '--ant-primary-1': color.lighten(0.9).hex(),
      '--ant-primary-9': color.darken(0.9).hex(),
    })
  })

  function openModal() {
    visible.value = true
  }
</script>
