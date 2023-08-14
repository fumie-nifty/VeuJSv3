<template>
  <v-app>
    <h2 class="title">商品詳細画面</h2>
    <v-card width="200px" class="mx-auto mt-5">
      <img v-bind:src="'../'+$store.state.shoesData.Img">
      <p> {{ $store.state.shoesData.ProductName }} </p>
      <p> {{ $store.state.shoesData.ProducCode }} </p>
      <P> {{ $store.state.shoesData.Price }}円 </P>
      <v-main>
        <v-btn class="ma-2" color="orange darken-2" dark v-on:click="returnPage()">
          <v-icon dark left>mdi-arrow-left</v-icon>Back
        </v-btn>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    methods: {
      returnPage: function () {
        this.$router.push("/shopitem") //URL遷移
      }
    }
  }
</script>