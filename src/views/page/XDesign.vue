<template>
  <div>
    <div>左侧box树</div>
    <div>操作栏</div>
    <x-box :box="tree"></x-box>
  </div>
</template>

<script>
import XBox from '@/components/XBox'

export default {
  name: 'XDesign',

  data() {
    return {
      tree: []
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {
    loadData() {

    }
  },

  components: {XBox}
}
</script>
