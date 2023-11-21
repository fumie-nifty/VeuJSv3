<script setup>
  import { ref,reactive } from 'vue'

  const employeeName = ref('')

  const employeeNameList = reactive([])

  const insertMember = () => {
    
    if(employeeName.value !==''){
      employeeNameList.push(employeeName.value)
            employeeName.value=''
    }
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
				<tr v-for="(name,index) in employeeNameList" v-bind:key="name">
					<td>{{ index + 1 }}</td>
					<td>{{ name }}</td>
				</tr>
			</tbody>
		</table>
</template>

<style scoped></style>
