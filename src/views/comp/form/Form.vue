<template>
  <kd-form v-model="formData" :model="userModel" :layout="userLayout">
    <template #group="{row}">
      id={{row.id}},name={{row.name}}
    </template>
  </kd-form>
  <kd-form v-model="formData2" :model="deptModel"/>
</template>

<script setup lang="ts">
  import { userModel, userLayout, deptModel } from '../../../config/form'
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

  const formData2 = ref({})
</script>
