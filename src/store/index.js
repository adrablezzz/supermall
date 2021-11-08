import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

const state = {
  goodsList: [],
  message: 'hello vuex,你好...'
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store