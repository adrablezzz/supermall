<template>
  <div>
    <div v-for="(item, index) in $store.state.goodsList" :key="index">
      <cart-goods-list-item :item="item"/>
    </div>
  </div>
  
</template>

<script>
import CartGoodsListItem from './CartGoodsListItem.vue'

export default {
  name: 'CartGoodsList',
  components: { 
    CartGoodsListItem 
  },
}
</script>

<style scoped>

</style>