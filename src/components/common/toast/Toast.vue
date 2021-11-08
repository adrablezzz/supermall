<template>
  <div id="toast" v-show="isShow">
    {{message}}
  </div>  
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='默认文字', duration=2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
  #toast {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 999;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: auto;
    padding: 0 10px;
    /* height: 50px; */
    text-align: center;
    line-height: 50px;
    border-radius: 5%;
  }
</style>