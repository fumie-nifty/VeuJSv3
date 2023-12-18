<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- AppBaseView.vue --> 

<script setup>
</script>

<template>
  <!--ナビゲーションメニュー-->
  <div id="nav">
    <p><img src="/images/NewLogo.jpg" alt=""></p>
    <router-link to="/answers/ans7/top">home</router-link> |
    <router-link to="/answers/ans7/question">アンケート</router-link> |
    <router-link to="/answers/ans7/insert_item">商品登録</router-link> |
    <router-link to="/answers/ans7/search_item">商品検索</router-link> |
    <!--★実習★-->
    <router-link to="/answers/ans7/shopping_cart">カート</router-link> |
    <router-link to="/answers/ans7/all_item">商品一覧</router-link> |
    <router-view />
  </div>
</template>

<style scoped>
  img {
    width: 90%;
    height: auto;
  }

  #nav {
    margin: 0 auto;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  .router-link-active{
    background-color: bisque;
    font-weight: bold;
    color: brown;
  }
</style>