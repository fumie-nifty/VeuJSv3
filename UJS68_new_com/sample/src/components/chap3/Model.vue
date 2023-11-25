<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Model.vue --> 

<script setup>
  import { ref } from 'vue'

  // メッセージ
  const message = ref('')
</script>

<template>
  <p>修飾子なし：
    <input type="text" v-model="message">
  </p>
  <p>lazy：
    <input type="text" v-model.lazy="message">
  </p>
  <p>trim：
    <input type="text" v-model.trim="message">
  </p>
  <p>number：
    <input type="text" v-model.number="message">
  </p>
  <hr>
  <p>messageの内容：{{ message }}</p>
  <p>messageの型：{{ typeof message }}</p>
</template>

<style scoped>
  p {
    margin-left: 15px;
  }
  hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
