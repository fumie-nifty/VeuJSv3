<script setup>
import { ref, reactive } from 'vue'

import ChildComponent from '/src/components/chap6/ChildComponent.vue'

const message = ref('Hello Vue!!')

</script>

<template>
  <div>
    <h2>親コンポーネント</h2>
    <input type="text" v-model="message">
    <ChildComponent title="更新結果" v-bind:message="message"/>
  </div>
	
</template>

<style scoped>
div{
  border : solid 1px #333 ;
  padding: 10px;
  margin-top: 10px;

}
</style>
