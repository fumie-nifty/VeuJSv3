<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- Question.vue --> 

<script setup>
  import { ref } from 'vue'

  // Result.vueのインポート
  // ★実装1★
	import Result from '@/components/answers/ans6/Result.vue'

  // アンケート入力データを保持する変数の定義
  const question = ref({
    productName: '', // 商品名
    level: '', // 満足度
    free: '' // 自由記述欄
  })

</script>

<template>
  <!--入力領域-->
  <div class="input_output_frame">
    <p>１：購入した商品を選択してください</p>
    <select v-model="question.productName">
      <option>ハイカットスニーカー</option>
      <option>ローカットスニーカー</option>
      <option>サンダル</option>
    </select>
    <p>２：購入した商品の満足度を教えてください</p>
    <label><input type="radio" v-model="question.level" value="満足">満足</label>
    <label><input type="radio" v-model="question.level" value="普通">普通</label>
    <label><input type="radio" v-model="question.level" value="不満">不満</label>
    <p>３：上記２の理由をご記入ください</p>
    <textarea cols="30" rows="10" 
              v-model.lazy="question.free" 
              placeholder="自由記述">
    </textarea>
  </div>

  <!--Resultコンポーネント呼出し-->
  <!--★実装3★-->
  <Result v-bind:question="question"/>

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