<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Question.vue --> 

<script setup>
  import { ref } from 'vue'

  // アンケート入力データを保持する変数の定義
  // ★実装1★
  
  // 商品名
  // 満足度
  // 自由記述欄
 

  // 文字を赤くするクラス名
  const redColor = ref('red')

</script>

<template>
  <!--入力領域-->
  <div class="input_output_frame">
    <p>１：購入した商品を選択してください</p>
    <!--★実装2★-->
    <select>
      <option>ハイカットスニーカー</option>
      <option>ローカットスニーカー</option>
      <option>サンダル</option>
    </select>
    <p>２：購入した商品の満足度を教えてください</p>
    <!--★実装2★-->
    <label><input type="radio" value="満足">満足</label>
    <label><input type="radio" value="普通">普通</label>
    <label><input type="radio" value="不満">不満</label>
    <p>３：上記２の理由をご記入ください</p>
    <!--★実装2-->
    <textarea cols="30" rows="10" 
              placeholder="自由記述">
    </textarea>
  </div>

  <!--出力領域-->
  <div class="input_output_frame">
    <p>入力した情報は以下のとおりです</p>
    <!--★実装3★-->
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