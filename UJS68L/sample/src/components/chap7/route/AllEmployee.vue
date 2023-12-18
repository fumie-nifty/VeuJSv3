<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllEmployee.vue --> 

<script setup>
	import { ref, reactive, onMounted } from 'vue'
	import axios from "axios"

	// メッセージ
	const message = ref('')
	// 従業員リスト
	const employeeList = ref([])
	// Web API url
	const url = 'http://localhost:3000/employee/'

	axios.get(url)
		.then((response) => {
			message.value = '検索に成功しました'
			employeeList.value = response.data
		})
		.catch((error) => {
			message.value = '検索に失敗しました'
			employeeList.value = []
			console.log(error)
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
			<tr v-for="(employee, index) in employeeList" v-bind:key="employee.id">
				<td>
					<!--ループ対象のemployeeのidをパスパラメータに設定しコンポーネント呼び出し-->
					<RouterLink :to="{ name: 'find_employee_param_ans', params: { id: employee.id } }">
						{{ employee.id }}
					</RouterLink>
				</td>
				<td>{{ employee.name }}</td>
				<td>{{ employee.section }}</td>
				<td>{{ employee.phone }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
  .red {
    color: red;
  }

  table {
    border-collapse: collapse;
  }

  table,
  th,
  td {
    padding: 0px 10px 0px 10px;
    border: 1px solid #333;
  }
</style>

