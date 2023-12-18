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
        if (this.name !== "") {
          this.lists.push({
            name: this.name
          })
          this.name = ""
          this.showList = true
        }
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>