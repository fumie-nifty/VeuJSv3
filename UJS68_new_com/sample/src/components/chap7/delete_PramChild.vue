<script setup>
  import { ref } from 'vue'

  const message = ref('Hello Vue!!')
  const type = ref(1)
</script>

<template>
    <p>{{message}}</p>
    <p>{{ type === 1 ?  'スマホ' : 'パソコン'}}</p>
</template>

<style scoped></style>
