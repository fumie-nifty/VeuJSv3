<script setup>
  import { ref } from 'vue'

  const message = ref('Hello Vue!!')
  const name = ref('富士通　太郎')
</script>

<template>
  <p>{{ message }}</p>
  <p>{{ name }}</p>
</template>

<style scoped></style>
