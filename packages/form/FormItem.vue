<template>
  <a-form-item :label="model.name">
    <a-input v-if="type === 'input'" v-model:value="vv" :placeholder="`请选择${model.name}`" v-bind="model.props" />
    <a-input-number v-else-if="type === 'number'" v-model="vv" v-bind="model.props" />
    <a-select
      v-else-if="type === 'select'"
      :placeholder="`请选择${model.name}`"
      v-model="vv"
      :options="model.data?.map(x => ({ value: x.id, label: x.name }))"
    />
    <a-date-picker
      v-else-if="type === 'date'"
      :valueFormat="model.format"
      style="width: 100%"
      :placeholder="`请选择${model.name}`"
      v-model="vv"
    />
    <a-textarea v-else-if="type === 'textarea'" :auto-size="{ minRows: 2 }" />
    <template v-else-if="type === 'text'">{{ vv }}</template>
  </a-form-item>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { FormItemModel } from './formTypes'

  const props = defineProps({
    model: { type: Object as PropType<FormItemModel>, required: true },
    modelValue: null,
    defaultType: { type: String, default: 'input' },
  })

  const emit = defineEmits(['update:modelValue'])
  const type = computed(() => (props.model.type ? props.model.type : props.defaultType))
  const vv = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>
