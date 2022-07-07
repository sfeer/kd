import { App, Plugin } from 'vue'
import { ColorPickerPlugin } from './color-picker'
import { FormPlugin } from './form'
import { IconPlugin } from './icon'
import { ImagePlugin } from './image'
import { LayoutPlugin } from './layout'
import { MenuPlugin } from './menu'
import { RtePlugin } from './rte'
import {TablePlugin} from './table'

const KdPlugin: Plugin = {
  install(app: App) {
    ColorPickerPlugin.install?.(app)
    FormPlugin.install?.(app)
    IconPlugin.install?.(app)
    ImagePlugin.install?.(app)
    LayoutPlugin.install?.(app)
    MenuPlugin.install?.(app)
    RtePlugin.install?.(app)
    TablePlugin.install?.(app)
  },
}

export default KdPlugin
