<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployee.vue --> 

<script setup>
import {defineProps } from 'vue'

const props = defineProps(['message','employee'])

</script>

<template>
	<p class="message">{{ props.message }}</p>
 	<table border="1">
		<tbody>
			<tr>
				<td style="width: 100px;">従業員番号</td>
				<td style="width: 250px;">{{ props.employee.id }}</td>
			</tr>
			<tr>
				<td>従業員名</td>
				<td>{{ props.employee.name }}</td>
			</tr>
			<tr>
				<td>所属</td>
				<td>{{ props.employee.section }}</td>
			</tr>
			<tr>
				<td>内線</td>
				<td>{{ props.employee.phone }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped></style>
