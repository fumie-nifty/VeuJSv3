<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios"

// shopingCartStore.jsのインポート
import { useShoppingCartStore } from '@/stores/shopingCartStore.js'
// shopingCartStoreストアーオブジェクトの取得
const shopingCartStore = useShoppingCartStore()

// 親コンポーネントからpropsの取得う
const props = defineProps(['id'])   //Todo2
console.log(props.id)

const router = useRouter()

const message = ref('')
const searchFlag = ref(false)
const quantity = ref(0)

const item = ref({})
const selectItem = ref({})

const url = 'http://localhost:3000/shoes/' + props.id


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

const addShoppingCart = () => {
  if (quantity.value == 0) {
    message.value = '数量が未入力です'
    return
  }
  if (item.value.stock < quantity.value) {
    message.value = '在庫数を超えた数量が入力されています'
    return
  }
  selectItem.value = {
    id: item.value.id,
    productName: item.value.productName,
    Price: item.value.price,
    quantity: quantity.value
  }
  shopingCartStore.addShoppingCart(selectItem.value)
  router.push("/answers/ans7/shopping_cart")
}
</script>

<template>
  <div class="input_output_frame">
    <p>{{ message }}</p>
    <table align="center">
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