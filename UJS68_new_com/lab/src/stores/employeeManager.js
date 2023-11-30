/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：shoppingCart.js
 * 　　従業員登録用store
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', () => {

  // 従業員
  const total = ref(0)
  //従業員リスト
  const itemList = ref([])

  /**
   * addEmployee
   * 　引数で渡された従業員オブジェクトを従業員リストに追加する
   * @function
   * @param emp {object} 従業員オブジェクト{employeeName : employeeName.value}
   */
  const addItemList= (emp) => {
    itemList.value.push(emp)
  }

  return { addShoppingCart,}
})
