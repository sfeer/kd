import { App, Plugin } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const Icon = createFromIconfontCN({
  scriptUrl: '/font/iconfont.js',
})

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('kd-icon', Icon)
  },
}

export { Icon }
