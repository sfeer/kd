<template>
  <vueCropper v-bind="option"></vueCropper>
</template>

<script setup lang="ts">
  import { VueCropper } from 'vue-cropper'
  import 'vue-cropper/dist/index.css'

  defineProps({ option: { type: Object, required: true } })
</script>
