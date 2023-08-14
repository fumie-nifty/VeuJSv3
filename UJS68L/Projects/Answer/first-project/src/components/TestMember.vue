<template>
  <div>
    名前を入力する<input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'TestMember',
    data: function () {
      return {
        name: ''
      }
    }
  }
</script>

<style scoped>
  p {
    color: #42b983;
  }
</style>