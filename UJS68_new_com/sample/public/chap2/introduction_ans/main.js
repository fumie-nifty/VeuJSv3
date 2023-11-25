/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：/chap2/introduction_ans/main.js
 */

//VueからcreateApp, refを取得
const { createApp, ref } = Vue

//アプリケーションのインスタンスの作成
createApp({
  setup() {

    //リアクティブ変数の定義
    const message = ref('Hello Vue!!')
    const name = ref('富士通　太郎')

    // 公開するメソッドやプロパティを戻り値として返す
    return {
      message,
      name
    }
  }
}).mount('#app')//アプリケーションのマウント
