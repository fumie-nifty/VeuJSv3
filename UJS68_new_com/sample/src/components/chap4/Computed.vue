<script setup>
  import { ref, reactive, computed } from 'vue'

  const employee = reactive({
    "id": 922101,
    "name": "千野 陽平",
    "salary": 20000
  })

  const calc = computed(() => {
    console.log('calc')
    return employee.salary + employee.salary * 0.15
  })

  const methodCalc = () => {
    console.log('methodCalc')
    return employee.salary + employee.salary * 0.15
  }

  const salaryUpdate = () => {
    employee.salary = 500000
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
  <button v-on:click="salaryUpdate">給与の更新</button>
  <p>マスタッシュ構文：{{ employee.salary + employee.salary * 0.15 }}</p>
  <p>computed:{{ calc }}</p>
  <p>computed:{{ calc }}</p>
  <p>method:{{ methodCalc() }}</p>
  <p>method:{{ methodCalc() }}</p>
</template>

<style scoped></style>
