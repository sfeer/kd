<template>
  <kd-form v-model="formData" :model="userModel" :layout="userLayout"></kd-form>
</template>

<script setup lang="ts">
  import { userModel, userLayout } from '../../../config/form'
  import { ref } from 'vue'

  const formData = ref({
    name: '',
    oldName: '',
    sex: '',
    birthday: '',
    country: '',
    nationCode: '',
    birthArea: '',
    educationCode: '',
    politicCode: '',
    sort: '',
    cerType: '',
    cerNumber: '',
    photo: '',
  })
</script>
