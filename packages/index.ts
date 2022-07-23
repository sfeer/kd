import { App, Plugin } from 'vue'
import { ChartPlugin } from './Chart'
import { ColorPickerPlugin } from './color-picker'
import { CropperPlugin } from './cropper'
import { FormPlugin } from './form'
import { IconPlugin } from './icon'
import { ImagePlugin } from './image'
import { LayoutPlugin } from './layout'
import { generateRoutes, MenuPlugin } from './menu'
import { RtePlugin } from './rte'
import { TablePlugin } from './table'

const KdPlugin: Plugin = {
  install(app: App) {
    ChartPlugin.install?.(app)
    ColorPickerPlugin.install?.(app)
    CropperPlugin.install?.(app)
    FormPlugin.install?.(app)
    IconPlugin.install?.(app)
    ImagePlugin.install?.(app)
    LayoutPlugin.install?.(app)
    MenuPlugin.install?.(app)
    RtePlugin.install?.(app)
    TablePlugin.install?.(app)
  },
}

export { generateRoutes }

export default KdPlugin
