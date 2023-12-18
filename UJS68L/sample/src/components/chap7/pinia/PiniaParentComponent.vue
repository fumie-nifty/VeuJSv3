<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- PiniaParentComponent.vue --> 

<script setup>
  import PiniaChildComponent from '@/components/chap7/pinia/PiniaChildComponent.vue'
  
  // conter.jsのインポート
  import { useCounterStore } from '@/stores/counterStore';
  //counterストアーオブジェクトの取得
  const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h2>親コンポーネント</h2>   
    <p>
      <!--counterストアーの状態countの参照-->
      counterStore:　{{ counterStore.count }}　
      <!--counterストアーの状態更新メソッドの呼出さ以-->
      <button v-on:click="counterStore.increment">カウントアップ</button>
    </p>
    <PiniaChildComponent />
  </div>
</template>

<style scoped>
div {
  border: solid 1px #333;
  padding: 10px;
  margin-top: 10px;

}
</style>
