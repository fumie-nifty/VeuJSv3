<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Directive2Ans.vue --> 

<script setup>
  import { ref } from 'vue'

  // 従業員
  const employee = ref({
    name: '',   //名前
    age: '',    //年齢
    type: '',   //血液型
  })

  // 表示フラグ
  const showFlag = ref(false)

  // 表示フラグをtrueにするメソッド
  const showResult = () => {
    showFlag.value = true
  }

</script>

<template>
  <p>お名前を入力してください</p>
  <!-- Todo1 -->
  <input type="text" >

  <p>年齢を選んでください</p>
  <!-- Todo2 -->
  <input type="radio"  value="10代">10代
  <input type="radio"  value="20代">20代
  <input type="radio"  value="30代">30代

  <p>血液型を選んでください</p>
  <!-- Todo3 -->
  <select>
    <option>A型</option>
    <option>B型</option>
    <option>O型</option>
    <option>AB型</option>
    <option>不明</option>
  </select>
  <hr>
  <button v-on:click="showResult">入力した内容を確認する</button>
  <!-- Todo4 -->
  <table>
    <tr>
      <th>名前</th>
      <th>年齢</th>
      <th>血液型</th>
    </tr>
    <!-- Todo5 -->
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<style scoped>
  table {
    margin-top: 10px;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    padding: 0px 10px 0px 10px;
    border: 1px solid #333;
  }

  th {
    background-color: azure;
    font-weight: bold;
  }
  
  hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
