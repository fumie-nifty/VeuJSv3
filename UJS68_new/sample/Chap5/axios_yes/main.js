const app = new Vue({

  el: '#app',
  data: {
    message: '',
    image: '',
    answer: '',
  },
  methods: {
    search: function () {
      //axiosでvueインスタンスのプロパティにアクセスするためにthisをlocal変数に入れる
      var vm = this
      //非同期通信
      axios.get('https://yesno.wtf/api')
        //検索成功
        .then(function (response) {
          vm.image = response.data.image
          vm.answer = response.data.answer
        })
        //検索失敗
        .catch(function (error) {
          vm.message = 'Error' + error
        })
        //強制実行
        .finally(function () {
          vm.message = ''
        })
    }
  }
})