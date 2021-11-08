<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" ref="title" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info ref="params" :paramsInfo="paramsInfo"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import {getDetail, getRecommend, Goods, Shop, ParamsInfo} from 'network/detail'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailInfo from './childComps/DetailInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

export default {
  name: 'Detail',
  components: { 
    Scroll,
    GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      scrollY: [0],
      getOffsetTopY: null,
      currentIndex: null,
    }
  },
  mixins: [backTopMixin],
  created() {
    //获取iid
    this.iid = this.$route.params.iid
    //请求详情页参数
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)
      this.commentInfo = data.rate.list[0]
    })
    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })
    //定义防抖函数
    this.getOffsetTopY = debounce(() => {
      this.scrollY = [0]
      this.scrollY.push(this.$refs.params.$el.offsetTop)
      this.scrollY.push(this.$refs.comment.$el.offsetTop)
      this.scrollY.push(this.$refs.recommend.$el.offsetTop)
      this.scrollY.push(Number.MAX_VALUE)
      // console.log(this.scrollY)
    })
  },
  methods: {
    ...mapActions(['addToCart']),
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.scrollY[index])
    },
    imgLoad() {
      this.getOffsetTopY()
    },
    contentScroll(position) {
      //scrollY: [ 0, 76892, 78424, 78610 ]
      //-position.y
      //currentIndex
      let scrollY = this.scrollY
      // console.log(scrollY)  
      let y = -position.y
      //方案一
      for(let i = 0; i < scrollY.length; i++) {
        if((this.currentIndex !== i) && (y >= scrollY[i] && y < scrollY[i+1])) {
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs.title.currentIndex = this.currentIndex
        }
      }
      //返回按钮显示
      this.backTopShow(position)
    },
    //返回按钮抽取到了mixin中
    addCart() {
      // console.log('添加到购物车了哦')
      const product = {
        count: 1,
        checked: true,
      }
      //image,title,desc,realPrice,iid,
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realPrice = this.goods.realPrice
      product.iid = this.$route.params.iid
      // console.log(product)
      // this.$store.dispatch('addToCart', product).then(res => {
        // console.log(product.iid)
      // })
      this.addToCart(product).then(res => {
        // console.log(res)
        this.$toast.show(res)
      })
    }
  }  
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 11;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
  }
</style>