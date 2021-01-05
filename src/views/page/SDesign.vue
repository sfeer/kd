<template>
  <div class="s-design-wrapper">
    <div class="s-design-header"></div>
    <div class="s-design-tools"></div>
    <div class="s-design-main">
      <s-box :data="boxs"></s-box>
    </div>
  </div>
</template>

<script>
import {getPage} from '@/api/page'

export default {
  data() {
    return {
      pageId: this.$route.params.pid,
      pageName: null,
      boxs: []
    }
  },

  created() {
    if (this.pageId) {
      getPage(this.pageId).then(d=>{
        this.pageName = d.name
        this.boxs = d.boxs
      })
    }
  }
}
</script>
