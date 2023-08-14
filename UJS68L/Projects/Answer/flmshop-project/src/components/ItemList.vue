<template>
  <div>
    <h2>商品を選択すると商品の詳細を見ることができます</h2>
    <table align="center">
      <tr v-for="(list,index) in listAll" v-bind:key="list.ProductCode">
        <td>No:{{index+1}}</td>
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
    name: 'ItemList',
    methods: {
      //商品情報をクリックした際に、選択された商品情報をStoreに格納(更新)
      select: function (shoesData) {
        this.$store.commit('shoesIn', shoesData)
        this.$router.push("/detail") //URL遷移
      }
    },
    //　Vueインスタンス作成のタイミングで呼び出される処理を登録できる
    created: function () {
      this.$axios.get('../shoes.json/').then((res) => {
        //axiosを使用して取得した商品情報をStoreに格納
        this.$store.commit('listIn', res.data)
      })
    },
    computed: {
      //Storeの商品情報リストにアクセス
      listAll: function () {
        return this.$store.state.lists
      }
    }
  }
</script>