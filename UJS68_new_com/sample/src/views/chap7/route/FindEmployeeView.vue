
<script setup>
  import { ref } from 'vue'
  import FindEmployee from '/src/components/chap7/route/FindEmployee.vue'

  const parameter = ref('')
  
  const props = defineProps(['id'])
  
  
</script>

<template>
    <h4>従業員詳細画面</h4>
	<FindEmployee v-bind:id="props.id" />
</template>

<style scoped></style>