<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ShoppingCart.vue --> 

<script setup>
  import { ref } from 'vue'

  // shopingCartStore.jsのインポート
	import { useShoppingCartStore } from '@/stores/shopingCartStore.js'
	// shopingCartStoreストアーオブジェクトの取得
	const shopingCartStore = useShoppingCartStore()	

  //const shoppingCart = shopingCartStore.shoppingCart
  const searchFlag = ref(true)
  //const message = ref('')

</script>

<template>
  <div class="input_output_frame">
    <p></p>
    <table v-show="searchFlag" align="center" border="1">
      <thead>
        <tr align="center">
          <th width="80">商品ID</th>
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
          <td>{{ item.Price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.Price *  item.quantity}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table {
    margin: auto;
  }
</style>