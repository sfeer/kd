<template>
  <kd-table title="应用列表" :config="systemConfig" :loadData="loadData" :buttons="buttons" :info="infoHtml">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a-button type="link">编辑</a-button>
        <a-button type="link">启停</a-button>
        <a-button type="link">发布</a-button>
      </template>
    </template>
  </kd-table>
</template>

<script setup lang="ts">
  import { systemConfig } from '../../../config/table'
  import { ref } from 'vue'

  const buttons = ref([{ name: '删除', type: 'danger' }, { name: '升级', type: 'primary' }, { name: '归档' }])
  const infoHtml = ref('A类<b>2</b>个，B类<b>1</b>个')

  function loadData(search, pagination) {
    const data = [
      {
        id: '1',
        name: '人事系统',
        desc: 'fhrueighceiwhvfdbhgvbyfurgvyugdniuerwhgfergyufrgeu',
        time: '2022-08-01',
        num: 12,
      },
      { id: '2', name: '财务系统', desc: '', time: '2022-08-01', num: 22 },
      { id: '3', name: '综管系统', desc: '', time: '2022-08-01', num: 0 },
      { id: '4', name: '办公系统', desc: '', time: '2022-08-01', num: 8 },
      { id: '5', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '6', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '7', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '8', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '9', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '10', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '11', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
      { id: '12', name: '决策中心', desc: '', time: '2022-08-01', num: 10 },
    ]
    return Promise.resolve(data)
  }
</script>
