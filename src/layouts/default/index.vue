<template>
  <a-layout :class="prefixCls">
    <layout-header></layout-header>
    <a-layout>
      <layout-side-bar></layout-side-bar>
      <a-layout>
        <div>TODO 多页签</div>
        <layout-content></layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LayoutHeader from './header/index.vue'
import LayoutContent from './content/index.vue'
import LayoutSideBar from './sider/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutSideBar,
  },
  setup() {
    return {
      prefixCls: ref('mosp-default-layout'),
    }
  },
})
</script>

<style lang="less">
@prefix-cls: ~'@{namespace}-default-layout';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: @content-bg;
  flex-direction: column;
}
</style>
