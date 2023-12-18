<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ItemComponent.vue --> 

<script setup>
	// vueからdefinePropsを受取る
	import { defineProps } from 'vue'	

  // 実習5
	// definePropsらpropsを受取る
	const props = defineProps(['item'])	

</script>

<template>
  <!--★実習6★-->
  <tr>
    <td>★商品ID</td>
    <td>{{ props.item.id }}</td>
  </tr>
  <tr>
    <td>★商品名</td>
    <td>{{ props.item.productName }}</td>
  </tr>
  <tr>
    <td>★在庫数</td>
    <td>{{ props.item.stock }}</td>
  </tr>
  <tr>
    <td>★価格</td>
    <td>{{ props.item.price }}</td>
  </tr>
  <tr>
    <td>★商品イメージ</td>
    <td><img v-bind:src="'/images/' + props.item.img"></td>
  </tr>
</template>

<style scoped></style>