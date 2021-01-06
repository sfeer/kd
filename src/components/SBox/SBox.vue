<template>
  <div class="s-box-wrapper">
    <div
        v-for="box in data"
        :key="box.id"
        :class="{box, active: cBox===box.id}"
        :style="boxStyle(box)"
        @click="boxClick(box)">
      <p>{{box.name}}</p>
    </div>
    <div class="box" style="top:350px;left:20px;width:400px;height:250px;">
      <p>jdfreioufyhreyui</p>
      <div class="n"></div>
      <div class="s"></div>
      <div class="w"></div>
      <div class="e"></div>
      <div class="wn"></div>
      <div class="en"></div>
      <div class="es"></div>
      <div class="ws"></div>
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
    },

    boxClick(box) {
      this.cBox = box.id
      this.$emit('boxClick', box)
    }
  }
}
</script>
