<template>
  <img :class="{checked: isChecked}" class="checkButton" src="~assets/img/cart/tick.svg" alt="">
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .checkButton {
    /* background-color: var(--color-tint); */
    width: 20px;
    border: 1px solid #aaa;
    border-radius: 50%;
  }

  .checked {
    border: 1px solid var(--color-tint);
    background-color: var(--color-tint);
  }
</style>