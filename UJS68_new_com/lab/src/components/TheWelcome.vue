<script setup>

</script>

<template>
  <div class="home">
    <h1>
      Vue.js によるSPA(シングルページアプリケーション)開発
    </h1>
    <h2>実習問題＆解答例</h2>
    <div class="copy_right">All Rights Reserved, Copyright © 株式会社富士通ラーニングメディア</div>
  </div>
</template>

<style scoped>
.home{
  position: relative;
	width: 100%;
	height: 400px;
}
.home h1{
  text-align: center;
  margin-top: 100px;
}

.home h2{
  text-align: center;
  margin-top: 50px;
}
.home .copy_right{
  font-size: 10px;
  position: absolute;
  bottom: 0;
	left: 50%;
	transform: translateX(-50%);  
}
</style>