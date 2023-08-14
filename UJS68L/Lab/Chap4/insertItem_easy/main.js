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
    //入力値をlistsに格納
    insertItem:function(){
      //すべての情報が入力された場合
      if(this.productName !=='' && this.color !=='' && this.price !==0){
        this.id = this.id +1 
        //this.lists.push()を使用し、オブジェクト形式で双方向データバインディングの入力値を格納する
        //ex {キー:this.dataオプションのデータ}

        //thisを使用し、各dataの値をクリアする（双方向データバインディングにより入力値もクリアされる）


      }else{
        alert('すべての商品情報を入力してください。')
      }
    },
    deleteItem:function(index){
      if(window.confirm('削除しますか？')){
        //選択された商品情報をsplice()を使用して削除

      }
    }
  }
})