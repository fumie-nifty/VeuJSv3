<script setup>
  import { ref } from 'vue'

  const flag = ref(true)
  const employeeList = ref([
    {
      "id": 922101,
      "name": "千野 陽平"
    },
    {
      "id": 922102,
      "name": "結城 由加志"
    },
    {
      "id": 922103,
      "name": "高橋 直子"
    },
    {
      "id": 922104,
      "name": "吉田 真由"
    }
  ])
</script>

<template>
  <table border="1" style="margin: auto;" v-show="flag">
    <thead>
      <tr>
        <th>No</th>
        <th>Id</th>
        <th>社員名</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in employeeList" v-bind:key="employee.id">
        <td>{{ index }}</td>
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
