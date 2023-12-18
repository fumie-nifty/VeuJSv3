<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- FindEmployee.vue --> 

<script setup>
  import { ref, reactive } from 'vue'

  // axiosのインポート
  import axios from 'axios'

  // テキストボックスで入力される従業員番号
  const employeeId = ref('')
  // メッセージ
  const message = ref('従業員番号を入力して検索ボタンをクリックして下さい')
  // redクラス用フラグ
  const redFlag = ref(false)
  // 検索結果の従業員
  const employee = ref({})

  // テキストボックスの従業員番号をもとに従業員を検索する
  const searchMember = () => {
    const url = 'http://localhost:3000/employee/' + employeeId.value

    // テキストボックスの未入力チェック
    if (employeeId.value == '') {
      message.value = '従業員番号が未入力です'
      employee.value = {}
      redFlag.value = true
      return
    }

    // Web API 非同期通信
    axios.get(url)
      .then((response) => {
        // 通信結果取得したデータをemplloyeeに格納
        employee.value = response.data
        message.value = '検索に成功しました'
        redFlag.value = false
      })
      .catch((error) => {
        message.value = '検索に失敗しました'
        employee.value = {}
        redFlag.value = true
        console.log(error)
      })
  }
</script>

<template>
  <p>従業員検索</p>
  <input type="text" v-model="employeeId">
  <button v-on:click="searchMember">検索</button>
  <p v-bind:class="{ red: redFlag }">{{ message }}</p>
  <table border="1">
    <tbody>
      <tr>
        <td style="width: 100px;">従業員番号</td>
        <td style="width: 250px;">{{ employee.id }}</td>
      </tr>
      <tr>
        <td>従業員名</td>
        <td>{{ employee.name }}</td>
      </tr>
      <tr>
        <td>所属</td>
        <td>{{ employee.section }}</td>
      </tr>
      <tr>
        <td>内線</td>
        <td>{{ employee.phone }}</td>
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
