<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Directive1Ans.vue --> 

<script setup>
  import { ref } from 'vue'

  // 表示フラグ
  const showFlag = ref(true)  // Todo1
  
  // 従業員リスト
  const employeeList = ref([
    {
      "id": 922101,
      "name": "鈴木　一郎",
    },
    {
      "id": 922102,
      "name": "田村　正人",
    },
    {
      "id": 922103,
      "name": "松田　明美",
    },
    {
      "id": 922104,
      "name": "浅井　順二",
    }
  ])
</script>

<template>
  <!-- Todo2 -->
  <table v-show="showFlag">
    <thead>
      <tr>
        <th>No</th>
        <th>Id</th>
        <th>社員名</th>
      </tr>
    </thead>
    <tbody>
      <!-- Todo3 -->
      <tr v-for="(employee, index) in employeeList" 
          v-bind:key="employee.id">
        <td>{{ index }}</td>
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  table{
    border-collapse: collapse;
  }

  table, th, td {
    padding: 0px 10px 0px 10px;
    border:1px solid #333;
  }

  th{
  background-color:azure;
  font-weight: bold;
  }
</style>
