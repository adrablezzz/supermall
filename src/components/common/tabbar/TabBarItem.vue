<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path.indexOf(this.path) == -1){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align:baseline ;
    margin-top: 2px;
  }

 
</style>