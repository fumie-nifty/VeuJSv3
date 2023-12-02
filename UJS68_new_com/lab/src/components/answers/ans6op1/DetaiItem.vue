<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SearchItem.vue --> 

<script setup>
  import { ref, defineProps } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from "axios"

  // ルーターオブジェクトの取得
  const router = useRouter()

  // 親コンポーネントからpropsの取得う
  const props = defineProps(['id'])   

  const message = ref('')       // メッセージ
  const searchFlag = ref(false) // 検索結果フラグ
  const quantity = ref(0)       // 数量入力用
  const item = ref({})          // 商品検索APIの戻り値

  // 商品を１件検索するWebAPI URL
  const url = 'http://localhost:3000/shoes/' + props.id

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
      <button>カートに入れる</button>
    </table>
  </div>
</template>

<style scoped></style>