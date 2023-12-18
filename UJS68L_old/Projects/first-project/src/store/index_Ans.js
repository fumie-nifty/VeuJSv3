import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonName:''
  },
  mutations: {
    commonNameIn(state,data){
      state.commonName = data
    }
  },
  actions: {
  },
  modules: {
  }
})
