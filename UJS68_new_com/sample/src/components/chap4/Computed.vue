<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Computed.vue --> 

<script setup>
  import { ref, reactive, computed } from 'vue'

  // 従業員情報の定義
  const employee = reactive({
    "id": 922101,
    "name": "鈴木　一郎",
    "salary": 20000
  })

  // 算出プロパティの定義
  const calc = computed(() => {
    console.log('computedCalc')
    return employee.salary * 1.15
  })

  // メソッドの定義
  const methodCalc = () => {
    console.log('methodCalc')
    return employee.salary * 1.15
  }

  // 給与の更新をするメソッドの定義
  const salaryUpdate = () => {
    employee.salary = 500000
  }
</script>

<template>
  <!--従業員情報の出力-->
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
  <p class="red">
    ブラウザーの開発ツールを表示してから「給与の更新」ボタンを押してください。
  </p>
  <button v-on:click="salaryUpdate">給与の更新</button>
  <!--給与の計算結果の出力-->
  <p>マスタッシュ構文 : {{ employee.salary + employee.salary * 0.15 }}</p>
  <p>computed : {{ calc }}</p>
  <p>computed : {{ calc }}</p>
  <p>method : {{ methodCalc() }}</p>
  <p>method : {{ methodCalc() }}</p>
</template>

<style scoped>
  .red {
    color: red;
  }
</style>
