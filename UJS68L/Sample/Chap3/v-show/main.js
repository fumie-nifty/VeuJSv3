const app = new Vue({

  el: '#app',
  data: {
    text: 'Hello Vue!',
    flag: false
  },
  methods: {
    //表示制御
    change: function () {
      this.flag = !this.flag
    }
  }
})