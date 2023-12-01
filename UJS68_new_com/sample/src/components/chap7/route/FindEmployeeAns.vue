<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeAns.vue --> 

<script setup>
	import { defineProps, ref } from 'vue'
	import axios from "axios"

	// 親コンポーネントからpropsの取得う
	const props = defineProps(['id'])   //Todo2

	// 検索結果を格納する
	const employee = ref({})
	// メッセージ
	const message = ref('')

	const serachMember = (empId) => {
		const url = 'http://localhost:3000/employee/' + empId
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

	// props.idがundefind出ない場合にserachMemberを呼出す
	if (props.id) {
		serachMember(props.id)
	}

	// serachMemberを外部に公開
	defineExpose({
		serachMember,
	})
</script>

<template>
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
