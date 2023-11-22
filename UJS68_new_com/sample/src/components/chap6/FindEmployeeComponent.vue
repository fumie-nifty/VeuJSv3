<script setup>
import { ref, reactive } from 'vue'
import axios from "axios"

import FindEmployee from '/src/components/chap6/FindEmployee.vue'


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
	<FindEmployee v-bind:message="message" v-bind:employee="employee"/>
	
</template>

<style scoped></style>
