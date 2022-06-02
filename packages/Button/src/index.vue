<template>
  <a-button :type="type" @click="$emit('click', $event)">
    <slot></slot>
  </a-button>
</template>

<script lang="ts" setup>
  import { Button as AButton } from 'ant-design-vue'
  import type { PropType } from 'vue'
  import type { ButtonType } from 'ant-design-vue/es/button/buttonTypes'

  defineProps({ type: String as PropType<ButtonType> })
  defineEmits(['click'])
</script>
