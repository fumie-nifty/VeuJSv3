<script setup>
  import { ref } from 'vue'

  const type = ref('B')
</script>

<template>
    <p v-if="type === 'A'"> A型 </p>
    <p v-else-if="type === 'B'"> B型 </p>
    <p v-else-if="type === 'O'"> O型 </p>
    <p v-else-if="type ==='AB'"> AB型 </p>
    <p v-else> 該当なし </p>
</template>

<style scoped></style>
