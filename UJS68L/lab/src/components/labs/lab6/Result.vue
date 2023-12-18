<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Question.vue --> 

<script setup>
  // vueからdefinePropsを受取る
  import { ref, defineProps } from 'vue'

  // ★実装4★
  // definePropsらpropsを受取る


  // 文字を赤くするクラス名
  const redColor = ref('red')

</script>

<template>
  <div class="input_output_frame">
    <p>入力した情報は以下のとおりです</p>
    <!--★実装5★-->
    <p>商品名：</p>
    <p>満足度：</p>
    <p v-bind:class="redColor">自由記述欄：</p>
    <p></p>
  </div>
</template>

<style scoped>
.red {
  color: red;
  font-size: large;
}

.input_output_frame {
  margin-bottom: 15px;
}
</style>