<template>
  <div>
    <p>従業員番号<input type="text" v-model="keyWord"></p>
    <button v-on:click="searchMember">検索</button>
    <p>検索結果:{{ response }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SearchMember',
    data() {
      return {
        response: '',
        keyWord: '',
        lists: []
      }
    },
    methods: {
      searchMember: function () {
        let vm = this
        this.$axios.get('../sample.json/').then((res) => {
          const data = res.data
          for (let i in data) {
            let id = data[i].id
            if (id == vm.keyWord) {
              return vm.response = data[i].name
            }
          }
          vm.response = '結果なし'
        })
      }
    }
  }
</script>