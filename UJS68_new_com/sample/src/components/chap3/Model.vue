<script setup>
  import { ref } from 'vue'

  const message = ref('')
</script>

<template>
    修飾子なし：
      <input type="text" v-model="message"><br>
    lazy：
      <input type="text" v-model.lazy="message"><br>
    trim：
      <input type="text" v-model.trim="message"><br>
    number：
      <input type="text" v-model.number="message"><br>
    <p>messageの内容：{{message}}</p>
    <p>messageの型：{{typeof message}}</p>
</template>

<style scoped></style>
