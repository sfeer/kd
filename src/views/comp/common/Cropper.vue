<template>
  <kd-cropper :option="option"></kd-cropper>
</template>

<script setup lang="ts">
import { ref } from "vue";

const option = ref({
  img: '/img/1.jpg',
  autoCrop: true,
  autoCropWidth: 300,
  autoCropHeight: 150,
})
</script>
