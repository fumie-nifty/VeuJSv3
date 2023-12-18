/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：/chap3/v-cloak/main.js
 */

const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('')
    return {
      message
    }
  }
}).mount('#app')
