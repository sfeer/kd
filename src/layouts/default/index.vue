<template>
  <!--  <a-layout :class="prefixCls">-->
  <!--    <layout-header fixed></layout-header>-->
  <!--    <a-layout>-->
  <!--      <layout-side-bar></layout-side-bar>-->
  <!--      <a-layout :class="`${prefixCls}-main`">-->
  <!--        <div>TODO 多页签</div>-->
  <!--        <layout-content></layout-content>-->
  <!--      </a-layout>-->
  <!--    </a-layout>-->
  <!--  </a-layout>-->
  <pro-layout :="state"></pro-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import LayoutHeader from './header/index.vue'
// import LayoutContent from './content/index.vue'
// import LayoutSideBar from './sider/index.vue'
// import { useMenuSetting } from '@/hooks/setting/useMenuSetting'

export default defineComponent({
  name: 'DefaultLayout',
  // components: {
  //   LayoutHeader,
  //   LayoutContent,
  //   LayoutSideBar,
  // },
  setup() {
    const state = reactive({
      collapsed: false,

      openKeys: ['/dashboard'],
      selectedKeys: ['/welcome'],

      isMobile: false,
      fixSiderbar: false,
      fixedHeader: false,
      menuData: [
        {
          path: '/home',
          name: 'Home',
          meta: { icon: 'SmileOutlined', title: '首页' },
        },
      ],
      sideWidth: 208,
      hasSideMenu: true,
      hasHeader: true,
      hasFooterToolbar: false,
    })

    // const { getShowSidebar, getIsMixSidebar } = useMenuSetting()

    return {
      // getShowSidebar,
      // prefixCls: ref('kd-default-layout'),
      // getIsMixSidebar,
      state,
    }
  },
})
</script>

<style lang="less">
@prefix-cls: ~'@{app-name}-default-layout';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: @content-bg;
  flex-direction: column;
}
</style>
