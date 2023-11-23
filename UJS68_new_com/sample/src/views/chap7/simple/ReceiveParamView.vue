<script setup>
  import { ref } from 'vue'

  const parameter = ref('')
  
  const props = defineProps(['id'])
  
</script>

<template>
  <main>
    <h4>■パラメータ受取側</h4>
    <p>パラメータ値：{{ props.id }}</p>
  </main>
</template>
