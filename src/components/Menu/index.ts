import SideMenu from './SideMenu'
import SubMenu from './SubMenu'

export default {
  install(app) {
    app.component(SideMenu.name, SideMenu)
    app.component(SubMenu.name, SubMenu)
    return app
  }
}
