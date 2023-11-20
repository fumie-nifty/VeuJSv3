const app = new Vue({

  el: '#app',
  data: {
    hour: 0, //時
    minutes: 0, //分
    second: 0 //秒
  },
  watch: {
    //時の計算
    hour: function (newValue, oldValue) {
      console.log(newValue, oldValue) //入力値の確認
      this.hour = newValue
      this.minutes = newValue * 60
      this.second = newValue * 3600
    },
    //分の計算
    minutes: function (value) {
      this.hour = value / 60
      this.minutes = value
      this.second = value * 60
    },
    //秒の計算
    second: function (value) {
      this.hour = value / 3600
      this.minutes = value / 60
      this.second = value
    }
  }
})