/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：counter.js
 * 　　カウントアップ用のstore
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
