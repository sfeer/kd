<template>
  <a-empty v-if="isEmpty" :image="simpleImage" />
  <div v-else ref="main" class="kd-echarts" />
</template>

<script setup lang="ts">
  import { computed, inject, nextTick, PropType, ref, watch } from 'vue'
  import { Empty } from 'ant-design-vue'
  import * as echarts from 'echarts'

  const props = defineProps({
    data: { type: Array, required: true },
    option: { type: Object as PropType<echarts.EChartsOption>, required: true },
  })
  const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
  const isEmpty = computed(() => !(props.data && props.data.length > 0))
  const chart = ref()
  const main = ref()
  const theme = inject('theme', ref('default'))

  renderData(props.data)
  watch(props.data, v => {
    renderData(v)
  })
  watch(theme, v => {
    if (chart.value) {
      chart.value.dispose()
      chart.value = echarts.init(main.value, v)
      const opt = { ...props.option, dataset: { source: props.data } }
      chart.value.setOption(opt)
    }
  })
  function renderData(v) {
    if (isEmpty.value) {
      chart.value = undefined
    } else {
      const opt = { ...props.option }
      if (chart.value) {
        opt.dataset = { source: v }
        chart.value.setOption(opt)
      } else {
        nextTick(() => {
          chart.value = echarts.init(main.value, theme.value)
          opt.dataset = { source: v }
          chart.value.setOption(opt)
        })
      }
    }
  }
</script>
