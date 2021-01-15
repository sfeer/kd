<template>
  <div class="main-sider" :style="siderStyle">
    <side-menu :menus="menus" :collapsed="collapsed"></side-menu>
  </div>
  <div class="main-header" :style="headerStyle"></div>
  <div class="main-content" :style="contentStyle">
    <transition name="page-transition">
      <keep-alive>
        <router-view :key="$route.fullPath"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import {config} from '@/hook/layout'

export default {
  name: 'Layout',

  setup() {
    // TODO 菜单栏 加载 收起
    const menus = ref([
      {
        id: 1, name: '应用管理', icon: 'app', children: [
          {id: 11, name: '子菜单'},
          {id: 12, name: '子菜单'}
        ]
      },
      {id: 2, name: '设备管理', icon: 'app'},
      {id: 3, name: '用户管理', icon: 'app'}
    ])

    const siderStyle = computed(() => ({width: config.siderWidth + 'px'}))
    const headerStyle = computed(() => ({
      left: config.siderWidth + 'px',
      height: config.headerHeight + 'px'
    }))
    const contentStyle = computed(() => ({
      left: config.siderWidth + 'px',
      top: config.headerHeight + 'px'
    }))

    return {menus, siderStyle, headerStyle, contentStyle}
  }
}
</script>
