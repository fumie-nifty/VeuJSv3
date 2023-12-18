<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
  import { ref, onMounted } from 'vue'
  import axios from "axios"

  const message = ref('')		// メッセージ
  const itemList = ref([])	// 商品リスト

  // 商品を全件取得するWebAPI URL
  // ★実装4★
  const url = 'http://localhost:3000/shoes'

  // コンポーネントがマウントされた後に呼び出されるコールバックの登録
  onMounted(() => {
    // ★実装5★
    // WebAPI呼出し
    axios.get(url)
      .then((response) => {
        message.value = '検索に成功しました'
        itemList.value = response.data
      })
      .catch((error) => {
        message.value = '検索に失敗しました'
        itemList.value = []
        console.log(error)
      })
  })
</script>

<template>
  <p class="message">{{ message }}</p>
  <table border="1">
    <thead>
      <tr>
        <th>商品イメージ</th>
        <th>商品名</th>
        <th>価格</th>
      </tr>
    </thead>
    <tbody>
      <!--★実装6★-->
      <tr v-for="(item) in itemList" v-bind:key="item.id">
        <td><img v-bind:src="'/images/' + item.img"></td>
        <td>{{ item.productName }}</td>
        <td>{{ item.price }}円</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: auto;
  border-collapse: collapse;
}

table,
th,
td {
  padding: 0px 10px 0px 10px;
  border: 1px solid #333;
}

th {
  background-color: azure;
  font-weight: bold;
}
</style>
