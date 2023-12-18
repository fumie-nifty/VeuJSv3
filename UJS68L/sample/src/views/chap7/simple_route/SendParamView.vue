<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- SendParamView.vue -->
<!-- サブメニュー画面 →【パラメータ送信画面】→ パラメータ受信画面 -->

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

//入力値用
const inputId = ref(0);
</script>

<template>
  <main>
    <h4>■パラメータ送信画面■</h4>
    <input type="number" v-model="inputId" /><br>
    <!--入力された値をパスパラメータに設定しコンポーネント呼び出し-->
    <RouterLink :to="{ name: 'receiveParam', params: { id: inputId } }" class="button">
      コンポーネント切替
    </RouterLink>
  </main>
</template>



<style scoped>
  .red {
    color: red;
  }

  .button {
    display: block;
    width: 150px;
    padding: 5px 0;
    margin-top: 15px;
    background: rgba(39, 204, 149, 0.651);
    color: #FFF;
    text-decoration: none;
    text-align: center;
  }

  .button:hover {
    background: rgba(39, 204, 149, 0.938);
  }
</style>