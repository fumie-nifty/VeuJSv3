<script setup>
import { ref } from 'vue'

import FindEmployee from '/src/components/chap7/FindEmployee.vue'

const employeeId = ref('')
const inputId = ref('')

const clickSearchMember = () => {
	employeeId.value = inputId.value
}
</script>

<template>
	<p>検索する従業員番号：</p>
	<input type="text" v-model="inputId">
	<button v-on:click="clickSearchMember">検索</button>
	<FindEmployee v-bind:id="employeeId" />
</template>

<style scoped></style>
