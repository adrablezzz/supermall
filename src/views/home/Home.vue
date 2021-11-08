<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControlCopy" class="tab-control-copy" v-show="isShowTabControlCopy"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="homeScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @HomeSwiperImgLoad="HomeSwiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template> 

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {backTopMixin} from 'common/mixin'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowTabControlCopy: false,
      HomeSwiperOffsetTop: 0,
      saveScrollY:0
    }
  },
  mixins: [backTopMixin],
  created() {
    //请求banner和recommend
     this.getHomeMultidata()

     this.getHomeGoods('new')
     this.getHomeGoods('pop')
     this.getHomeGoods('sell')
  },
  // destroyed() {
  //   console.log('已销毁')
  // },
  activated() {
    // console.log('home活跃: ' + this.saveScrollY)
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveScrollY, 0)
  },
  deactivated() {
    // console.log('home不活跃: ' + this.saveScrollY)
    this.saveScrollY = this.$refs.scroll.scroll.y
  },
  methods: {
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index]
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControlCopy.currentIndex = index
    },
    //回顶图标mixin

    homeScroll(position) {
      this.backTopShow(position)
      this.isShowTabControlCopy = (-position.y) > this.HomeSwiperOffsetTop + 78
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    HomeSwiperImgLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.HomeSwiperOffsetTop = this.$refs.tabControl.$el.offsetTop
    },


    //网络请求数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }) 
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list) //接口更换了,已解决
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    /* position: -webkit-sticky;
    position: sticky; */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  /* .tab-control {
    position: sticky;
    position: -webkit-sticky;
    top: 44px;
    z-index: 8;
  } */

  .tab-control-copy {
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>