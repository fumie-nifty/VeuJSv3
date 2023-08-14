<template>
  <div id="app">
    <div id="nav">
          <p><img src="./assets/NewLogo.jpg" alt=""></p>
          <!-- homeの呼び出し -->
          <router-link :to="{name:'InsertItem'}">商品登録</router-link> |
          <router-link :to="{name:'SearchItem'}">商品検索</router-link> |
          <router-link :to="{name:'ShopItem'}">商品一覧</router-link> |
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
