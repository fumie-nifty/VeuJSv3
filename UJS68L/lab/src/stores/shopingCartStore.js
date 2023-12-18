/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：shopingCartStore.js
 * 　　ショッピングカートstore
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', () => {

  // 合計
  const total = ref(0)
  //ショッピングカート
  const shoppingCart = ref([])

  /**
   * addEmployee
   * 　引数で渡された従業員オブジェクトを従業員リストに追加する
   * @function
   * @param emp {object} 従業員オブジェクト{employeeName : employeeName.value}
   */
  const addShoppingCart= (item) => {
    // ★実習2★
    //shoppingCartにitemを追加
    
    // 単価×数量をtotalに加算代入
    
  }

  return { addShoppingCart,shoppingCart,total}
})
