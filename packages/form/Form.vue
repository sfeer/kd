<template>
  <a-form class="kd-form" :model="vv" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row v-for="(row, i) in layout" :key="`row-${i}`" type="flex">
      <template v-if="Array.isArray(row)">
        <a-col v-for="(col, j) in row" flex="1 1 0" :key="`col-${j}`">
          <a-form-item v-if="col" :label="map[col].name">
            <a-input
              v-if="!map[col].type"
              v-model:value="vv[col]"
              :placeholder="`请选择${map[col].name}`"
              v-bind="map[col].props"
            ></a-input>
            <a-input-number
              v-else-if="map[col].type === 'number'"
              v-model="vv[col]"
              v-bind="map[col].props"
            ></a-input-number>
            <a-select
              v-else-if="map[col].type === 'select'"
              :get-popup-container="triggerNode => triggerNode.parentNode"
              :placeholder="`请选择${map[col].name}`"
              v-model="vv[col]"
              :options="map[col].data?.map(x => ({ value: x.id, label: x.name }))"
            ></a-select>
            <a-date-picker
              v-else-if="map[col].type === 'date'"
              :valueFormat="map[col].format"
              style="width: 100%"
              :placeholder="`请选择${map[col].name}`"
              v-model="vv[col]"
            ></a-date-picker>
          </a-form-item>
        </a-col>
      </template>
      <div v-else class="kd-form-group">{{ row }}</div>
    </a-row>
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
