const app = new Vue({

  el: '#app',
  data: {
    message: '選択してください', //初期メッセージ
    image: '', //画像
    keyword: '', //検索キー
    error: '' //エラーメッセージ
  },
  watch: {

  },
  methods: {
    search: function () {
      let vm = this
      vm.message = '検索中'
      vm.error = ''
      

        .catch(function (error) {

          vm.image = ''
        })

    }
  }
})