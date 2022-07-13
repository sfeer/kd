<template>
  <a-form-item :label="model.name">
    <a-input v-if="!model.type" v-model:value="vv" :placeholder="`请选择${model.name}`" v-bind="model.props"></a-input>
    <a-input-number v-else-if="model.type === 'number'" v-model="vv" v-bind="model.props"></a-input-number>
    <a-select
      v-else-if="model.type === 'select'"
      :placeholder="`请选择${model.name}`"
      v-model="vv"
      :options="model.data?.map(x => ({ value: x.id, label: x.name }))"
    ></a-select>
    <a-date-picker
      v-else-if="model.type === 'date'"
      :valueFormat="model.format"
      style="width: 100%"
      :placeholder="`请选择${model.name}`"
      v-model="vv"
    ></a-date-picker>
  </a-form-item>
</template>

<script setup lang="ts">
  import { computed, PropType, watch } from 'vue'
  import { FormItemModel } from './formTypes'

  const props = defineProps({
    model: { type: Object as PropType<FormItemModel>, required: true},
    modelValue: null,
  })

  const emit = defineEmits(['update:modelValue'])

  const vv = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>
