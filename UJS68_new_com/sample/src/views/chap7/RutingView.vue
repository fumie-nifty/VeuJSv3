<script setup>
  import Ref from '/src/components/chap6/ParentComponent.vue'
</script>

<template>
  <main>
    <h3>章7　ルーティング</h3>
    <nav>
        <RouterLink to="/chap4/ref">リアクティビティー ref()</RouterLink>
        <RouterLink to="/chap4/reactive">リアクティビティー reactive()</RouterLink>
        <RouterLink to="/chap4/event">イベント処理</RouterLink>
        <RouterLink to="/chap4/computed">算出プロパティ</RouterLink>
        <RouterLink to="/chap4/watch">監視プロパティ</RouterLink>
        <RouterLink to="/chap4/insert_employee">ハンズオン4-1</RouterLink>
        <RouterLink to="/chap4/insert_employee">ハンズオン4-1　解答</RouterLink>
      </nav>
      <RouterView />
  </main>
</template>
