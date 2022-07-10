<template>
  <kd-table title="应用列表" :config="systemConfig" :loadData="loadData"></kd-table>
</template>

<script setup lang="ts">
  import { systemConfig } from '../../../config/table'

  function loadData(search, pagination) {
    console.log(search, pagination)
    const data = [
      { id: '1', name: '人事系统', time: '2022-08-01', num: 12 },
      { id: '2', name: '财务系统', time: '2022-08-01', num: 22 },
      { id: '3', name: '综管系统', time: '2022-08-01', num: 0 },
      { id: '4', name: '办公系统', time: '2022-08-01', num: 8 },
      { id: '5', name: '决策中心', time: '2022-08-01', num: 10 },
    ]
    return Promise.resolve(data)
  }
</script>
