<script setup>
  import { ref,reactive } from 'vue'
	import { useRouter } from 'vue-router'
	import CnfirmEmployee from '@/components/chap7/insert_employee/CnfirmEmployee.vue'
	import { useEmployeeStore } from '@/stores/employeeManager.js'

	const router = useRouter()

	const employeeManager = useEmployeeStore()

	const employeeName = ref('')

  const insertMember = () => {
    
    if(employeeName.value !==''){
      
			employeeManager.addEmployee({
				employeeName : employeeName.value
			})
      employeeName.value=''
    }
  }

	const goConrirm = () =>{
		router.push('/chap7/confirm_employee')
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
				<tr v-for="(employee,index) in employeeManager.employeeList" v-bind:key="employee.employeeName">
					<td>{{ index + 1 }}</td>
					<td>{{ employee.employeeName }}</td>
				</tr>
			</tbody>
		</table>
		<br><hr>
		<CnfirmEmployee />
		<br>
		<button v-on:click="goConrirm">画面遷移</button>

</template>

<style scoped></style>
