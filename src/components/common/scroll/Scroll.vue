<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
import BScroll from '@better-scroll/core'
import observeDom from '@better-scroll/observe-dom'
import Pullup from '@better-scroll/pull-up'
import observeImage from '@better-scroll/observe-image'
BScroll.use(observeDom)
BScroll.use(Pullup)
BScroll.use(observeImage)

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
      message: '哈哈'
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll.refresh()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage: true
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    if (this.pullUpLoad === true) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
}
</script>

<style scoped>

</style>