import { App, Plugin } from 'vue'
import { ColorPickerPlugin } from './color-picker'
import { IconPlugin } from './icon'
import { ImagePlugin } from './image'
import { LayoutPlugin } from './layout'
import { MenuPlugin } from './menu'
import { RtePlugin } from './rte'

const KdPlugin: Plugin = {
  install(app: App) {
    ColorPickerPlugin.install?.(app)
    IconPlugin.install?.(app)
    ImagePlugin.install?.(app)
    LayoutPlugin.install?.(app)
    MenuPlugin.install?.(app)
    RtePlugin.install?.(app)
  },
}

export default KdPlugin
