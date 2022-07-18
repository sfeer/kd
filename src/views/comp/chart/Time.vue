<template>
  <kd-echarts :data="data" :option="option" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const data = ref([
    ['项目名称', '开始时间', '阶段一', '阶段二', '阶段三', '阶段四', '阶段五'],
    ['项目1', 0, 4, 2, 2, 4, 1],
    ['项目2', 0, 4, 2, 2, 4, 1],
    ['项目3', 0, 2, 4, 2, 4, 1],
    ['项目4', 2, 4, 3, 2, 4, 1],
    ['项目5', 4, 4, 2, 2, 4, 1],
    ['项目6', 0, 2, 2, 2, 4, 1],
    ['项目7', 0, 4, 2, 2, 4, 1],
    ['项目8', 3, 4, 2, 2, 4, 1],
    ['项目9', 0, 4, 2, 2, 4, 1],
    ['项目10', 1, 1, 2, 2, 4, 1],
    ['项目11', 2, 1, 2, 2, 4, 1],
    ['项目12', 3, 4, 2, 2, 4, 1],
  ])

  const option = ref({
    grid: { top: 40, left: 60, right: 20, bottom: 30 },
    tooltip: { trigger: 'axis' },
    xAxis: {},
    yAxis: {
      type: 'category',
    },
    dataset: {},
    series: [
      {
        type: 'bar',
        stack: 'total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent',
        },
      },
      { type: 'bar', stack: 'total' },
      { type: 'bar', stack: 'total' },
      { type: 'bar', stack: 'total' },
      { type: 'bar', stack: 'total' },
      { type: 'bar', stack: 'total' },
    ],
  })
</script>
