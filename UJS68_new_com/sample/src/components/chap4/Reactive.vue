<script setup>
  import { ref,reactive } from 'vue'

  const employee = reactive({
    "id": 922101,
    "name": "千野 陽平",
    "salary":20000   
  })

  const changeData = () => {
    employee.salary = 40000
  }
  
</script>

<template>
    <table>
      <tr>
        <th>従業員番号</th>
        <td>{{ employee.id }}</td>
      </tr>
      <tr>
        <th>従業員名</th>
        <td>{{ employee.name }}</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>{{ employee.salary }}</td>
      </tr>
   </table>
    <button v-on:click="changeData">データ更新</button>
</template>

<style scoped></style>
