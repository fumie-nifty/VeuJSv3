<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- DetailItemView.vue --> 

<script setup>
  import Detailtem from '@/components/answers/ans6op1/DetaiItem.vue'
  const props = defineProps(['id'])
</script>

<template>
  <main>
  <h2>【6章 オプ１】商品詳細画面</h2>
  <Detailtem v-bind:id="props.id" />
</main>
</template>

<style scoped>
  main {
    margin: 0 auto;
    align-items: center;
    align-content: center;
    text-align: center;
  }
</style>