<template>
  <div v-for="tab in tabs" :key="tab.id">{{ tab.name }}</div>
  <div>{{ count }}</div>
  <div>{{ user.name }}({{ user.id }})</div>
</template>

<script>
export default {
  name: 'MultiTab',

  data() {
    return {
      count: this.$multiTab.count,
      user: this.$multiTab.user,
      tabs: this.$multiTab.tabs
    }
  },

  mounted() {
    console.log(this.count, this.user, this.tabs)
  }
}
</script>
