<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- PiniaChildComponent.vue --> 

<script setup>
  //conter.jsのインポート
  import { useCounterStore } from '@/stores/counter';
  //counterストアーオブジェクトの取得
  const counter = useCounterStore()
</script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <p>
      <!--counterストアーの状態countの参照-->
      counter:　{{ counter.count }}　
      <!--counterストアーの状態更新メソッドの呼出さ以-->
      <button v-on:click="counter.increment">カウントアップ</button>
    </p>
  </div>
</template>

<style scoped></style>
