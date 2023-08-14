<template>
  <div>
    <v-app>
      <v-container class="d-flex">
        <v-row justify="center">
          <div v-for="list in listAll" v-bind:key="list.ProductCode">
            <v-col cols="12">
              <div v-on:click="select(list)">
                <img v-bind:src="'../'+list.Img">
                {{ list.ProductName }}
              </div>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-app>
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