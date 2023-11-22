<script setup>
  import { ref } from 'vue'
  //import imgurl from '@/assets/images/SH1006.gif'

  const textDisabled = ref(true)
  const imgAtr = ref({
    alt: 'SH1006',
    title: 'ハイカットスニーカーFLM_RD',
    src: '/images/SH1006.gif'
  })
  const liColor = ref('black')
  const p1flag = ref(true)
  const p2flag = ref(false)
  const className = ref('red');
</script>

<template>
  <h2>■属性値を省略できる属性</h2>
  <div class="colum">
    <p>v-bind:disabled：
      <input type="text" v-bind:disabled="textDisabled">
    </p>
    <!--レンダリング結果：<input type="text" disabled">-->
  </div>
  <h2>■複数の属性</h2>
  <div class="colum">
    <img v-bind="imgAtr" />
    <!--レンダリング結果：<img alt="SH1006" title="ハイカットスニーカーFLM_RD" src="/images/SH1006.gif">-->
  </div>
  <h2>■style属性</h2>
  <div class="colum">
    <ul class="red">
      <li v-bind:style="{ color: liColor }">文章１</li>
      <!--レンダリング結果：<li style="color: black;">文章１</li>-->
      <li>文章２</li>
      <li>文章３</li>
    </ul>
  </div>
  <h2>■class属性</h2>
  <div class="colum">
    <ul>
      <li v-bind:class="{ red: p1flag }">文章１</li>
      <li v-bind:class="{ red: p2flag }">文章２</li>
      <li v-bind:class="className">文章３</li>
    </ul>
  </div>
</template>

<style scoped>
.red {
  color: red;
}

h2 {
  font-size: 12pt;
  margin-top: 15px;
  background-color: rgb(220, 253, 253);
}

.colum {
  margin-left: 10px;
}
</style>
