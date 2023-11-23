<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <main>
    <h3>章7　ルーティング</h3>
    <nav>
        <RouterLink to="/chap7/all_employee">従業員一覧</RouterLink>｜
        <RouterLink to="/chap7/find_employee_component">従業員検索</RouterLink>
        
      </nav>
      <RouterView />
  </main>
</template>

<style scoped>

</style>