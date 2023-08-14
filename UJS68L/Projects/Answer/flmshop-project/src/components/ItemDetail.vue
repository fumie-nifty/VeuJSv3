<template>
  <div>
    <h2>商品詳細画面</h2>
      <img v-bind:src="'../'+$store.state.shoesData.Img">
      <p> {{ $store.state.shoesData.ProductName }}  </p>
      <p> {{ $store.state.shoesData.ProducCode }} </p>
      <P> {{ $store.state.shoesData.Price }}円 </P>
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

