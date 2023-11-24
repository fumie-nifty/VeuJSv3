<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Introduction.vue --> 

<script setup>
  //vueからrefをインポート
  import { ref } from 'vue'

  //リアクティブ変数の定義
  const message = ref('Hello Vue!!')
  const name = ref('富士通　太郎')
</script>

<template>
  <p>{{ message }}</p>
  <p>{{ name }}</p>
</template>

<style scoped></style>
