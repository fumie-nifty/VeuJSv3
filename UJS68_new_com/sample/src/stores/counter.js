/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：counter.js
 * 　　カウントアップ用のstore
 */

import { ref, computed } from 'vue'
// piniaからdefineStoreをインポート
import { defineStore } from 'pinia'

// defineStore()の戻り値をuseCounterStoreに格納
export const useCounterStore = defineStore('counter', () => {

  // リアクティブ変数の定義（state）
  const count = ref(0)

  // 算出プロパティ定義
  const doubleCount = computed(() => count.value * 2)

  // リアクティブ変数の値を更新するメソッド定義
  const increment = () => {
    count.value++
  }

  // 公開するメソッドとプロパティを戻り値として返す
  return { count, doubleCount, increment }
})
