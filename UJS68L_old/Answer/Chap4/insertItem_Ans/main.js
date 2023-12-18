const app = new Vue({
  el: '#app',
  data: {
    id: 0, //v-for用のid
    productName: '', //商品名
    color: '', //色
    price: 0, //金額
    lists: [] //配列
  },
  methods: {
    //入力値をlistsに格納
    insertItem: function () {
      //すべての情報が入力された場合
      if (this.productName !== '' && this.color !== '' && this.price !== 0) {
        this.id = this.id + 1
        this.lists.push({
          productName: this.productName,
          color: this.color,
          price: this.price
        })
        //入力値のクリア
        this.productName = ''
        this.color = ''
        this.price = 0
      } else {
        alert('すべての商品情報を入力してください。')
      }
    },
    deleteItem: function (index) {
      if (window.confirm('削除しますか？')) {
        //選択された商品情報を削除
        this.lists.splice(index, 1)
      }
    }
  }
})