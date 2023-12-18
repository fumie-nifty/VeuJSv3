<template>
  <div>
    <h2>検索したい商品IDを入力してください</h2>
    <!-- 実装1 -->
    <input type="text">
    <!-- 実装2 -->
    <button> Search</button>
       <!-- 実装3 -->
      <table align="center">
        <tbody>
          <tr>
            <!-- 実装4 -->
            <td></td>
          </tr>
          <tr>
            <!-- 実装5 -->
            <td></td>
          </tr>
          <tr>
            <!-- 実装6 Imgには"SH10XX.gif"が格納されている-->
            <td><img></td>
          </tr>
        </tbody>
    </table>
    <!-- 実装7 -->
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
    // 実装8
    searchItem: function () {
      let vm  = this;
      // 非同期通信(本来はサーバ通信)

        // 入力値と同じProductCodeが見つかるまで繰り返し

          // リストに商品名と画像を格納

         // 見つからなかった場合

      }
  }
}
</script>