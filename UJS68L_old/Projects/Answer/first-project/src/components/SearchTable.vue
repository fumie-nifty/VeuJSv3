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
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
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
      searchTable: function () {
        let vm = this
        this.$axios.get('../sample.json/')
          .then((res) => {
            vm.items = res.data
          })
      }
    }
  }
</script>