<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeAnsView.vue --> 

<script setup>
  import FindEmployeeAns from '/src/components/chap7/route/FindEmployeeAns.vue'

  const props = defineProps(['id']) 
</script>

<template>
    <h4>従業員詳細画面</h4>
	<FindEmployeeAns v-bind:id="props.id" />
</template>

<style scoped></style>