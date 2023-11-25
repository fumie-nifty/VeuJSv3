<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ChildComponent.vue --> 

<script setup>
import {defineProps } from 'vue'

const props = defineProps(['title','message'])

</script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <p>title:　{{ props.title }}</p>
    <p class="message">message:　{{ props.message }}</p>
  </div>
</template>

<style scoped></style>
