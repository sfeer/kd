<template>
  <div class="kd-layout" :class="mode">
    <div class="kd-content"><slot></slot></div>
    <div class="kd-header">
      <div class="kd-logo" v-if="mode === 'classic'">LOGO</div>
      <div class="kd-title">XXXX系统</div>
      <kd-menu v-if="mode === 'classic'"></kd-menu>
      <div class="kd-seach-form">搜索框</div>
      <a-switch v-model:checked="mode" checked-value="classic" un-checked-value="default"></a-switch>
      <a-switch v-model:checked="theme" checked-value="dark" un-checked-value="default"></a-switch>
      <kd-color-picker v-model:pureColor="color"></kd-color-picker>
    </div>
    <div class="kd-sider" v-if="mode === 'default'">
      <div class="kd-logo">LOGO</div>
      <kd-menu></kd-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  // TODO 布局所需的数据模型
  // 菜单+用户+权限+工具栏+系统配置
  // 参数 主题模式，布局模式，
  // 换肤：预设主题切换、包含登录页
  //      动态主题配置、主色调、头部高度、字体大小、对应antdv+echart+自定义组件的同步变更
  //      布局的配置：切换布局模式
  // https://codesign.qq.com/s/NlO1ZnQOWw0LMV2

  import { Switch as ASwitch } from 'ant-design-vue'
  import { ref, watch } from 'vue'
  import { changeTheme, dynamicTheme } from '../../src/assets/style'
  import Color from 'color'

  // const props = defineProps({
  //   mode: { type: String, default: 'default' },
  //   theme: { type: String, default: 'light' },
  // })

  const mode = ref<string>('default')
  const theme = ref<string>('default')
  const color = ref<string>('#005ca7')

  watch(theme, v => changeTheme(v))
  watch(color, v => dynamicTheme({ 'primary-color': v, 'primary-color-active': Color(v).darken(0.4).hex() }))
</script>
