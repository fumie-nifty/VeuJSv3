const app = new Vue({

  el: '#app',
  data: {
    money: 0, //金額
    sum: '',　//合計金額
    tax: 1.1, //税率
    first: '', //名字
    last: '', //名前
    flag: '', // checkbox
    checkValue: '',//checkbox用
    selectJob: [], //職業格納リスト
    selectPost: '' //役職格納リスト
  }
})