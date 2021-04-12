import type { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue'),
  meta: {
    title: '首页',
  },
}

export const LoginRoute: RouteRecordRaw = {
  path: PageEnum.BASE_LOGIN,
  name: 'Login',
  component: () => import('@/views/Login.vue'),
  meta: {
    title: '登录页',
  },
}

export const basicRoutes: RouteRecordRaw[] = [LoginRoute, HomeRoute]
