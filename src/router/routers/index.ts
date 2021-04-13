import type { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { LAYOUT } from '@/router/constant'

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: LAYOUT,
  redirect: '/home',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
  ],
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
