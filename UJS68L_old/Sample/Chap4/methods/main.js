const app = new Vue({

  el: '#app',
  data: {
    first: '', //名字
    last: '', //名前
    nameShow: false, //名前入力用フラグ
    department: '', //部門
    departmentShow: false, //マウスオーバー用フラグ
    count: 1 //カウントアップ用
  },
  methods: {
    //入力した名前を表示する
    clickFlag: function () {
      this.nameShow = true
    },
    //マウスオーバーで部門を表示する
    mouseFlag: function () {
      this.departmentShow = !this.departmentShow
    },
    //eventオブジェクトの確認
    clickEvent: function (event) {
      alert(event.target.tagName)
    },
    //引数を渡すことができる
    sayHello: function (value) {
      alert(value);
    },
    //カウントアップ
    countUp: function () {
      this.count++
    }
  }
})