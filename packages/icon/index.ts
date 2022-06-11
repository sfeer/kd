import { App, Plugin } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3057024_movvrvyx26g.js',
})

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('kd-icon', Icon)
  },
}

export { Icon }
