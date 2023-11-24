<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- IfShow.vue --> 

<script setup>
  import { ref } from 'vue'

  // メッセージ
  const message = ref('Hello Vue!!')
  // 表示フラグ
  const showFlag = ref(true)

</script>

<template>
  <p v-if="showFlag">v-if: {{ message }} </p>
  <p v-show="showFlag">v-show: {{ message }} </p>
</template>

<style scoped>
  p {
    margin-left: 15px;
  }
</style>

