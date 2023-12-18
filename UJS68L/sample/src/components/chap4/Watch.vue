<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Watch.vue --> 

<script setup>
  import { ref, reactive, watch } from 'vue'

  const hour = ref(0)         // 時
  const minutes = ref(0)      // 分
  const salaryResult = ref(0) // 給与計算結果

  // 従業員
  const employee = reactive({
    "id": 922101,
    "name": "鈴木　一郎",
    "salary": 20000
  })

  // hour の監視
  watch(hour, (newValue, oldValue) => {
    console.log(`${oldValue}から${newValue}へ変わりました`)
    minutes.value = newValue * 60
  })

  // employee.salary の監視
  watch(() => employee.salary, (newValue, oldValue) => {
    console.log(`${oldValue}から${newValue}へ変わりました`)
    salaryResult.value = newValue * 1.15
  })

  const salaryUpdate = () => {
    employee.salary = 500000
  }
</script>

<template>
  <p class="red">ブラウザーの開発ツールを表示し操作してください。</p>
  <h2>■refの監視</h2>
  <div class="colum">
    <input type="number" v-model="hour" />
    <p>{{ minutes }}</p>
  </div>
  <h2>■getterの監視</h2>
  <div class="colum">
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
    <p>計算結果：{{ salaryResult }}</p>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 12pt;
    margin-top: 15px;
    background-color: rgb(220, 253, 253);
  }

  .colum {
    margin-left: 10px;
  }

  .red {
    color: red;
  }
</style>
