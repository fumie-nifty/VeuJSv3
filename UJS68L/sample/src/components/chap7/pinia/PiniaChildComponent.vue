<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- PiniaChildComponent.vue --> 

<script setup>
  // conter.jsのインポート
  import { useCounterStore } from '@/stores/counterStore'
  // counterストアーオブジェクトの取得
  const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <p>
      <!--counterストアーの状態countの参照-->
      counterStore:　{{ counterStore.count }}　
      <!--counterストアーの状態更新メソッドの呼出さ以-->
      <button v-on:click="counterStore.increment">カウントアップ</button>
    </p>
  </div>
</template>

<style scoped></style>
