<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- InsertItem.vue --> 

<script setup>
  import { ref, reactive } from 'vue'

  const data = reactive({
    options: ['ハイカットスニーカー', 'ミドルスニーカー', 'ローカットスニーカー', 'サンダル'],
    id: 0, // 商品コード
    productName: '', // 商品名
    color: '', // 色
    price: 0, // 金額
    quantity:0 // 数量
  })

  const itemList = reactive([])
  const showFlag = ref(false)

  const insertItem = () => {
    // すべての情報が入力されていない場合  
    if (data.productName == '' || data.color == '' || data.price == 0) {
      alert('すべての商品情報を入力してください。')
      return
    }
    // 商品コード算出（
    data.id = data.id + 1
    // すべての情報が入力されている場合 
    itemList.push({ id: data.id, productName: data.productName, color: data.color, price: data.price })
    // テーブルの表示
    showFlag.value = true 
    // 入力値のクリア
    data.productName = ''
    data.color = ''
    data.price = 0
  }

  const deleteItem = (index) => { 
    if(window.confirm('削除しますか？')){
      // 選択された商品情報を削除
      itemList.splice(index,1)
      // 商品情報が空の場合テーブルを非表示にする
      if(itemList.length === 0){
        showFlag.value = false
      }
    }    
    console.log('deleteItem:' + index)
  }
</script>

<template>
  <div class="input_output_frame">
    <p style="text-align: center;">登録したい商品情報を入力後、INSERTボタンを押下してください</p>
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

    <table border="1" v-show="showFlag" align="center">
      <thead>
        <th>No</th>
        <th>商品名</th>
        <th>カラー</th>
        <th>金額</th>
        <th>CANCEL</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemList" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.color }}</td>
          <td>{{ item.price }}円</td>
          <td><button v-on:click="deleteItem(index)">削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table{
    margin-top: 5px;
  }
</style>