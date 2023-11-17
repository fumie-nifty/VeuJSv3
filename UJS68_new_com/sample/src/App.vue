<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Sample</h1>
      <h2>3章</h2>
      <nav>
        <RouterLink to="/">リアクティブ変数＆マスタッシュ構文</RouterLink><br>
        <RouterLink to="/v-if_v-show">v-if</RouterLink><br>
        <RouterLink to="/">v-else-if v-else</RouterLink><br>
        <RouterLink to="/">v-show</RouterLink><br>
        <RouterLink to="/">v-for</RouterLink><br>
        <RouterLink to="/directive1">ハンズオン3-1</RouterLink><br>
        <RouterLink to="/directive1_ans">ハンズオン3-1　解答</RouterLink><br>
        <RouterLink to="/">v-bind</RouterLink><br>
        <RouterLink to="/">v-model</RouterLink><br>
        <RouterLink to="/">v-cloak</RouterLink><br>
        <RouterLink to="/">ハンズオン3-2</RouterLink><br>
      </nav>

      <h2>4章</h2>
      <nav>
        <RouterLink to="/">リアクティビティー</RouterLink><br>
        <RouterLink to="/">算出プロパティ</RouterLink><br>
        <RouterLink to="/">イベント</RouterLink><br>
        <RouterLink to="/">ウォッチャー</RouterLink><br>
        <RouterLink to="/">v-for</RouterLink><br>
        <RouterLink to="/">ハンズオン4-1</RouterLink><br>
      </nav>
      <h2>5章</h2>
      <nav>
        <RouterLink to="/">Web API"</RouterLink><br>
        <RouterLink to="/">ハンズオン5-1</RouterLink><br>
      </nav>
      <h2>6章</h2>
      <nav>
        <RouterLink to="/">コンポーネント</RouterLink><br>
        <RouterLink to="/">ハンズオン6-1</RouterLink><br>
      </nav>
      <h2>7章</h2>
      <nav>
        <RouterLink to="/">ルーティング</RouterLink><br>
        <RouterLink to="/">ハンズオン7-1</RouterLink><br>
        <RouterLink to="/">状態管理</RouterLink><br>
        <RouterLink to="/">ハンズオン7-2</RouterLink><br>
      </nav>
   </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 10px;
}
</style>
