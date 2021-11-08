<template>
  <div class="item">
    <check-button class="check" :isChecked="item.checked" @click.native="checkClick"/>
    <div class="left">
      <img :src="item.image" alt="">
    </div>
    <div class="right">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="rest">
        <span class="price">¥{{item.realPrice}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartGoodsListItem',
  components: { 
    CheckButton 
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      // this.isChecked = !this.isChecked
      this.item.checked = !this.item.checked
      // console.log(this.item.checked)
      // console.log(this.$store.state.goodsList[0].checked)
    }
  }
}
</script>

<style scoped>
  .item {
    height: 130px;
    background-color: #fff;
    display: flex;
    align-items: center;
  }

  .check {
    margin: 3px;
  }

  .left {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left img {
    width: 90%;
    height: 90%;
    border-radius: 10px;
  }

  .right {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center ;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .right * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    font-size: 20px;
  }

  .desc {
    font-size: 14px;
  }

  .rest {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .price {
    color: var(--color-high-text);
    font-size: 20px;
  }

  .count {
    font-size: 20px;
  }
</style>