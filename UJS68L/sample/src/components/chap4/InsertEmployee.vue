<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- InsertEmployee.vue --> 

<script setup>
	import { ref, reactive } from 'vue'

	// 従業員名
	const employeeName = ref('')

	// 従業員リスト
	// Todo1

	//従業員追加メソッド
	const insertMember = () => {					
    // Todo2
  }
</script>

<template>
	<p>従業員登録</p>
	<!-- Todo3 -->
	<input type="text">
	<!-- Todo4 -->
	<button>登録</button>
	<table border="1">
		<thead>
			<th>No</th>
			<th>従業員名</th>
		</thead>
		<tbody>
			<tr v-for="(name, index) in employeeNameList" v-bind:key="name">
				<td>{{ index + 1 }}</td>
				<td>{{ name }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
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
