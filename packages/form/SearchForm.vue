<template>
  <div class="kd-search-form" :class="{ collapsed }">
    <kd-form v-model="vv" :model="model" :layout="ll" />
    <div class="btns">
      <a-button @click="handleReset">重置</a-button>
      <a-button type="primary" html-type="submit" @click="handleSearch">查询</a-button>
      <a-button v-if="hasMore" type="link" @click="changeCollapsed">{{ collapsed ? '更多' : '收起' }}</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType, ref } from 'vue'
  import { FormItemModel } from './formTypes'
  import { chunk } from 'lodash-es'

  const props = defineProps({
    model: { type: Array as PropType<FormItemModel[]>, required: true },
    modelValue: { type: Object, default: {} },
    size: { type: Number, default: 4 },
  })
  const emit = defineEmits(['update:modelValue', 'search'])
  const collapsed = ref(true)

  const vv = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })

  const hasMore = computed(() => props.model.length > 3)
  const ll = computed(() => {
    const model = collapsed.value ? props.model.slice(0, 3) : props.model
    const keys = model.map(v => v.id)
    const vv = keys.length % props.size
    keys.push(...Array(props.size - (vv === 0 ? props.size : vv)))
    return chunk(keys, props.size)
  })

  // 搜索条件展开/收起
  function changeCollapsed() {
    collapsed.value = !collapsed.value
  }

  function handleSearch() {
    emit('search', vv)
  }

  function handleReset() {
    // TODO 重置表单
    // this.$refs.searchForm.resetFields()
    emit('search', vv)
  }
</script>
