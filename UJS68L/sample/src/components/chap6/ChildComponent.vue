<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ChildComponent.vue --> 

<script setup>
  // definePropsらpropsを受取る
  const props = defineProps(['title','message'])
</script>

<template>
  <div>
    <h2>子コンポーネント</h2>
    <!--propsの参照-->
    <p>title:　{{ props.title }}</p>
    <p class="message">message:　{{ props.message }}</p>
  </div>
</template>

<style scoped></style>
