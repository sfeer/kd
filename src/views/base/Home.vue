<template>
  <h2>首页</h2>
  <button @click="test">展开/收起</button>
</template>

<script>
import {collapse} from '@/hook/layout'

export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    test() {
      this.collapsed = !this.collapsed
      collapse(this.collapsed)
    }
  }
}
</script>
