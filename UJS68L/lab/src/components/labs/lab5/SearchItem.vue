<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
  import { ref } from 'vue'
  import axios from "axios"

  const itemId = ref('')        // 検索値（商品ID）
  const message = ref('')       // メッセージ
  const searchFlag = ref(false) // 検索結果フラグ
  const quantity = ref(0)       // 数量入力用
  const item = ref({})          // 商品検索APIの戻り値

  /**
   * searchItem
   * 　itemIdの値を引数で渡し検索API呼出す。戻り値をitemに格納する
   * @function
   */
  const searchItem = () => {
    // ★実装4★
    // 商品を１件検索するWebAPI URL
    

    // 商品IDが未入力の場合
    if (itemId.value == '') {
      message.value = '商品IDが未入力です'
      item.value = {}
      searchFlag.value = false
      return
    }

    // WebAPI呼出し
    axios.get(url)
      .then((response) => {
        // ★実装5★
        // メッセージの格納
          
        // レスポンスされたデータをitemに格納
        
        // searchFlagにtureを設定
        
      })
      .catch((error) => {
        // ★実装5★
        // メッセージの格納
       
        // itemに空のオブジェクトを格納
        
        // searchFlagにfalseを設定
        
        
      })
  }

 </script>

<template>
  <div class="input_output_frame">
    <h2>検索したい商品IDを入力してください</h2>
    <input type="text" v-model="itemId">　
    <!--★実装6★-->
    <button>検索</button>
    <p>{{ message }}</p>
    <!--★実装7★-->
    <table v-show="searchFlag" align="center">
      <tbody>
        <tr>
          <td>商品ID</td>
          <td></td>
        </tr>
        <tr>
          <td>商品名</td>
          <td></td>
        </tr>
        <tr>
          <td>在庫数</td>
          <td></td>
        </tr>
        <tr>
          <td>価格</td>
          <td></td>
        </tr>
        <tr>
          <td>商品イメージ</td>
          <td><img v-bind:src="'/images/' + item.img"></td>
        </tr>
        <tr>
          <td>購入数</td>
          <td><input type="number" v-model="quantity" /></td>
        </tr>
      </tbody>
      <button>カートに入れる</button>
    </table>
  </div>
</template>

<style scoped></style>