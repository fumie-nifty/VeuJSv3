const app = new Vue({

  el: '#app',
  data: {
    lists: [{
        id: 922101,
        name: '千野'
      },
      {
        id: 922102,
        name: '結城'
      },
      {
        id: 922103,
        name: '高橋'
      },
      {
        id: 922104,
        name: '吉田'
      }
    ]
  },
  computed: {
    //配列の並び替え処理
    sortLists: function () {
      return this.lists.slice().reverse();
    }
  }
})