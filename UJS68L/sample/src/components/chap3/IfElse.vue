<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- IfElse.vue --> 

<script setup>
  import { ref } from 'vue'

  // 型
  const type = ref('B')
</script>

<template>
  <p v-if="type === 'A'"> A型 </p>
  <p v-else-if="type === 'B'"> B型 </p>
  <p v-else-if="type === 'O'"> O型 </p>
  <p v-else-if="type === 'AB'"> AB型 </p>
  <p v-else> 該当なし </p>
</template>

<style scoped>
  p {
    margin-left: 15px;
  }
</style>
