<template>
  <div class="kd-header">
    <div class="kd-title">XXXX系统</div>
    <div class="kd-seach-form">搜索框</div>
    <a-switch v-model:checked="checked"></a-switch>
    <kd-color-picker v-model:pureColor="color"></kd-color-picker>
  </div>
  <div class="kd-content"><slot></slot></div>
  <div class="kd-sider">
    <div class="kd-logo">LOGO</div>
    <kd-menu></kd-menu>
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

  const props = defineProps({ mode: String, theme: String })
  const checked = ref<boolean>(false)
  const color = ref<string>('#005ca7')

  watch(
    () => props.theme,
    v => changeTheme(v)
  )
  watch([color, checked], ([v, x]) => {
    dynamicTheme({ 'primary-color': v, 'primary-color-active': Color(v).darken(0.4).hex() })
    changeTheme(x ? 'dark' : undefined)
  })
</script>
