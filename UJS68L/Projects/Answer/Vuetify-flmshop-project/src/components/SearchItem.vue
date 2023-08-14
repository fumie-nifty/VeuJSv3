<template>
  <v-app>
    <v-card width="450px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="title">検索したい商品IDを入力してください</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="商品IDを入力してください" v-model="keyWord"></v-text-field>
          <v-card-actions>
            <v-btn v-on:click="searchItem()" class="ma-2" color="primary" dark> Search<v-icon dark right>
                mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-simple-table v-show="successFlg">
          <template v-slot:default>
            <tbody>
              <tr>
                <td class="text-center">
                  <v-alert type="success">{{ successMessage }}</v-alert>
                </td>
              </tr>
              <tr>
                <td class="blue lighten-5 text-center">{{ response[0].ProductName }}</td>
              </tr>
              <tr>
                <td>
                  <v-img v-bind:src="'../'+response[0].Img"></v-img>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <p v-show="failureFlg">
          <v-alert type="warning">{{ failureMessage }}</v-alert>
        </p>
      </v-card-text>
    </v-card>
  </v-app>
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