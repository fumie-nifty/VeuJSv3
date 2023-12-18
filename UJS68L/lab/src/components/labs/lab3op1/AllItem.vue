<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AllItem.vue --> 

<script setup>
import { ref } from 'vue'

// メッセージ
const message = ref('')

// 商品リスト
const itemList = ref([
  {
    "id": 1,
    "productName": "ハイカットスニーカーFLM_GR01",
    "stock": 10,
    "order": 2,
    "salesPotential": 8,
    "price": 7800,
    "img": "SH1001.gif"
  },
  {
    "id": 2,
    "productName": "ハイカットスニーカーFLM_LG01",
    "stock": 2,
    "order": 1,
    "salesPotential": 1,
    "price": 7900,
    "img": "SH1002.gif"
  },
  {
    "id": 3,
    "productName": "ハイカットスニーカーFLM_BL",
    "stock": 8,
    "order": 0,
    "salesPotential": 8,
    "price": 7900,
    "img": "SH1003.gif"
  },
  {
    "id": 4,
    "productName": "ハイカットスニーカーFLM_GR",
    "stock": 5,
    "order": 5,
    "salesPotential": 0,
    "price": 7500,
    "img": "SH1004.gif"
  }
])
</script>

<template>
  <p class="message">{{ message }}</p>
  <table>
    <thead>
      <tr>
        <th>商品イメージ</th>
        <th>商品名</th>
        <th>価格</th>
      </tr>
    </thead>
    <tbody>
      <!--★実装2★-->
      <tr>
        <td><img ></td>
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
