<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
  import { ref, onMounted } from 'vue'
  import axios from "axios"

  const message = ref('')		// メッセージ
  const itemList = ref([])	// 商品リスト

  // 商品を全件取得するWebAPI URL
  const url = 'http://localhost:3000/shoes'

  // コンポーネントがマウントされた後に呼び出されるコールバックの登録
  onMounted(() => {
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
      <tr v-for="(item) in itemList" v-bind:key="item.id">
        <td>
          <!--★実習3-->
          <RouterLink :to="{}">
            <img v-bind:src="'/images/' + item.img">
          </RouterLink>
        </td>
        <td>
          {{ item.productName }}
        </td>
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
