<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployeeAns.vue --> 

<script setup>
  // definePropsらpropsを受取る
  const props = defineProps(['message', 'employee'])	//Todo3
</script>

<template>
  <!--Todo5-->
  <p class="message">{{ props.message }}</p>
  <!--Todo6-->
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

<style scoped>
.red {
  color: red;
}

table {
  border-collapse: collapse;
}

table,
th,
td {
  padding: 0px 10px 0px 10px;
  border: 1px solid #333;
}
</style>
