<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Event.vue --> 

<script setup>
  import { ref, reactive } from 'vue'

  // 入力データ
  const data = reactive({
    first: '', //名字
    last: '', //名前
    count: 1 //カウントアップ用
  })

  //表示フラグ
  const showFlag = ref(false)

  /* ハンドラー定義 */
  // リアクティブ変数の利用
  const clickFlag = () => {
    showFlag.value = true
  }

  // イベントオブジェクトの利用
  const clickEvent = (event) => {
    alert(event.target.tagName)
  }

  // 引数の利用
  const sayHello = (value) => {
    alert(value)
  }

  // カウントアップ
  const countUp = () => {
    data.count++
  }
</script>

<template>
  名字：<input type="text" v-model="data.first">
  名前：<input type="text" v-model="data.last"><br>
  <!-- リアクティブ変数の利用 -->
  <button v-on:click="clickFlag">クリックして表示</button>
  <p v-show="showFlag">
    あなたの名前は{{ data.first + data.last }}</p>
  <hr>
  <!-- リアクティブ変数の利用 -->
  <button v-on:click="clickEvent">イベントオブジェクト</button><br>
  <!-- リアクティブ変数の利用 -->
  <button v-on:click="sayHello('hello!!')">
    hello!!という文字を渡す
  </button><br>
  <!-- カウントアップの利用（省略記法） -->
  <button @click="countUp">v-onは省略可能</button>
  <p>{{ data.count }}</p>
  <!-- カウントアップの利用（１回のみ） -->
  <button @click.once="countUp">一度しか実行されない</button>
</template>

<style scoped>
hr {
  margin-top: 10px;
}

button {
  margin-top: 15px;
}
</style>
