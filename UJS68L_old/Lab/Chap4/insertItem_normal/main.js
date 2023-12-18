const app = new Vue({
  el:'#app',
  data:{
    id:0, //v-for用のid
    productName:'', //商品名
    color:'', //色
    price:0, //金額
    lists:[] //配列
  },
  methods: {
    // 実装７
    //入力値をlistsに格納
    insertItem:function(){


    },
    // 実装８
    deleteItem:function(){
      //確認ウィンドウはwindow.confirm()を使用
    }
  }
})