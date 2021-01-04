<template>
  <div>
    <div>左侧box树</div>
    <div>操作栏</div>
    <x-box :box="tree"></x-box>
  </div>
</template>

<script>
import XBox from '@/components/Box/XBox'
import {} from '@/api/page'

export default {
  name: 'XDesign',

  data() {
    return {

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
