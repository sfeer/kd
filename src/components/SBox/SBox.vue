<template>
  <div class="t-box-wrapper">
    <div
        v-for="box in data"
        :key="box.id"
        :class="{box, active: cBox===box.id}"
        :style="boxStyle(box)">
      <a-button
          v-show="cBox===box.id"
          >选择组件
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SBox',

  data() {
    return {
      cBox: null
    }
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },

  boxMap() {
    const res = {}
    this.data.forEach(o => {
      res[o.id] = o
    })
    return res
  },

  methods: {
    boxStyle(box) {
      return {
        top: box.y + 'px',
        left: box.x + 'px',
        width: box.w + 'px',
        height: box.h + 'px'
      }
    }
  }
}
</script>
