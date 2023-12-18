<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- IfShow.vue --> 

<script setup>
  import { ref } from 'vue'

  // メッセージ
  const message = ref('Hello Vue!!')
  // 表示フラグ
  const showFlag = ref(false)
</script>

<template>
  <p class="red">
    ブラウザーの開発ツールを表示し「Elements」タブで要素の構造を確認します。
  </p>
  <p v-if="showFlag">v-if: {{ message }} </p>
  <p v-show="showFlag">v-show: {{ message }} </p>
</template>

<style scoped>
  p {
    margin-left: 15px;
  }
  .red {
    color: red;
  }

</style>

