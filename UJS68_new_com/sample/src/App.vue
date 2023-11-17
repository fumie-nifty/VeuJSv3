<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/"><h1>Sample</h1></RouterLink>
      <h2>3章</h2>
      <nav>
        <RouterLink to="/mustache">リアクティブ変数＆マスタッシュ構文</RouterLink><br>
        <RouterLink to="/if_show">v-if</RouterLink><br>
        <RouterLink to="/if_else">v-else-if v-else</RouterLink><br>
        <RouterLink to="/for">v-for</RouterLink><br>
        <RouterLink to="/directive1">ハンズオン3-1</RouterLink><br>
        <RouterLink to="/directive1_ans">ハンズオン3-1　解答</RouterLink><br>
        <RouterLink to="/bind">v-bind</RouterLink><br>
        <RouterLink to="/bind_reference">v-bind 参考</RouterLink><br>
        <RouterLink to="/model">v-model</RouterLink><br>
        <a href="/chap3/v-cloak/index.html" target="_blank" rel="noopener noreferrer">v-cloak</a><br>
        <RouterLink to="/directive2">ハンズオン3-2</RouterLink><br>
        <RouterLink to="/directive2_ans">ハンズオン3-2　解答</RouterLink><br>
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
