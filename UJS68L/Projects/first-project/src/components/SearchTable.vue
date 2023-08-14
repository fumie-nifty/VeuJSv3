<template>
  <div>
    <button v-on:click="searchTable">一覧の表示</button>
    <table border="1" align="center">
      <thead>
        <tr>
          <th>従業員番号</th>
          <th>従業員名</th>
        </tr>
      </thead>
      <tbody>
        <!-- Todo1 v-forを使用してitemsの値を出力 -->
        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'SearchTable',
    data() {
      return {
        items: []
      }
    },
    methods: {
      // Todo2 axiosを使用し、レスポンスで受け取ったデータをitemsに格納
      // getデータは「'../sample.json/'」を指定
      // then処理のみでOK
    }
  }
</script>