<template>
  <div id="app">
    <div id="nav">
      <v-app>
        <v-container>
          <v-row>
            <v-col cols="12">
              <p>
                <v-img src="./assets/NewLogo.jpg" alt=""></v-img>
              </p>
              <router-link to="/">home</router-link> |
              <router-link :to="{name:'InsertItem'}">商品登録</router-link> |
              <router-link :to="{name:'SearchItem'}">商品検索</router-link> |
              <router-link :to="{name:'ShopItem'}">商品一覧</router-link> |
            </v-col>
          </v-row>
        </v-container>
        <router-view />
      </v-app>
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