<script setup>
import {defineProps ,ref,onMounted} from 'vue'
import axios from "axios"

const props = defineProps(['id'])

const employee = ref({})
const message = ref('')

onMounted(() => {
const url = 'http://localhost:3000/employee/' + props.id

	if (props.id == '') {
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
})

</script>

<template>
	<p class="message">{{ props.message }}</p>
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
