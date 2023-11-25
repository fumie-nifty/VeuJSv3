<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- RutingAnsView.vue --> 

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h3>章7　ルーティング</h3>
    <nav>
      <!--Todo1-->
      <RouterLink to="/chap7/route_ans/all_employee">従業員一覧</RouterLink>｜
      <RouterLink to="/chap7/route_ans/find_employee_component">従業員検索</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped></style>