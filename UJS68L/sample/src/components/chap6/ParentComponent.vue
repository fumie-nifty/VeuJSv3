<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ParentComponent.vue --> 

<script setup>
  import { ref } from 'vue'
  import ChildComponent from '/src/components/chap6/ChildComponent.vue'

  // メッセージ
  const message = ref('Hello Vue!!')
</script>

<template>
  <div>
    <h2>親コンポーネント</h2>
    <input type="text" v-model="message">
    <!--props (title, massage)-->
    <ChildComponent title="更新結果" v-bind:message="message" />
  </div>
</template>

<style scoped>
  div {
    border: solid 1px #333;
    padding: 10px;
    margin-top: 10px;
  }
</style>
