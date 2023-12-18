<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Bind.vue --> 

<script setup>
  import { ref } from 'vue'

  const title = ref('Vue.jsによるSPA開発')
  const url = ref('https://www.knowledgewing.com/kw/')
</script>

<template>
  <p>コースを入力してください</p>
  <p>マスタッシュ構文：
    <input type="text" value="{{title}}">
  </p>
  <p>v-bind：
    <input type="text" v-bind:value="title">
  </p>
  <p>v-bind省略記法：
    <input type="text" :value="title">
  </p>
  <p>
    <a v-bind:href="url" target="_blank" rel="noopener noreferrer">
      富士通ラーニングメディア社
    </a>
  </p>
  <p>入力された値：{{title}}</p>
</template>

<style scoped></style>
