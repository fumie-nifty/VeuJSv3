<!-- All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited --> 
<!-- ReceiveParamView.vue -->
<!-- サブメニュー画面 → 送信画面 →【パラメータ受信画面】 -->

<script setup>
  import { defineProps } from 'vue'

  //definePropsらpropsを受取る
  const props = defineProps(['id']) 
</script>

<template>
  <main>
    <h4>■パラメータ受信画面■</h4>
    <p>パラメータ値：{{ props.id }}</p>
  </main>
</template>
