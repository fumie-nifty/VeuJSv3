<template>
  <div>
    登録者名：<input type="text" v-model="name">
    <button v-on:click="insertMember">登録</button>
    <table border="1" aligin="center">
      <thead>
        <tr>
          <th>No</th>
          <th>従業員名</th>
        </tr>
      </thead>
      <tbody v-show="showList">
        <tr v-for="(list, index) in lists" v-bind:key="list.name">
          <td>{{ index + 1 }}</td>
          <td>{{ list.name }}</td>
        </tr>
      </tbody>
    </table>
    <p>{{ $store.state.commonName}}</p>
  </div>
</template>

<script>
  export default {
    name: 'InsertMember',
    data: function () {
      return {
        name: '',
        lists: [],
        showList: false
      }
    },
    methods: {
      insertMember: function () {
        if (this.name !== "") { //未入力でない場合
          this.lists.push({
            name: this.name //オブジェクト形式でセット
          })
          this.$store.commit('commonNameIn', this.name)
          this.name = ""
          this.showList = true
        }
      }
    }
  }
</script>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>