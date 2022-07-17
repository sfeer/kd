<template>
  <a-empty v-if="isEmpty" :image="simpleImage" />
  <div v-else ref="main" class="kd-echarts" />
</template>

<script setup lang="ts">
  import { computed, nextTick, PropType, ref, watch } from 'vue'
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

  renderData(props.data)
  watch(props.data, v => {
    renderData(v)
  })
  function renderData(v) {
    if (isEmpty) {
      chart.value = null
    } else {
      const opt = { ...props.option }
      if (chart.value === null) {
        nextTick(() => {
          chart.value = echarts.init(main.value)
          opt.dataset = { source: v }
          chart.value.setOption(opt)
        })
      } else {
        opt.dataset = { source: v }
        chart.value.setOption(opt)
      }
    }
  }
</script>
