<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
	import { ref, reactive,onMounted } from 'vue'
	import axios from "axios"

	const message = ref('')
	const itemList = ref([])

	onMounted(() => {
		const url = 'http://localhost:3000/shoes'

		axios.get(url)
			.then((response) => {
				message.value = '検索に成功しました'
				itemList.value = response.data
			})
			.catch((error) => {
				message.value ='検索に失敗しました'
				itemList.value = []
				console.log(error)
			})
	})
</script>

<template>
	<p class="message">{{ message }}</p>
	<table border="1">
    <thead>
      <tr>
        <th>商品イメージ</th>
        <th>商品名</th>
        <th>価格</th>
      </tr>
    </thead>
		<tbody>
			<tr v-for="(item) in itemList" v-bind:key="item.id">
				<td><img v-bind:src="'/images/' + item.Img"></td>
				<td>{{ item.ProductName }}</td>
				<td>{{ item.Price }}円</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
	table{
		margin: auto;
	}
</style>
