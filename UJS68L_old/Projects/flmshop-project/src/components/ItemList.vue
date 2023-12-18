<template>
  <div>
    <h2>商品を選択すると商品の詳細を見ることができます</h2>
    <table align="center">
      <!-- 実装1 v-forを使用してcomputed listAll内のリストを表示-->
      <!-- keyにはProductCodeを指定 -->
      <tr>
        <td>No:{{index+1}}</td>
        <!-- 実装2 -->
        <td v-on:click="select(list)">
          <img v-bind:src="'../'+list.Img">
            {{ list.ProductName }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name:'ItemList',
     methods:{
         select:function(shoesData){
            // 実装3 選択された商品情報をStoreに格納(更新)

            this.$router.push("/detail");　//URL遷移
         }
     },
     created:function(){
         // 実装4 axiosによる非同期通信 URLは('../shoes.json/')

           // 実装5 取得した商品情報をStoreに格納
     },
     computed:{
         // 実装6 store内のlistsにアクセス

     }
}
</script>
