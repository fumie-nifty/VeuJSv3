<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- DetailItemView.vue --> 

<script setup>
  import Detailtem from '@/components/labs/lab7/DetaiItem.vue'
  const props = defineProps(['id'])
</script>

<template>
  <h2>商品詳細画面</h2>
  <Detailtem v-bind:id="props.id" />
</template>

<style scoped>
</style>