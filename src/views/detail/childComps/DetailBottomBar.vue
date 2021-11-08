<template>
  <div id="bottom-bar">
    <div class="left">
      <div>
        <i class="store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i></i>
        <span>客服</span>
      </div>
      <div>
        <i></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="addCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      // console.log('加入购物车了')
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  #bottom-bar {
    height: 49px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .left {
    display: flex;
    font-size: 14px;
    width: 40%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
  }

  .left i {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #f00;
    margin-bottom: 5px;
  }

  .left span {
    position: relative;
    left: -4px;
  }

  .right {
    color: #fff;
    width: 60%;
    height: 39px;
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .right div {
    width: 50%;
    height: 39px;
    text-align: center;
    line-height: 39px;
  }

  .right :first-of-type {
    background-color: orange;
    border-radius: 999em 0 0 999em;
  }
  .right :nth-of-type(2) {
    background-color: red;
    border-radius: 0 999em 999em 0;
  }

</style>