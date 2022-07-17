<template>
  <div class="kd-table">
    <kd-search-form v-if="config.search" v-model="searchData" :model="config.search"></kd-search-form>
    <div class="header">
      <div v-if="title" class="title">{{ title }}</div>
      <a-button class="btn" v-for="(btn, i) in buttons" :key="i" :type="btn.type" @click="btn.click">
        {{ btn.name }}
      </a-button>
    </div>
    <slot name="info">
      <div v-if="info" class="info">{{info}}</div>
    </slot>
    <a-table
      :data-source="data"
      :row-key="config.rowKey"
      :columns="columns"
      :pagination="pagination"
      @change="handleChange"
      @resize-column="handleResizeColumn"
      :row-selection="{}"
    >
      <template #[item]="cell" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="cell"></slot>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { TableButtonType, TableConfig } from './tableTypes'

  const props = defineProps({
    title: String,
    loadData: Function,
    config: { type: Object as PropType<TableConfig>, required: true },
    buttons: Array as PropType<TableButtonType[]>,
    info: String,
  })

  const data = ref()
  const searchData = ref({})
  const pagination = ref()
  const columns = ref()

  pagination.value = props.config?.pagination
  columns.value = props.config?.columns.map(v => ({ ellipsis: true, resizable: v.width, ...v }))
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

  function handleResizeColumn(w, col) {
    col.width = w
  }
</script>
