<template>
  <div class="logo" v-show="!collapsed">看到变化</div>
  <div class="logo" v-show="collapsed">KD</div>
  <a-menu
      :mode="mode"
      :theme="theme"
      :inline-collapsed="collapsed"
      v-model="activeMenu"
      :openKeys.sync="openMenu"
      @click="menuSelect">
    <template v-for="item in menus">
      <a-menu-item v-if="!item.children" :key="item.id">
        <a-icon :type="item.icon?item.icon:'mail'"/>
        <span>{{ item.name }}</span>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :subMenuCloseDelay="5" :key="item.id"/>
    </template>
  </a-menu>
</template>

<script>
export default {
  name: 'SideMenu',

  data() {
    return {
      activeMenu: [],
      openMenu: []
    }
  },

  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'light'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: true
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },

  created() {
    this.active(this.$route)
  },

  watch: {
    $route(v) {
      this.active(v)
    },

    collapsed(v) {
      if (v) {
        this.openMenu = []
      }
    }
  },

  computed: {
    menuMap() {
      return this._loopMenu(this.menus)
    }
  },

  methods: {
    active(route) {
      const path = route.fullPath.startsWith('/ifr/') ? route.fullPath.substr(4) : route.fullPath
      const menu = Object.values(this.menuMap).find(d => d.url === path)
      if (menu) {
        this.activeMenu = [menu.id]
        if (!this.collapsed) {
          this.openMenu = []
          this._openMenu(menu)
        }
      } else {
        this.activeMenu = []
        this.openMenu = []
      }
    },

    menuSelect(obj) {
      const data = this.menuMap[obj.key]
      if (data && data.url) {
        // drp开头的路由，需要转换成老系统
        if (data.url.startsWith('/drp/')) {
          this.$multiTab.open('/ifr' + data.url, data.name, true)
        } else {
          this.$multiTab.open(data.url, data.name, true)
        }
      }
    },

    _loopMenu(menus) {
      let res = {}
      for (const m of menus) {
        res[m.id] = m
        if (m.children) {
          res = {...this._loopMenu(m.children), ...res}
        }
      }
      return res
    },

    _openMenu(menu) {
      const pid = menu.parentId
      if (pid !== 0) {
        this.openMenu.push(pid)
        this._openMenu(this.menuMap[pid])
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/variables';

.sider {
  position: fixed;
  top: 0;
  bottom: 0;

  .logo {
    height: @layout-header-height;
    line-height: @layout-header-height;
    font-size: 20px;
    text-align: center;
    background-color: @primary-color;
    color: white;
    font-weight: bold;
    white-space: nowrap;
  }

  .ant-menu {
    height: calc(100% - @layout-header-height);
    overflow: hidden;

    &:hover {
      overflow-y: auto;
    }
  }
}
</style>

