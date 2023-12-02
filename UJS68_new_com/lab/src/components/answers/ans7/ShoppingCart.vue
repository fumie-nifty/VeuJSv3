<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ShoppingCart.vue --> 

<script setup>
  import { ref } from 'vue'

  // shopingCartStore.jsのインポート
	import { useShoppingCartStore } from '@/stores/shopingCartStore.js'
	// shopingCartStoreストアーオブジェクトの取得
	const shopingCartStore = useShoppingCartStore()	

  const cartFlag = ref(true)  // 検索結果フラグ
  const message = ref('')       // メッセージ

  // ショッピングカートの要素数の取得
  const count = shopingCartStore.shoppingCart.length

  // ショッピングカートが要素0だった場合
  if(count == 0){
    message.value = '商品は何も追加されていません。'
    cartFlag.value = false
  }

</script>

<template>
  <div class="input_output_frame">
    <p>{{ message }}</p>
    <table v-show="cartFlag">
      <thead>
        <tr>
          <th width="70">商品ID</th>
          <th width="200px">商品名</th>
          <th width="70px">価格</th>
          <th width="50px">数量</th>
          <th width="70px">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in shopingCartStore.shoppingCart" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.productName }}</td>
          <td class="number_column">{{ item.Price }}</td>
          <td class="number_column">{{ item.quantity }}</td>
          <td class="number_column">{{ item.Price *  item.quantity}}</td>
        </tr>
        <tr>
          <td colspan="4" class="sub_title">合　　計</td>
          <td class="number_column">{{ shopingCartStore.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
	table{
		margin: auto;
    border-collapse: collapse;
  }

  table, th, td {
    padding: 0px 10px 0px 10px;
    border:1px solid #333;
  }

  .number_column{
    text-align: right;
  }
  th,.sub_title{
  text-align: center;
  background-color:azure;
  font-weight: bold;
  }
</style>