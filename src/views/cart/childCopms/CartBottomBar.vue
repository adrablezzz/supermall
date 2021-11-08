<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button @click.native="toSelectAll" :isChecked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="right">
      <div class="total">
        <span>合计：</span>
        <span class="price">¥{{getTotalPrice}}</span>
      </div>
      <span class="settlement" @click="settleClick">
        <span>结算</span>
        <span v-if="getTotalCount">({{getTotalCount}})</span>
      </span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'CartBottomBar',
  data() {
    return {
      tips: '你的购物车还没有商品!'
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['getTotalPrice', 'getTotalCount','isSelectAll'])
  },
  methods: {
    ...mapActions(['toSelectAll']),
    // selectAll() {
    //   //1.全部选中了: false
    //   if(this.isSelectAll) {
    //     this.$store.state.goodsList.forEach(item => item.checked = false);
    //   }else {
    //     this.$store.state.goodsList.forEach(item => item.checked = true);
    //   }
    // }
    settleClick() {
      if(this.$store.state.goodsList.length === 0) {
        this.$toast.show(this.tips)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    background-color: #fff;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .left :first-of-type{
    margin: 0 5px;
    vertical-align: middle;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .price {
    color: var(--color-high-text);
    font-size: 14px;
  }

  .settlement {
    background-color: var(--color-high-text);
    color: #fff;
    height: 35px;
    line-height: 35px;
    width: 50%;
    text-align: center;
    border-radius: 999em;
  }
</style>