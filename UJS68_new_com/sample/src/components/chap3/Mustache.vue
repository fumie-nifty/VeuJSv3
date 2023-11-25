<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Mustache.vue --> 

<script setup>
  import { ref } from 'vue'

  // メッセージ
  const message = ref('Hello Vue!!')
  // 型
  const type = ref(1)
</script>

<template>
  <p>{{ message }}</p>
  <p>{{ type === 1 ? 'スマホ' : 'パソコン' }}</p>
</template>

<style scoped>
  p {
    margin-left: 15px;
  }
</style>
