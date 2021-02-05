// 页面模块
import '@/assets/page.less'
import SBox from '@/components/SBox'
import '@/components/SBox/style/index.less'
import router from '@/router'

const routers = [
  {
    path: '/page/list',
    component: () => import(/* webpackChunkName: "page" */ '../views/page/List')
  },
  {
    path: '/page/design/:pid',
    component: () => import(/* webpackChunkName: "page" */ '../views/page/SDesign')
  }
]
routers.forEach(d => {
  router.addRoute(d)
})

export default app => app.use(SBox)
