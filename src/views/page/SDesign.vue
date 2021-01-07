<template>
  <div class="s-design-wrapper bing-bg">
    <div class="s-design-header"></div>
    <div class="s-design-tools"></div>
    <s-box class="s-design-main" :boxs="boxs"/>
  </div>
</template>

<script>
import {getPage} from '@/api/page'

export default {
  data() {
    return {
      pageId: this.$route.params.pid,
      pageName: null,
      bingImg: null,
      boxs: []
    }
  },

  created() {
    if (this.pageId) {
      getPage(this.pageId).then(d => {
        this.pageName = d.name
        this.boxs = d.boxs
      })
    }
  }
}
</script>
