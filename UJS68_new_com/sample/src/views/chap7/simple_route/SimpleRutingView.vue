<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SimpleRutingView.vue -->
<!-- サブメニュー画面 -->

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h3>章7　ルーティングの階層化とパラメータ渡し</h3>
    <nav>
      <RouterLink to="/chap7/simple_route/nest">ネスト画面</RouterLink>｜
      <RouterLink to="/chap7/simple_route/sendParam">送信画面</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>
