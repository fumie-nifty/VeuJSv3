const app = new Vue({

  el: '#app',
  data: {
  },
  computed: {
    getComputed: function () {
      return Math.random()
    }
  },
  methods: {
    getMethods: function () {
      return Math.random()
    }
  }
})