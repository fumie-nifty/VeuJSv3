<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h3>章7　ルーティングの階層化とパラメータ渡し</h3>
    <nav>
        <RouterLink to="/chap7/simple_route/nest">メニュー１</RouterLink>｜
        <RouterLink to="/chap7/simple_route/sendParam">メニュー２</RouterLink>       
      </nav>
      <RouterView />
  </main>
</template>
