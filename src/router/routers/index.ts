import type {RouteRecordRaw} from 'vue-router'
import {PageEnum} from '@/enums/pageEnum'

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: '首页',
  }
}

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: '登录页',
  }
}

export const basicRoutes: RouteRecordRaw[] = [LoginRoute, HomeRoute]