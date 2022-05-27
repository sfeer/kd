import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'
import { LayoutPlugin } from './Layout'

const KdPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    LayoutPlugin.install?.(app)
  },
}

export default KdPlugin
