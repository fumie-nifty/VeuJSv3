<script setup>
import { ref, reactive,onMounted } from 'vue'
import axios from "axios"

const employeeId = ref('')
const message = ref('従業員番号を入力して検索ボタンをクリックして下さい')

const employeeList = ref([])

onMounted(() => {
	const url = 'http://localhost:3000/employee/'

	axios.get(url)
		.then((response) => {
			message.value = '検索に成功しました'
			employeeList.value = response.data
		})
		.catch((error) => {
			message.value ='検索に失敗しました'
			employeeList.value = []
			console.log(error)
		})

})

</script>

<template>
	<p class="message">{{ message }}</p>
	<table border="1">
    <thead>
      <tr>
        <th>従業員番号</th>
        <th>従業員名</th>
        <th>所属</th>
        <th>内線</th>
      </tr>
    </thead>
		<tbody>
			<tr v-for="(employee,index) in employeeList" v-bind:key="employee.id">
				<td><RouterLink :to="{name:'find_employee_param',params:{id:employee.id}}">{{ employee.id }}</RouterLink></td>
				<td>{{ employee.name }}</td>
				<td>{{ employee.section }}</td>
				<td>{{ employee.phone }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped></style>
