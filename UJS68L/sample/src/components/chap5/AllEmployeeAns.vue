<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllEmployeeAns.vue --> 

<script setup>
  import { ref, reactive, onMounted } from 'vue'

  // axiosのインポート
  import axios from 'axios'

  // メッセージ
  const message = ref('')
  // 検索結果フラグ
  const searchFlag = ref(false)

  // 従業員リスト
  const employeeList = ref([])	// Todo1

  const url = 'http://localhost:3000/employee/'

  onMounted(() => {
    axios.get(url)
      .then((response) => {				//Todo2
        // 通信結果取得したデータをemplloyeeに格納
        employeeList.value = response.data	// Todo3

        message.value = '検索に成功しました'
        // 検索結果のフラグをtureにする
        searchFlag.value = true
        // 取得した配列が空だった場合
        if (employeeList.value.length == 0) {
          message.value = '従業員データが存在しません'
          //検索結果のフラグをfalseにする
          searchFlag.value = false
        }
      })
      .catch((error) => {
        message.value = '検索に失敗しました'
        // 検索結果のフラグをfalseにする
        searchFlag.value = false
        employeeList.value = []
        console.log(error)
      })
  })
</script>

<template>
  <p>従業員一覧</p>
  <p v-bind:class="{ red: !searchFlag }">{{ message }}</p>
  <table v-show="searchFlag">
    <thead>
      <tr>
        <th>従業員番号</th>
        <th>従業員名</th>
        <th>所属</th>
        <th>内線</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in employeeList" v-bind:key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.section }}</td>
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

