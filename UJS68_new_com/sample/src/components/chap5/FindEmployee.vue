<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployee.vue --> 

<script setup>
import { ref, reactive } from 'vue'
import axios from "axios"

const employeeId = ref('')
const message = ref('従業員番号を入力して検索ボタンをクリックして下さい')

const employee = ref({})

const searchMember = () => {
	const url = 'http://localhost:3000/employee/' + employeeId.value

	if(employeeId.value==''){
		message.value = '従業員番号が未入力です'
		employee.value = {}
		return
	}

	axios.get(url)
		.then((response) => {
			message.value = '検索に成功しました'
			employee.value = response.data
		})
		.catch((error) => {
			message.value = '検索に失敗しました'
			employee.value = {}
			console.log(error)
		})

}

</script>

<template>
	<p>従業員検索</p>
	<input type="text" v-model="employeeId">
	<button v-on:click="searchMember">検索</button>
	<p class="message">{{ message }}</p>
	<table border="1">
		<tbody>
			<tr>
				<td style="width: 100px;">従業員番号</td>
				<td style="width: 250px;">{{ employee.id }}</td>
			</tr>
			<tr>
				<td>従業員名</td>
				<td>{{ employee.name }}</td>
			</tr>
			<tr>
				<td>所属</td>
				<td>{{ employee.section }}</td>
			</tr>
			<tr>
				<td>内線</td>
				<td>{{ employee.phone }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped></style>
