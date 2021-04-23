import { computed, unref } from 'vue'
import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum'

export function useMenuSetting() {
  // TODO 读取配置文件
  const menuSetting = {
    type: menuType,
    mode: menuMode,
    collapsed: menuCollapsed,
    split: menuSplit,
  }

  const getShowMenu = computed(() => appStore.getMenuSetting.show)
  const getMenuType = computed(() => appStore.getMenuSetting.type)
  const getMenuMode = computed(() => appStore.getMenuSetting.mode)

  const getShowSidebar = computed(() => {
    return unref(getShowMenu) && unref(getMenuMode)
  })

  return {
    getShowSidebar,
  }
}
