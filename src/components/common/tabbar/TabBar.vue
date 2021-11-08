<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);

    font-size: 14px;
    z-index: 9;
  }

  
</style>