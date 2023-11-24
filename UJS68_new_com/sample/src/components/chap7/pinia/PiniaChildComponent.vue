<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore()
</script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <p>
      counter:　{{ counter.count }}　
      <button v-on:click="counter.increment">カウントアップ</button>
    </p>
  </div>
</template>

<style scoped></style>
