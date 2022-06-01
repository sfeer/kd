import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'
import { ColorPickerPlugin } from './ColorPicker'
import { LayoutPlugin } from './Layout'

const KdPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    ColorPickerPlugin.install?.(app)
    LayoutPlugin.install?.(app)
  },
}

export default KdPlugin
