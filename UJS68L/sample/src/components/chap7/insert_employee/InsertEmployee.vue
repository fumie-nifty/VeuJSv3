<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- InsertEmployee.vue --> 

<script setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import CnfirmEmployeeAns from '@/components/chap7/insert_employee/CnfirmEmployeeAns.vue'

  const router = useRouter()

	// employeeStore.jsのインポート
	import { useEmployeeStore } from '@/stores/employeeStore.js'
	// employeeStoreストアーオブジェクトの取得
	// Todo3
	//入力された従業員名を格納
	const employeeName = ref('')

	// 入力された従業員名をemployeeStoreのemployeeListに格納
	const insertMember = () => {
		// 従業員名が未入力でない場合
		if (employeeName.value !== '') {
			// employeeStoreのemployeeListに従業員オブジェクトを追加
			// Todo4
			
			
			
			// 従業員名を初期化
			employeeName.value = ''
		}
	}

	// 入力内容の確認画面へ遷移
	const goConrirm = () => {
		router.push('/chap7/confirm_employee_ans')
	}
</script>

<template>
	<p>従業員登録</p>
	<input type="text" v-model="employeeName">
	<button v-on:click="insertMember">登録</button>
	<table border="1">
		<thead>
			<th>No</th>
			<th>従業員名</th>
		</thead>
		<tbody>
			<tr v-for="(employee, index) in employeeStore.employeeList" 
					v-bind:key="employee.employeeName">
				<td>{{ index + 1 }}</td>
				<td>{{ employee.employeeName }}</td>
			</tr>
		</tbody>
	</table>
	<br>
	<hr>
	<CnfirmEmployeeAns />
	<br>
	<button v-on:click="goConrirm">画面遷移</button>
</template>

<style scoped></style>
