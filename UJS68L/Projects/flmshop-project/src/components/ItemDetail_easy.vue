<template>
  <div>
    <h2>商品詳細画面</h2>
      <!-- $store.state.shoesDataを使用して各データを出力 -->
      <img v-bind:src="'../'+$store.state">
      <p> {{  }}  </p>
      <p> {{  }} </p>
      <P> {{  }}円 </P>
      <!-- v-on:clickを使用してreturnPage()を呼び出す -->
      <button v-on:click="returnPage()">Back</button>
  </div>
</template>

<script>
export default {
    methods:{
        returnPage:function(){
           this.$router.push("/shopitem"); //URL遷移
        }
    }
}
</script>

