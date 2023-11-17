<script setup>
  import { ref } from 'vue'

  const employee = ref({
    name: '', //名前
    age: '',　//年齢
    type: '', //血液型
  })

  const show = ref(false)

  const showResult = () => {
    show.value = true
  }
</script>

<template>
  <p>お名前を入力してください</p>
  <!-- Todo1 -->
  <input type="text" v-model.lazy="employee.name">

  <p>年齢を選んでください</p>
  <!-- Todo2 -->
  <input type="radio" v-model="employee.age" value="10代">10代
  <input type="radio" v-model="employee.age" value="20代">20代
  <input type="radio" v-model="employee.age" value="30代">30代

  <p>血液型を選んでください</p>
  <!-- Todo3 -->
  <select v-model="employee.type">
    <option>A型</option>
    <option>B型</option>
    <option>O型</option>
    <option>AB型</option>
    <option>不明</option>
  </select>
  <hr>
  <button v-on:click="showResult">入力した内容を確認する</button>
  <!-- Todo4 -->
  <table border="1" v-show="show">
    <th>名前</th>
    <th>年齢</th>
    <th>血液型</th>
    <!-- Todo5 -->
    <tr>
      <td>{{ employee.name }}</td>
      <td>{{ employee.age }}</td>
      <td>{{ employee.type }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
