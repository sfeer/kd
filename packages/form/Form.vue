<template>
  <a-form class="kd-form" :model="vv" :label-col="labelCol" :wrapper-col="wrapperCol">
    <template v-if="layout">
      <a-row v-for="(row, i) in layout" :key="`row-${i}`" type="flex">
        <template v-if="Array.isArray(row)">
          <a-col v-for="(col, j) in row" flex="1 1 0" :key="`col-${j}`">
            <kd-form-item v-if="col && map[col]" v-model="vv[col]" :model="map[col]"></kd-form-item>
          </a-col>
        </template>
        <div v-else class="kd-form-group">
          <slot name="group" :row="row">{{ row }}</slot>
        </div>
      </a-row>
    </template>
    <template v-else>
      <kd-form-item v-for="(v, k) in map" :key="k" v-model="vv[k]" :model="v"></kd-form-item>
    </template>
  </a-form>
</template>

<script setup lang="ts">
  import { computed, HTMLAttributes, PropType } from 'vue'
  import { ColProps } from 'ant-design-vue'
  import { FormItemModel } from './formTypes'

  const props = defineProps({
    labelCol: { type: Object as PropType<ColProps & HTMLAttributes>, default: { flex: '100px' } },
    wrapperCol: { type: Object as PropType<ColProps & HTMLAttributes>, default: { flex: 'auto' } },
    model: { type: Array as PropType<FormItemModel[]>, required: true },
    layout: Array as PropType<(string | string[])[]>,
    modelValue: { type: Object, default: {} },
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

  const map = computed(() => Object.fromEntries(props.model.map(v => [v.id, v])))
</script>
