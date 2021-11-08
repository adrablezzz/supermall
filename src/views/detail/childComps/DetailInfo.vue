<template>
  <div v-if="detailInfo.detailImage !== undefined">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="key">{{detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage[0].list" class="detail-image">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
  .desc {
    font-size: 14px;
  }

  .key {
    font-size: 18px;
    color: #000;
  }

  .detail-image img{
    width: 100%;
  }
</style>