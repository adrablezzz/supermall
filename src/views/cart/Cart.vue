<template>
  <div>
    <nav-bar class="cart-bar"><div slot="center">购物车<span v-if="getCartLength">({{getCartLength}})</span></div></nav-bar>
    <scroll class="cart-content" ref="scroll">
     <cart-goods-list/>
    </scroll>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartGoodsList from './childCopms/CartGoodsList'
import CartBottomBar from './childCopms/CartBottomBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartGoodsList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(['getCartLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-bar {
    color: #fff;
    font-size: 18px;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .cart-content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .bottom-bar {
    position: absolute;
    z-index: 999;
    bottom: 49px;
  }
</style>