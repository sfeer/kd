<template>
  <a-config-provider :locale="zhCN" :get-popup-container="getPopupContainer">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
  import zhCN from 'ant-design-vue/es/locale/zh_CN'

  function getPopupContainer(triggerNode) {
    return triggerNode ? triggerNode.parentNode : document.body
  }
</script>
