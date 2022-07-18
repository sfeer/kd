<template>
  <kd-echarts :data="trendData" :option="trendOption" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const trendData = ref([
    ['9时', 41, 22],
    ['10时', 42, 19],
    ['11时', 52, 13],
    ['12时', 20, 11],
    ['13时', 21, 16],
    ['14时', 13, 7],
    ['15时', 18, 9],
    ['16时', 27, 13],
    ['17时', 23, 12],
    ['18时', 38, 20],
    ['19时', 45, 21],
    ['20时', 24, 14],
    ['21时', 31, 17],
    ['22时', 16, 9],
    ['23时', 15, 12],
    ['0时', 23, 6],
    ['1时', 6, 5],
    ['2时', 0, 0],
    ['3时', 0, 0],
    ['4时', 3, 2],
    ['5时', 11, 6],
    ['6时', 10, 6],
    ['7时', 38, 26],
    ['8时', 125, 68],
  ])
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
