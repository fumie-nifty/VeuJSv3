<script setup>
  import { ref,reactive } from 'vue'

  const title = ref('従業員一覧')

  const employee = ref({
    "id": 922101,
    "name": "千野 陽平",
    "salary":20000
  })

  const changeData = () => {
    employee.value.salary = 30000
  }

</script>

<template>
    <h4>{{ title }}</h4>
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
