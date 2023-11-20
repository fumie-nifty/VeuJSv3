<script setup>
  import { ref, reactive } from 'vue'

  const data = reactive({
    first: '', //名字
    last: '', //名前
    count: 1 //カウントアップ用
  })
  const showFlag = ref(false)

  const clickFlag = () => {
    showFlag.value = true
  }

  const clickEvent = (event) => {
    alert(event.target.tagName)
  }

  const sayHello = (value) => {
    alert(value)
  }

  const countUp = () => {
    data.count++
  }

</script>

<template>
  名字：<input type="text" v-model="data.first">
  名前：<input type="text" v-model="data.last"><br>
  <button v-on:click="clickFlag">クリックして表示</button>
  <p v-show="showFlag">
    あなたの名前は{{ data.first + data.last }}
  </p>
  <hr>
  <button v-on:click="clickEvent">イベントオブジェクト</button><br>
  <button v-on:click="sayHello('hello!!')">
    hello!!という文字を渡す
  </button><br>
  <button @click="countUp">v-onは省略可能</button>
  <p>{{ data.count }}</p>
  <button @click.once="countUp">一度しか実行されない</button>
</template>

<style scoped>
hr{
  margin-top: 10px;
}

button{
  margin-top: 15px;
}
</style>
