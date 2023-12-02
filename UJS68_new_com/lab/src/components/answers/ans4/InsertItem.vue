<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- InsertItem.vue --> 

<script setup>
  import { ref, reactive } from 'vue'

  // 入力値格納用
  const data = reactive({
    options: ['ハイカットスニーカー', 'ミドルスニーカー', 'ローカットスニーカー', 'サンダル'],
    productName: '', //商品名
    color: '', //色
    price: 0, //金額
  })

  const itemId = ref(0)   //商品コードカウント用
  const itemList = reactive([]) // 商品リスト
  const message = ref('')       // メッセージ
  const errorFlag = ref(false)  // エラーフラグ

  /**
   * insertItem
   * 　dataの値を商品リストに追加する
   * @function
   */
   const insertItem = () => {
    // すべての情報が入力されていない場合  
    if (data.productName == '' || data.color == '' || data.price == 0) {
      message.value = 'すべての商品情報を入力してください。'
      errorFlag.value = true
      return
    }
    // 商品コード算出
    itemId.value += 1
    // 入力情報を商品リストに追加 
    itemList.push({
      id: itemId.value,
      productName: data.productName,
      color: data.color,
      price: data.price
    })
    // 入力値のクリア
    data.productName = ''
    data.color = ''
    data.price = 0
    message.value = '登録完了しました'
    errorFlag.value = false
  }

</script>

<template>
  <div class="input_output_frame">
    <p style="text-align: center;">
      登録したい商品情報を入力後、INSERTボタンを押下してください
    </p>
    <p v-bind:class="{ red: errorFlag }" class="message">
      {{ message }}
    </p>
    <table>
      <tr>
        <td>商品名：</td>
        <td>
          <select v-model="data.productName">
            <option>ハイカットスニーカー</option>
            <option>ミドルスニーカー</option>
            <option>ローカットスニーカー</option>
            <option>サンダル</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>金額：</td>
        <td>
          <input type="number" v-model.number="data.price" min="0">
        </td>
      </tr>
      <tr>
        <td>色：</td>
        <td>
          <input type="radio" value="赤" v-model="data.color">赤
          <input type="radio" value="青" v-model="data.color">青
        </td>
      </tr>
    </table>

    <button v-on:click="insertItem">登録</button>

    <table class="insertItem">
      <thead>
        <th>No</th><th>商品名</th><th>カラー</th><th>金額</th><th>キャンセル</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemList" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.color }}</td>
          <td>{{ item.price }}円</td>
          <td style="text-align: center;">
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.message {
  font-weight: bold;
  color: blue;
}

.red {
  color: red;
  font-size: large;
}

table.insertItem {
  margin-top: 5px;
  border-collapse: collapse;
}

table.insertItem,
.insertItem th,
.insertItem td {
  padding: 0px 10px 0px 10px;
  border: 1px solid #333;
}

.insertItem th {
  background-color: azure;
  font-weight: bold;
}
</style>