<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Reactive.vue --> 

<script setup>
  import { reactive } from 'vue'
  // 従業員情報（reactive）
  const employee = reactive({
    "id": 922101,
    "name": "鈴木　一郎",
    "salary":20000   
  })
  // 給与の更新
  const changeData = () => {
    employee.salary = 40000
  }  
</script>

<template>
    <table>
      <tr>
        <td>従業員番号</td>
        <td>{{ employee.id }}</td>
      </tr>
      <tr>
        <td>従業員名</td>
        <td>{{ employee.name }}</td>
      </tr>
      <tr>
        <td>給与</td>
        <td>{{ employee.salary }}</td>
      </tr>
   </table>
    <button v-on:click="changeData">データ更新</button>
</template>

<style scoped></style>
