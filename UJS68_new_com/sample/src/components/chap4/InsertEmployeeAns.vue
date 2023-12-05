<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- InsertEmployeeAns.vue --> 

<script setup>
  import { ref, reactive } from 'vue'

  // 従業員名
  const employeeName = ref('')

  // 従業員リスト
  const employeeNameList = reactive([])	// Todo1

  // 従業員追加メソッド
  const insertMember = () => {
    // Todo2
    if (employeeName.value !== '') {
      employeeNameList.push(employeeName.value)
      employeeName.value = ''
    }
  }
</script>

<template>
  <p>従業員登録</p>
  <!-- Todo3 -->
  <input type="text" v-model="employeeName">
  <!-- Todo4 -->
  <button v-on:click="insertMember">登録</button>
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

<style scoped></style>