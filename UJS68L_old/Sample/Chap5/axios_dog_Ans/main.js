const app = new Vue({

  el: '#app',
  data: {
    message: '選択してください', //初期メッセージ
    image: '', //画像
    keyword: '', //検索キー
    error: '' //エラーメッセージ
  },
  watch: {
    //値が変わるたびにsearch()を呼び出す
    keyword: function () {
      this.search()
    }
  },
  methods: {
    search: function () {
      let vm = this //this参照をローカル変数に退避
      vm.message = '検索中'
      vm.error = ''
      let param = this.keyword //入力された値を格納
      //非同期通信
      axios.get('https://dog.ceo/api/breed/' + param + '/images/random')
        //正常処理
        .then(function (response) {
          vm.image = response.data.message //検索結果を格納
        })
        //エラー処理
        .catch(function () {
          vm.error = '選択した値では検索できませんでした。'
          vm.image = '' //検索成功時の画像をクリア
        })
        //強制実行
        .finally(function () {
          vm.message = '通信終了しました。再度値を選択してください'
        })
    }
  }
})