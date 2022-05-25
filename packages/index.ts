import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'

const KdPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  },
}

export default KdPlugin
