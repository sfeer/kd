<template>
  <div class="kd-table">
    <!--搜索表单-->
    <div class="header">
      <div v-if="title" class="title">{{ title }}</div>
    </div>
    <a-table
      class="kd-table"
      :data-source="data"
      :row-key="config.rowKey"
      :columns="config.columns"
      :pagination="pagination"
      @change="handleChange"
    >
      <template #[item]="text, record" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="record"></slot>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { TableConfig } from './tableTypes'

  const props = defineProps({
    title: String,
    loadData: Function,
    config: Object as PropType<TableConfig>,
  })

  const data = ref()
  const searchData = ref()
  const pagination = ref()

  // searchData.value = props.config?.searchData
  pagination.value = props.config?.pagination
  doLoad()

  function doLoad() {
    props.loadData &&
      props.loadData(searchData, pagination).then(v => {
        data.value = v
      })
  }

  function handleChange(v) {
    pagination.value = v
    doLoad()
  }
</script>
