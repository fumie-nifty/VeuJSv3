const app = new Vue({

  el: '#app',
  data: {
    money: 0,
    number: 0,
    text: ''
  },
  filters: {
    //税込み金額
    taxCalculation: function (value) {
      return parseInt(value) * 1.1
    },
    //文字列に変換
    numberFormat: function (value) {
      return parseInt(value).toLocaleString()
    },
    //文字の3桁区切り
    stringFormat: function (value) {
      return value.substr(0, 3)
    }

  }
})