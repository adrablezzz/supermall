<template>
  <div class="params">
    <table class="sizes" v-if="paramsInfo.sizes !== undefined">
      <tr v-for="tr in paramsInfo.sizes[0]">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="tr in paramsInfo.infos">
        <td>{{tr.key}}</td>
        <td>{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .params {
    width: 100%;
    /* background-color: #bfa; */
    padding: 10px;
  }

  .sizes,.infos{
    width: 100%;
  }

  .sizes tr,.infos tr {
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.08);
  }

  .sizes td,.infos td {
    /* border: 1px solid black; */
    height: 50px;
  }

  .sizes td:not(:first-of-type){
    text-align: center;
  }

  .infos td:nth-of-type(1){
    width: 15vh;
  }

  .infos td:nth-of-type(2){
    color: var(--color-high-text);
  }
</style>