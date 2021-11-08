<template>
  <div class="shop-info">
    <div class="shop-head">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="wrapper">
      <div class="sell-info">
        <div>
          <span>{{shop.sells}}</span>
          <span>总销量</span>
        </div>
        <div>
          <span>{{shop.goodsCount}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score-info">
        <div v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span  class="score" :class="{scoreBetter: item.score>=5}">{{item.score}}</span>
          <span class="is-better">
            <span v-if="item.score >= 5" class="better">高</span>
            <span v-else class="not-better">低</span>
          </span>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <a href="#">
        <span>进店逛逛</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shop-head {
    padding: 10px 0;
    font-size: 20px;
    color: var(--color-text);
  }

  .shop-head img {
    width: 60px;
    vertical-align: middle;
    margin: 10px;
  }

  .wrapper{
    width: 100%;
    height: 100px;
  }

  .sell-info {
    height: 100px;
    width: 50%;
    float: left;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .sell-info div {
    float: left;
    flex: 1;
    text-align: center;
  }

  .sell-info span {
    display: block;
    padding: 2px;
  }

  .score-info {
    /* float: left; */
    height: 100px;
    font-size: 18px;
    margin-left: 10%;
  }

  .score-info * {
    padding: 6px;
  }

  .is-better {
    float: right;
    margin: -6px;
  }

  .better {
    color: #fff;
    background-color: var(--color-tint);
  }
  .not-better {
    color: #fff;
    background-color: green;
  }

  .score {
    color: green;
  }

  .scoreBetter {
    color: var(--color-high-text);
  }

  .enter-shop {
    height: 60px;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .enter-shop span {
    padding: 5px 50px;
    background-color: rgb(219, 219, 219);
    border-radius: 999em;
  }
</style>