import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'
import { ColorPickerPlugin } from './color-picker'
import { LayoutPlugin } from './layout'

const KdPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    ColorPickerPlugin.install?.(app)
    LayoutPlugin.install?.(app)
  },
}

export default KdPlugin
