<script setup>
  import { ref } from 'vue'

  const message = ref('Hello Vue!!')
  const flag = ref(true)
</script>

<template>
  <p v-if="flag">v-if: {{ message }} </p>
  <p v-show="flag">v-show: {{ message }} </p>
</template>

<style scoped></style>
