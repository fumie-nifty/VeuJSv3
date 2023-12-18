<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- For.vue --> 

<script setup>
  import { ref } from 'vue'

  // 曜日リスト
  const weekList = ref(['月', '火', '水', '木', '金'])
</script>

<template>
  <ul>
    <li v-for="(week, index) in weekList" v-bind:key="week">
      {{ index }}番目：{{ week }}
    </li>
  </ul>
</template>

<style scoped></style>
