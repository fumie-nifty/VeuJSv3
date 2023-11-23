<script setup>
    import { ref } from 'vue'

    const inputId = ref(0);

</script>

<template>
  <main>
    <h4>■パラメータ送信側</h4>
    <input type="number" v-model="inputId"/><br>
    <RouterLink :to="{name:'receiveParam',params:{id:inputId}}">コンポーネント切替</RouterLink>
  </main>
</template>
