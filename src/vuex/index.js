import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './moduleA'

Vue.use(Vuex);
const state = {
  price: 11,
  num: -1
}
export default new Vuex.Store({
  modules: {
    mod1: {
      state,
      getters,
      mutations,
      actions
    },
    mod2: moduleA
  }


})