<template>
  <div class="goods-base" v-if="goods !== undefined">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span>{{goods.newPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount-active">{{goods.discount}}</span>
    </div>
    <div class="col">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-base {
    margin-top: 15px;
    padding: 10px 0;
    /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); */
  }

  .goods-base * {
    padding: 5px 0;
  }

  .title {
    font-size: 20px;
    color: black;
    padding: 0 10px;
  }

  .price {
    padding: 0 10px;
  }

  .price * {
    padding-right: 3px;
  }

  .price :first-child {
    /* color: var(--color-tint); */
    color: var(--color-high-text);
    font-size: 30px;
    font-weight: bold;
  }

  .price :nth-child(2) {
    font-size: 15px;
    text-decoration-line: line-through;
  }

  .discount-active {
    background-color: var(--color-tint);
    color: #fff;
    padding: 3px;
    border-radius: 999em;
    vertical-align: top;
  }

  .col,.service {
    display: flex;
    justify-content: space-between;
  }

  .col {
    font-size: 15px;
    color: rgb(158, 158, 158);
    margin: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .service {
    color: rgb(53, 53, 53);
    padding: 10px ;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    padding: 20px 10px;
  }

  .service * {
    vertical-align: middle;
  }

  .service img {
    width: 20px;
  }
</style>