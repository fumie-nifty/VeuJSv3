<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- CnfirmEmployeeAns.vue --> 

<script setup>
	//employeeManager.jsのインポート
	import { useEmployeeStore } from '@/stores/employeeManager.js'
	// employeeManagerストアーオブジェクトの取得
	const employeeManager = useEmployeeStore()
</script>

<template>
	<p>入力内容の確認</p>
	<table border="1">
		<thead>
			<th>No</th>
			<th>従業員名</th>
		</thead>
		<tbody>
			<tr v-for="(employee, index) in employeeManager.employeeList" 
					v-bind:key="employee.employeeName">
				<td>{{ index + 1 }}</td>
				<td>{{ employee.employeeName }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped></style>
