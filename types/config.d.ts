import { MenuTypeEnum, MenuModeEnum } from '@/enums/menuEnum'

/**
 * 菜单配置对象
 */
export interface MenuSetting {
  bgColor: string
  fixed: boolean
  collapsed: boolean
  width: number
  mode: MenuModeEnum
}
