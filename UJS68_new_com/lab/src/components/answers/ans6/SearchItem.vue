<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
  import { ref } from 'vue'
  import axios from "axios"

	import ItemComponent from '@/components/answers/ans6/ItemComponent.vue'

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

</script>

<template>
  <div class="input_output_frame">
    <h2>検索したい商品IDを入力してください</h2>
    <input type="text" v-model="itemId">
    <button v-on:click="searchItem"> Search</button>
    <p>{{ message }}</p>
    <table v-show="searchFlag" align="center">
      <tbody>
        <!--子コンポーネント呼出し-->
        <ItemComponent v-bind:item="item"/>
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