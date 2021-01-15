<template>
  <iframe class="sf-ifr"></iframe>
</template>

<script>
export default {
  created() {
    window.addEventListener('message', this.handleMsg)
  },

  mounted() {
    if (this.$route.fullPath.startsWith('/ifr/')) {
      this.$el.src = this.$route.fullPath.substr(4)
    }
  },

  beforeDestroy() {
    window.removeEventListener('message', this.handleMsg)
  },

  methods: {
    handleMsg(event) {
      if (event.data && event.data.path) {
        this.$multiTab.open(event.data.path, event.data.name)
      }
    }
  }
}
</script>

<style scoped>
.sf-ifr {
  border: none;
  width: 100%;
  height: 100%;
}
</style>