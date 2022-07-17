<template>
  <kd-echarts :data="trendData" :option="trendOption" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const trendData = ref()
  const trendOption = ref({
    title: {
      text: '应用访问趋势',
      textStyle: { fontSize: 16, fontWeight: 'normal' },
      left: 10,
    },
    grid: { top: 40, left: 40, right: 20, bottom: 30 },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['访问次数', '访问人数'],
    },
    xAxis: {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
      minInterval: 1,
    },
    dataset: {},
    series: [
      {
        name: '访问次数',
        type: 'line',
        smooth: true,
        itemStyle: { color: '#293BA7' },
      },
      {
        name: '访问人数',
        type: 'line',
        smooth: true,
        itemStyle: { color: '#50BCA1' },
      },
    ],
  })
</script>
