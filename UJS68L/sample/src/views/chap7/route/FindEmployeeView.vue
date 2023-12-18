<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeView.vue --> 

<script setup>
  import FindEmployee from '/src/components/chap7/route/FindEmployee.vue'

  const props = defineProps(['id']) 
</script>

<template>
    <h4>従業員詳細画面</h4>
	<FindEmployee v-bind:id="props.id" />
</template>

<style scoped></style>