import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[], //すべての商品情報を格納
    shoesData:{} //選択された商品情報を格納
  },
  mutations: {
    //lists更新用
    listIn(state,lists){
      state.lists = lists
    },
    //shoesData更新用
    shoesIn(state,data){
      state.shoesData = data
    }
  }
})
