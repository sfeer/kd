<template>
  <color-picker v-model:pureColor="pureColor" format="name"></color-picker>
</template>

<script setup lang="ts">
  import { ColorPicker } from 'vue3-colorpicker'
  import 'vue3-colorpicker/style.css'
  import { computed } from 'vue'

  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])

  const pureColor = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>
