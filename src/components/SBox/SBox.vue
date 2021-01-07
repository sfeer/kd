<template>
  <div
      class="s-box-wrapper"
      @mousedown="handleDragStart"
      @mousemove="handleDrag"
      @mouseup="handleDragEnd"
      @mouseleave="handleLeave">
    <div
        v-for="box in boxs"
        :key="box.id"
        :class="{box, active: cBox===box.id}"
        :style="boxStyle(box)"
        @mousedown.stop="moveDragStart(box,$event)">
      <p>{{ box.name }}</p>
    </div>
    <div class="point n" :style="pointStyle('n')" @mousedown.stop="resizeDragStart('n')"></div>
    <div class="point s" :style="pointStyle('s')" @mousedown.stop="resizeDragStart('s')"></div>
    <div class="point w" :style="pointStyle('w')" @mousedown.stop="resizeDragStart('w')"></div>
    <div class="point e" :style="pointStyle('e')" @mousedown.stop="resizeDragStart('e')"></div>
    <div class="new-box" v-if="newBox" :style="boxStyle(newBox)"></div>
  </div>
</template>

<script>
export default {
  name: 'SBox',

  data() {
    return {
      cBox: null,
      cPoint: null,
      dragType: null,
      newBox: null,
    }
  },

  props: {
    minW: {
      type: Number,
      default: 100
    },

    minH: {
      type: Number,
      default: 100
    },

    boxs: {
      type: Array,
      default() {
        return []
      }
    }
  },

  computed: {
    boxMap() {
      const res = {}
      this.boxs.forEach(o => {
        res[o.id] = o
      })
      return res
    }
  },

  methods: {
    // 调整大小点样式
    pointStyle(type) {
      if (this.cBox) {
        const box = this.cBox
        if (type === 'n') {
          return {top: (box.y - 20) + 'px', left: (box.x + box.w / 2) + 'px'}
        } else if (type === 's') {
          return {top: (box.y + box.h - 20) + 'px', left: (box.x + box.w / 2) + 'px'}
        } else if (type === 'w') {
          return {top: (box.y + box.h / 2) + 'px', left: (box.x - 20) + 'px'}
        } else if (type === 'e') {
          return {top: (box.y + box.h / 2) + 'px', left: (box.x + box.w - 20) + 'px'}
        }
      } else {
        return {display: 'none'}
      }
    },

    // 移动拖拽开始事件
    moveDragStart(box, e) {
      this.dragType = 'move'
      this.cBox = box
      this.moveEx = e.clientX - box.x
      this.moveEy = e.clientY - box.y
    },

    // 主面板鼠标拖拽开始事件
    handleDragStart(e) {
      this.dragType = 'create'
      const rect = this.$el.getBoundingClientRect()
      this.createEx = e.clientX - rect.left
      this.createEy = e.clientY - rect.top
    },

    // 主面板鼠标离开事件
    handleLeave() {
      this.dragType = null
    },

    // 主面板拖拽结束事件
    handleDragEnd() {
      if (this.dragType === 'create' && this.newBox) {
        this.boxs.push(this.newBox)
        this.newBox = null
      }
      this.dragType = null
    },

    // 主面板拖拽事件，须谨慎使用
    handleDrag(e) {
      if (this.dragType) {
        const rect = this.$el.getBoundingClientRect(), box = this.cBox
        if (this.dragType === 'resize') {
          const ex = e.clientX - rect.left - box.x,
              ey = e.clientY - rect.top - box.y
          if (this.cPoint === 'n') {
            box.y += ey
            box.h -= ey
          } else if (this.cPoint === 's') {
            box.h = ey
          } else if (this.cPoint === 'w') {
            box.x += ex
            box.w -= ex
          } else if (this.cPoint === 'e') {
            box.w = ex
          }
        } else if (this.dragType === 'move') {
          // TODO 计算最终位置是否有效，原始位置虚框，最终位置无效需高亮且拖拽结束后不移动
          box.x = e.clientX - this.moveEx
          box.y = e.clientY - this.moveEy
        } else if (this.dragType === 'create') {
          const tx = e.clientX - rect.left, ty = e.clientY - rect.top,
              sx = this.createEx, sy = this.createEy,
              ww = Math.abs(tx - sx), hh = Math.abs(ty - sy)

          if (ww > 100 && hh > 100) {
            this.newBox = {
              x: tx > sx ? sx : tx,
              y: ty > sy ? sy : ty,
              w: ww,
              h: hh
            }
          }
        }
      }
    },

    // 调整大小点拖拽开始事件
    resizeDragStart(type) {
      console.log('resize')
      this.dragType = 'resize'
      this.cPoint = type
    },

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
