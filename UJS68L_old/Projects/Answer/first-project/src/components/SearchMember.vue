<template>
  <div>
    <p>従業員番号<input type="text" v-model="keyWord"></p>
    <button v-on:click="searchMember">検索</button>
    <p>検索結果:{{ response }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SearchMember',
    data() {
      return {
        response: '',
        keyWord: '',
        lists: []
      }
    },
    methods: {
      searchMember: function () {
        let vm = this
        this.$axios.get('../sample.json/').then((res) => {
          const data = res.data //変数にデータ格納
          //全検索
          for (let i in data) {
            let id = data[i].id
            if (id == vm.keyWord) { //入力値と全データを比較
              return vm.response = data[i].name //一致したnameをresponseにセット
            }
          }
          vm.response = '結果なし' //検索にヒットしなかった場合
        })
      }
    }
  }
</script>