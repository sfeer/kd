interface KdMenuItem {
  id: string
  name: string
  pid?: string
  icon?: string
  url?: string
  children?: KdMenuItem[]
}

export default class KdMenu {
  private path = '/'
  // 高亮菜单
  private activeMenu: string[] = []
  // 开启菜单
  private openMenu: string[] = []
  // 当前菜单id
  private cid: string | undefined = undefined
  private idMap: Map<string, KdMenuItem> = new Map<string, KdMenuItem>()
  private urlMap: Map<string, KdMenuItem> = new Map<string, KdMenuItem>()

  constructor(menus: KdMenuItem[], path?: string) {
    this.setPath(path)
    this.loop(menus, v => {
      this.idMap.set(v.id, v)
      v.url && this.urlMap.set(v.url, v)
    })
  }

  // 正向递归
  loop(menus: KdMenuItem[], handle: (arg: KdMenuItem) => void) {
    menus.forEach(v => {
      if (v.children) {
        handle(v)
        this.loop(v.children, handle)
      }
    })
  }

  // 反向递归
  loop2(menu: KdMenuItem, handle: (arg: KdMenuItem) => void) {
    handle(menu)
    if (menu.pid) {
      const p = this.idMap.get(menu.pid)
      p && this.loop2(p, handle)
    }
  }

  setPath(path: string | undefined) {
    if (path) {
      this.path = path
      const one = this.urlMap.get(path)
      if (one) {
        this.cid = one.id
        this.loop2(one, v => {
          this.activeMenu.push(v.id)
          if (v.pid) {
            this.openMenu.push(v.pid)
          }
        })
      }
    } else {
      this.activeMenu = []
      this.openMenu = []
    }
  }

  getActiveMenu() {
    return this.activeMenu
  }

  getOpenMenu() {
    return this.openMenu
  }

  /**
   * 获取当前菜单
   */
  getCurrent() {
    return this.cid ? this.idMap.get(this.cid) : undefined
  }

  /**
   * 获取子菜单
   * @param id
   */
  getChild(id: string) {
    const one = this.idMap.get(id)
    return one ? one.children : undefined
  }
}
