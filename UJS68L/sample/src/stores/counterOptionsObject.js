/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：counterOptionsObject.js
 * 　　Optionsオブジェクトを使用したカウントアップ用のstore　
 */

//piniaからdefineStoreをインポート
import { defineStore } from 'pinia'

// defineStore()の戻り値をuseCounterStoreに格納
export const useCounterStore = defineStore('counter', {

  // 状態変数の定義（state）
  state: () => ({
    count: 0,
    employeeList: []
  }),
  // 算出プロパティの定義
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // stateの値を更新する関数
  actions: {
    increment() {   // thisを使用するためアロー関数は使えない
      this.count++; // useCounterStoreのインスタンスにthisでアクセス
    }
  }
})