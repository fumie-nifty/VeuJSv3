<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeComponentAns.vue --> 

<script setup>
	import { ref } from 'vue'
	import FindEmployee from '/src/components/chap7/route/FindEmployeeAns.vue'

	// 入力値
	const inputId = ref('')
	// 子コンポーネントFindEmployeeを格納するrefオブジェクトの準備
	const findEmployee = ref();

	// 検索ボタン押下時の処理
	const clickSearchMember = () => {
		// 子コンポーネントFindEmployeeのserachMemberメソッド呼出し
		findEmployee.value.serachMember(inputId.value)
	}
</script>

<template>
	<p>検索する従業員番号：</p>
	<input type="text" v-model="inputId">
	<button v-on:click="clickSearchMember">検索</button>
	<!--子コンポーネントFindEmployeeをrefオブジェクトに格納してコンポーネント呼出し-->
	<FindEmployee ref="findEmployee" />
</template>

<style scoped></style>
