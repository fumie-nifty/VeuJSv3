<script setup>
import { ref, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter';
import PiniaChildComponent from '@/components/chap7/PiniaChildComponent.vue'

const counter = useCounterStore();
</script>

<template>
  <div>
    <h2>親コンポーネント</h2>
    
    <p>
      counter:　{{ counter.count }}　
      <button v-on:click="counter.increment">カウントアップ</button>
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
