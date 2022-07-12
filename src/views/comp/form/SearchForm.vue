<template>
  <kd-search-form v-model="formData" :model="appSearchModel"></kd-search-form>
</template>

<script setup lang="ts">
  import { appSearchModel } from '../../../config/form'
  import { ref } from 'vue'

  const formData = ref({
    name: '',
    startTime: '',
    endTime: '',
    type: '',
    group: '',
    status: '',
    manager: '',
    isMicro: '',
  })
</script>
