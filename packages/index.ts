import { App, Plugin } from 'vue'

import { ColorPickerPlugin } from './color-picker'
import { IconPlugin } from './icon'
import { LayoutPlugin } from './layout'
import { MenuPlugin } from './menu'
import './style'

const KdPlugin: Plugin = {
  install(app: App) {
    ColorPickerPlugin.install?.(app)
    IconPlugin.install?.(app)
    LayoutPlugin.install?.(app)
    MenuPlugin.install?.(app)
  },
}

export default KdPlugin
