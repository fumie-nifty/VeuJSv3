<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Question.vue --> 

<script setup>
  import { ref } from 'vue'

  // アンケート入力データを保持する変数の定義
  const question = ref({
    productName: '', // 商品名
    level: '', // 満足度
    free: '' // 自由記述欄
  })

  // 文字を赤くするクラス名
  const redColor = ref('red')

</script>

<template>
  <!--入力領域-->
  <div class="input_output_frame">
    <!--設問１-->
    <p>１：購入した商品を選択してください</p>
    <select v-model="question.productName">
      <option>ハイカットスニーカー</option>
      <option>ローカットスニーカー</option>
      <option>サンダル</option>
    </select>
    <!--設問２-->
    <p>２：購入した商品の満足度を教えてください</p>
    <label><input type="radio" v-model="question.level" value="満足">満足</label>
    <label><input type="radio" v-model="question.level" value="普通">普通</label>
    <label><input type="radio" v-model="question.level" value="不満">不満</label>
    <!--設問３-->
    <p>３：上記２の理由をご記入ください</p>
    <textarea cols="30" rows="10" 
              v-model.lazy="question.free" 
              placeholder="自由記述">
    </textarea>
  </div>

  <!--出力領域-->
  <div class="input_output_frame">
    <p>入力した情報は以下のとおりです</p>
    <p>商品名：{{ question.productName }}</p>
    <p>満足度：{{ question.level }}</p>
    <p v-bind:class="redColor">自由記述欄：</p>
    <p>{{ question.free }}</p>
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