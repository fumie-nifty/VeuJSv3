<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from "axios"

  // ルーターオブジェクトの取得
  const router = useRouter()
  
  // ★実習3★
  // shopingCartStore.jsのインポート
  import { useShoppingCartStore } from '@/stores/shopingCartStoreAns.js'
  // shopingCartStoreストアーオブジェクトの取得
  const shopingCartStore = useShoppingCartStore()

  const itemId = ref('')        // 検索値（商品ID）
  const message = ref('')       // メッセージ
  const searchFlag = ref(false) // 検索結果フラグ
  const quantity = ref(0)       // 数量入力用
  const item = ref({})          // 商品検索APIの戻り値
  const selectItem = ref({})    // カート追加用商品情報

  /**
   * searchItem
   * 　itemIdの値を引数で渡し検索API呼出す。戻り値をitemに格納する
   * @function
   */
  const searchItem = () => {
    // 商品を１件検索するWebAPI URL
    const url = 'http://localhost:3000/shoes/' + itemId.value

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
        message.value = '検索に成功しました'
        item.value = response.data
        searchFlag.value = true
      })
      .catch((error) => {
        message.value = '検索に失敗しました'
        item.value = {}
        searchFlag.value = false
        console.log(error)
      })
  }

  /**
   * addShoppingCart
   * 　カートに購入商品情報を追加しショッピングカート画面に遷移する
   * @function
   */
  const addShoppingCart = () => {
    // 数量が0の場合
    if (quantity.value == 0) {
      message.value = '数量が未入力です'
      return
    }

    // 数量が在庫数を超える場合
    if (quantity.value > item.value.stock) {
      message.value = '在庫数を超えた数量が入力されています'
      return
    }

    // ★実習4★
    // 購入商品情報を生成
    selectItem.value = {
      id: item.value.id,
      productName: item.value.productName,
      price: item.value.price,
      quantity: quantity.value
    }

    // ★実習4★
    // 購入商品情報をストアーのカートに追加
    shopingCartStore.addShoppingCart(selectItem.value)

    // ショッピングカート画面に遷移
    router.push("/answers/ans7/shopping_cart")
  }
</script>

<template>
  <div class="input_output_frame">
    <h2>検索したい商品IDを入力してください</h2>
    <input type="text" v-model="itemId">
    <button v-on:click="searchItem"> Search</button>
    <p>{{ message }}</p>
    <table v-show="searchFlag" align="center">
      <tbody>
        <tr>
          <td>商品ID</td>
          <td>{{ item.id }}</td>
        </tr>
        <tr>
          <td>商品名</td>
          <td>{{ item.productName }}</td>
        </tr>
        <tr>
          <td>在庫数</td>
          <td>{{ item.stock }}</td>
        </tr>
        <tr>
          <td>価格</td>
          <td>{{ item.price }}</td>
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
      <button v-on:click="addShoppingCart">カートに入れる</button>
    </table>
  </div>
</template>

<style scoped></style>