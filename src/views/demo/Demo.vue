<template>
  <h2>Demo</h2>
  <button @click="test">测试</button>
  <multi-tab></multi-tab>
</template>

<script>
export default {
  methods: {
    test() {
      this.$multiTab.open('/demo', 'success')
    },
  },
}
</script>
