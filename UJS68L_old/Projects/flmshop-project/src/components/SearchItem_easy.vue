<template>
  <div>
    <h2>検索したい商品IDを入力してください</h2>
    <input type="text" v-model="keyWord">
    <!-- -on:clickを使用しsearchItem()を呼び出す -->
    <button v-on:click="searchItem()"> Search</button>
      <!-- v-showにsuccessFlgを指定 -->
      <table v-show="successFlg" align="center">
        <tbody>
          <tr>
            <!-- successMessageをマスタッシュ構文で出力 -->
            <td></td>
          </tr>
          <tr>
            <!-- response[0].ProductNameをマスタッシュ構文で出力 -->
            <td></td>
          </tr>
          <tr>
            <td><img  v-bind:src="'../'+response[0].Img"></td>
          </tr>
        </tbody>
    </table>
    <!-- v-showにfailureFlgを指定し、trueのときにfailureMessageを出力 -->
    <p></p>
  </div>
</template>

<script>
export default {
  name: "SearchMember",
  data() {
    return {
      response: [{ProductName:'',Img:''}],　//検索結果格納
      keyWord: "", //検索キー
      successMessage:'検索成功',
      failureMessage:'検索失敗　再度入力してください',
      successFlg:false,　//検索成功時フラグ
      failureFlg:false  //検索失敗時フラグ
    };
  },
  methods: {
    searchItem: function () {
      let vm  = this;
      // 非同期通信を実装。URLは("../shoes.json/")

        // res.dataを変数dataに代入

        // 入力値と同じProductCodeが見つかるまで繰り返し
        for (let i in data) {
          let id = data[i].ProductCode;
          if (id == vm.keyWord) { //該当した場合
            // テーブル表示フラグをtrue
            // 検索失敗メッセージフラグをfalse
            // リストに商品名と画像を格納
            return (vm.response = [{ProductName:data[i].ProductName,Img:data[i].Img}])
          }
        }
         // 見つからなかった場合
       　// テーブル表示フラグをfalse
       　// 検索失敗メッセージフラグをtrue
      }
  }
}
</script>
