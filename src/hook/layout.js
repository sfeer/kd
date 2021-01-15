import {reactive, readonly} from 'vue'

// TODO 控制动态效果
const cfg = reactive({
  siderWidth: 220,
  headerHeight: 50,
  collapsed: false,
  theme: 'default' // default dark
})

export const config = readonly(cfg)

export function collapse(v) {
  cfg.collapsed = v
  cfg.siderWidth = v ? 50 : 220
}

export function setTheme(v) {
  cfg.theme = v
}
