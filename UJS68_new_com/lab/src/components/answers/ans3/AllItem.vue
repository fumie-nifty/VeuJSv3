<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from "axios"

const message = ref('')
const itemList = ref([
	{
		"id": 1,
		"ProductName": "ハイカットスニーカーFLM_GR01",
		"Stock": 10,
		"Order": 2,
		"SalesPotential": 8,
		"Price": 7800,
		"Img": "SH1001.gif"
	},
	{
		"id": 2,
		"ProductName": "ハイカットスニーカーFLM_LG01",
		"Stock": 2,
		"Order": 1,
		"SalesPotential": 1,
		"Price": 7900,
		"Img": "SH1002.gif"
	},
	{
		"id": 3,
		"ProductName": "ハイカットスニーカーFLM_BL",
		"Stock": 8,
		"Order": 0,
		"SalesPotential": 8,
		"Price": 7900,
		"Img": "SH1003.gif"
	},
	{
		"id": 4,
		"ProductName": "ハイカットスニーカーFLM_GR",
		"Stock": 5,
		"Order": 5,
		"SalesPotential": 0,
		"Price": 7500,
		"Img": "SH1004.gif"
	}
])

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
table {
	margin: auto;
	margin-top: 5px;
}
</style>
