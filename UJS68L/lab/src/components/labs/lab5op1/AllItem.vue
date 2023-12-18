<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
  import { ref, onMounted } from 'vue'
  import axios from "axios"

  const message = ref('')		// メッセージ
  const itemList = ref([])	// 商品リスト

  // 商品を全件取得するWebAPI URL
  // ★実装4★
  

  // コンポーネントがマウントされた後に呼び出されるコールバックの登録
  onMounted(() => {
    // ★実装5★
    // WebAPI呼出し
  
  
   
   
  
  
   
   
   
      
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
      <tr>
        <td><img></td>
        <td></td>
        <td>円</td>
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
