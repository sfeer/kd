<template>
  <color-picker v-model:pureColor="pureColor"></color-picker>
</template>

<script setup lang="ts">
  import { ColorPicker } from 'vue3-colorpicker'
  import 'vue3-colorpicker/style.css'
  import { ref } from 'vue'

  const pureColor = ref<string>('#7166de')
</script>
