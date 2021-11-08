<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="HomeSwiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isImgLoad: false
    }
  },
  methods: {
    HomeSwiperImgLoad() {
      if(!this.isImgLoad) {
        this.$emit('HomeSwiperImgLoad')
        this.isImgLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>