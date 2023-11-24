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
        <RouterLink to="/">3章　実習問題１</RouterLink><br>
        <RouterLink to="/">4章　実習問題１</RouterLink><br>
        <RouterLink to="/">5章　実習問題１</RouterLink><br>
        <RouterLink to="/">6章　実習問題１</RouterLink><br>
        <RouterLink to="/">7章　実習問題１</RouterLink><br>
      </nav>

      <RouterLink to="/">
        <h1>解答例</h1>
      </RouterLink>

      <nav>
        <RouterLink to="/">3章　実習問題１</RouterLink><br>
        <RouterLink to="/">4章　実習問題１</RouterLink><br>
        <RouterLink to="/">5章　実習問題１</RouterLink><br>
        <RouterLink to="/">6章　実習問題１</RouterLink><br>
        <RouterLink to="/answers/ans7">7章　実習問題１</RouterLink><br>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  font-size: 12px;
}
</style>
