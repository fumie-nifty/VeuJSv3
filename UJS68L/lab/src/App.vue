<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- App.vue --> 

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <h1>実習問題</h1>
      </RouterLink>

      <nav>
        <h2>3章</h2>
        <RouterLink to="/labs/lab3/question">・実習問題１</RouterLink><br>
        <RouterLink to="/labs/lab3op1/all_item">・オプション１</RouterLink><br>
        <h2>4章</h2>
        <RouterLink to="/labs/lab4/insert_item">・実習問題１</RouterLink><br>
        <RouterLink to="/labs/lab4op1/insert_item">・オプション１</RouterLink><br>
        <RouterLink to="/labs/lab4op2/insert_item_opt">・オプション２</RouterLink><br>
        <h2>5章</h2>
        <RouterLink to="/labs/lab5/search_item">・実習問題１</RouterLink><br>
        <RouterLink to="/labs/lab5op1/all_item">・オプション１</RouterLink><br>
        <h2>6章</h2>
        <RouterLink to="/labs/lab6/question">・実習問題１</RouterLink><br>
        <RouterLink to="/labs/lab6op1/search_item">・オプション１</RouterLink><br>
        <h2>7章</h2>
        <RouterLink to="/labs/lab7/top">・実習問題& オプション</RouterLink><br>
      </nav>

      <RouterLink to="/">
        <h1>解答例</h1>
      </RouterLink>

      <nav>
        <h2>3章</h2>
        <RouterLink to="/answers/ans3/question">・実習問題１</RouterLink><br>
        <RouterLink to="/answers/ans3op1/all_item">・オプション１</RouterLink><br>
        <h2>4章</h2>
        <RouterLink to="/answers/ans4/insert_item">・実習問題１</RouterLink><br>
        <RouterLink to="/answers/ans4op1/insert_item">・オプション１</RouterLink><br>
        <RouterLink to="/answers/ans4op2/insert_item_opt">・オプション２</RouterLink><br>
        <h2>5章</h2>
        <RouterLink to="/answers/ans5/search_item">・実習問題１</RouterLink><br>
        <RouterLink to="/answers/ans5op1/all_item">・オプション１</RouterLink><br>
        <h2>6章</h2>
        <RouterLink to="/answers/ans6/question">・実習問題１</RouterLink><br>
        <RouterLink to="/answers/ans6op1/search_item">・オプション１</RouterLink><br>
        <h2>7章</h2>
        <RouterLink to="/answers/ans7/top">・実習問題& オプション</RouterLink><br>
       </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
}

nav a{
  margin-left: 5px;
}

.router-link-active{
   font-weight: bold;
   color: brown;
  }
</style>
