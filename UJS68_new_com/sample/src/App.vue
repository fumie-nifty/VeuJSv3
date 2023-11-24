<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <h1>Sample</h1>
      </RouterLink>

      <h2>2章</h2>
      <nav>
        <a href="/chap2/introduction_ans/index.html" target="_blank" rel="noopener noreferrer">CDNの利用</a><br>
        <RouterLink to="/chap2/introduction">単一ファイルコンポーネント</RouterLink><br>
      </nav>

      <h2>3章</h2>
      <nav>
        <RouterLink to="/chap3/mustache">リアクティブ変数＆マスタッシュ構文</RouterLink><br>
        <RouterLink to="/chap3/if_show">v-if</RouterLink><br>
        <RouterLink to="/chap3/if_else">v-else-if v-else</RouterLink><br>
        <RouterLink to="/chap3/for">v-for</RouterLink><br>
        <RouterLink to="/chap3/directive1">ハンズオン3-1</RouterLink><br>
        <RouterLink to="/chap3/directive1_ans">ハンズオン3-1　解答</RouterLink><br>
        <RouterLink to="/chap3/bind">v-bind</RouterLink><br>
        <RouterLink to="/chap3/bind_reference">v-bind 参考</RouterLink><br>
        <RouterLink to="/chap3/model">v-model</RouterLink><br>
        <a href="/chap3/v-cloak/index.html" target="_blank" rel="noopener noreferrer">v-cloak</a><br>
        <RouterLink to="/chap3/directive2">ハンズオン3-2</RouterLink><br>
        <RouterLink to="/chap3/directive2_ans">ハンズオン3-2　解答</RouterLink><br>
      </nav>

      <h2>4章</h2>
      <nav>
        <RouterLink to="/chap4/ref">リアクティビティー ref()</RouterLink><br>
        <RouterLink to="/chap4/reactive">リアクティビティー reactive()</RouterLink><br>
        <RouterLink to="/chap4/event">イベント処理</RouterLink><br>
        <RouterLink to="/chap4/computed">算出プロパティ</RouterLink><br>
        <RouterLink to="/chap4/watch">監視プロパティ</RouterLink><br>
        <RouterLink to="/chap4/insert_employee">ハンズオン4-1</RouterLink><br>
        <RouterLink to="/chap4/insert_employee">ハンズオン4-1　解答</RouterLink><br>
      </nav>

      <h2>5章</h2>
      <nav>
        <RouterLink to="/chap5/find_employee">Web API</RouterLink><br>
        <RouterLink to="/chap5/all_employee">ハンズオン5-1</RouterLink><br>
      </nav>
      <h2>6章</h2>
      <nav>
        <RouterLink to="/chap6/component">コンポーネント指向</RouterLink><br>
        <RouterLink to="/chap6/find_employee_component">ハンズオン6-1</RouterLink><br>
      </nav>
      <h2>7章</h2>
      <nav>
        <RouterLink to="/chap7/simple">ルーティング</RouterLink><br>
        <RouterLink to="/chap7">ハンズオン7-1</RouterLink><br>
        <RouterLink to="/chap7/pinia">状態管理</RouterLink><br>
        <RouterLink to="/chap7/insert_member">ハンズオン7-2</RouterLink><br>
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
