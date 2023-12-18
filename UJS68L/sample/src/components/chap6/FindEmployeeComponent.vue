<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeComponent.vue --> 

<script setup>
	import { ref, reactive } from 'vue'
	import axios from "axios"

	import FindEmployee from '/src/components/chap6/FindEmployee.vue'

	// テキストボックスで入力される従業員番号
	const employeeId = ref('')
	// メッセージ
	const message = ref('従業員番号を入力して検索ボタンをクリックして下さい')
	// 検索結果の従業員
	const employee = ref({})

	// テキストボックスの従業員番号をもとに従業員を検索する
	const searchMember = () => {
		const url = 'http://localhost:3000/employee/' + employeeId.value

		// テキストボックスの未入力チェック
		if (employeeId.value == '') {
			message.value = '従業員番号が未入力です'
			employee.value = {}
			return
		}

		// Web API 非同期通信
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
	<!--props (massage,employee) を渡してコンポーネント呼出し-->
	<!--Todo2-->
	
</template>

<style scoped></style>
