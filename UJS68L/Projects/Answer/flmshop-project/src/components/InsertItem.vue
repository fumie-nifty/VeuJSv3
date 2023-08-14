<template>
  <div>
    <h2>登録したい商品情報を入力後、INSERTボタンを押下してください</h2>
    <p>商品名：
    <select v-model="productName">
				<option>ハイカットスニーカー</option>
				<option>ミドルスニーカー</option>
				<option>ローカットスニーカー</option>
				<option>サンダル</option>
    </select>
    </p>
    <p>金額：
    <input type="number" v-model.number="price" min="0">
    </p>
    <p>色：
    <input type="radio" value="赤" v-model="color">赤
    <input type="radio" value="青" v-model="color">青
    </p>
    <button v-on:click="insertItem()"> Insert</button>
    <table border="1" v-show="showFlag" align="center">
      <thead>
        <th>No</th>
        <th>商品名</th>
        <th>カラー</th>
        <th>金額</th>
        <th>CANCEL</th>
      </thead>
      <tbody>
        <tr v-for="(list,index) in lists" v-bind:key="list.id">
          <td>{{ index + 1 }}</td>
          <td>{{ list.productName }}</td>
          <td>{{ list.color }}</td>
          <td>{{ list.price }}円</td>
          <td><button v-on:click="deleteItem(index)">Cancel</button></td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name:'InsertItem',
  data(){
    return {
      options:['ハイカットスニーカー','ミドルスニーカー','ローカットスニーカー','サンダル'],
      id:0, //v-for用のid
      productName:'', //商品名
      color:'', //色
      price:'', //金額
      lists:[], //配列
      showFlag:false //テーブル表示フラグ
    }
  },
  methods:{    //入力値をlistsに格納
    insertItem:function(){
      //すべての情報が入力された場合
      if(this.productName !=='' && this.color !=='' && this.price !== 0){
          this.id = this.id +1 
          this.lists.push({productName:this.productName,color:this.color,price:this.price})
          this.showFlag = true //テーブルの表示
          //入力値のクリア
        this.productName = ''
        this.color = ''
        this.price = ''
      }else{
        alert('すべての商品情報を入力してください。')
      }
   },
    deleteItem:function(index){
    if(window.confirm('削除しますか？')){
      //選択された商品情報を削除
      this.lists.splice(index,1)
      //商品情報が空の場合テーブルを非表示にする
      if(this.lists.length === 0){
        this.showFlag = false
      }
    }
   }
  }
}
</script>