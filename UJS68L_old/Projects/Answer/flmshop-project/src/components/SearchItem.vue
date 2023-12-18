<template>
  <div>
    <h2>検索したい商品IDを入力してください</h2>
    <input type="text" v-model="keyWord">
    <button v-on:click="searchItem()"> Search</button>
    <table v-show="successFlg" align="center">
      <tbody>
        <tr>
          <td>{{ successMessage }}</td>
        </tr>
        <tr>
          <td>{{ response[0].ProductName }}</td>
        </tr>
        <tr>
          <td><img v-bind:src="'../'+response[0].Img"></td>
        </tr>
      </tbody>
    </table>
    <p v-show="failureFlg">{{ failureMessage }}</p>
  </div>
</template>

<script>
  export default {
    name: "SearchMember",
    data() {
      return {
        response: [{
          ProductName: '',
          Img: ''
        }], //検索結果格納
        keyWord: "", //検索キー
        successMessage: '検索成功',
        failureMessage: '検索失敗　再度入力してください',
        successFlg: false, //検索成功時フラグ
        failureFlg: false //検索失敗時フラグ
      };
    },
    methods: {
      searchItem: function () {
        let vm = this;
        //非同期通信(本来はサーバ通信)
        this.$axios.get("../shoes.json/").then((res) => {
          const data = res.data;
          //入力値と同じProductCodeが見つかるまで繰り返し
          for (let i in data) {
            let id = data[i].ProductCode
            if (id == vm.keyWord) { //該当した場合
              vm.successFlg = true //テーブル表示フラグをtrue
              vm.failureFlg = false //検索失敗メッセージフラグをfalse
              // リストに商品名と画像を格納
              return (vm.response = [{
                ProductName: data[i].ProductName,
                Img: data[i].Img
              }])
            }
          }
          //見つからなかった場合
          vm.successFlg = false //テーブル表示フラグをfalse
          vm.failureFlg = true //検索失敗メッセージフラグをtrue
        })
      }
    }
  }
</script>