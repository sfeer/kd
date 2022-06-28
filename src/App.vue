<template>
  <kd-layout title="XXXX系统" :menu="menu">
    <router-view></router-view>
  </kd-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const menu = ref([
    {
      id: '1',
      name: '文档',
      icon: 'user',
      child: [
        {
          id: '11',
          name: '模块1',
          icon: 'start',
          child: [
            { id: '111', name: '功能1' },
            { id: '112', name: '功能2' },
            { id: '113', name: '功能3' },
            { id: '114', name: '功能4' },
          ],
        },
        {
          id: '12',
          name: '模块2',
          icon: 'start',
          child: [
            { id: '121', name: '功能1' },
            { id: '122', name: '功能2' },
            { id: '123', name: '功能3' },
            { id: '124', name: '功能4' },
          ],
        },
        {
          id: '13',
          name: '模块3',
          icon: 'start',
          child: [
            { id: '131', name: '功能1' },
            { id: '132', name: '功能2' },
            { id: '133', name: '功能3' },
            { id: '134', name: '功能4' },
          ],
        },
        {
          id: '14',
          name: '模块4',
          icon: 'start',
          child: [
            { id: '141', name: '功能1' },
            { id: '142', name: '功能2' },
            { id: '143', name: '功能3' },
            { id: '144', name: '功能4' },
          ],
        },
        {
          id: '15',
          name: '模块5',
          icon: 'start',
          child: [
            { id: '151', name: '功能1' },
            { id: '152', name: '功能2' },
            { id: '153', name: '功能3' },
            { id: '154', name: '功能4' },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '组件',
      icon: 'setting',
      child: [
        {
          id: '21',
          name: '通用',
          icon: 'news',
          child: [{ id: '211', name: '按钮', url: '/comp/common/btn' }],
        },
        {
          id: '22',
          name: '表单',
          icon: 'news',
          child: [
            { id: '221', name: '输入框', url: '/comp/form/input' },
            { id: '222', name: '颜色选择框', url: '/comp/form/color-picker' },
          ],
        },
      ],
    },
    { id: '3', name: '场景', icon: 'setting' },
    { id: '4', name: '联系', icon: 'setting' },
  ])
</script>
