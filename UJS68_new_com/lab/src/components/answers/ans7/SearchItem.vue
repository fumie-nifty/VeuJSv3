<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from "axios"

  const router = useRouter()

  const itemId = ref('')
  const message = ref('')
  const searchFlag = ref(false)
  const quantity = ref(0)

  const item = ref({})
  const selectItem = ref({})

  const searchItem = () => {
    const url = 'http://localhost:3000/shoes/' + itemId.value

    if (itemId.value == '') {
      message.value = '商品IDが未入力です'
      item.value = {}
      searchFlag.value = false
      return
    }

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

  const addShoppingCart = () => {
    selectItem.value = {
      id: item.value.id,
      ProductName: item.value.ProductName,
      Price: item.value.Price,
      Quantity: quantity.value
    }
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
          <td>{{ item.ProductName }}</td>
        </tr>
        <tr>
          <td>在庫数</td>
          <td>{{ item.Stock }}</td>
        </tr>
        <tr>
          <td>価格</td>
          <td>{{ item.Price }}</td>
        </tr>
        <tr>
          <td>商品イメージ</td>
          <td><img v-bind:src="'/images/' + item.Img"></td>
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