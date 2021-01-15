<template>
  <a-sub-menu :key="$props.menuInfo.id">
    <template #title>
      <a-icon :type="$props.menuInfo.icon?$props.menuInfo.icon:'mail'"/>
      <span>{{$props.menuInfo.name}}</span>
    </template>
    <template v-for="item in $props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.id">
        <a-icon type="pie-chart"/>
        <span>{{item.name}}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.id" :menu-info="item"/>
    </template>
  </a-sub-menu>
</template>

<script>
  export default {
    props: ['menuInfo']
  }
</script>
