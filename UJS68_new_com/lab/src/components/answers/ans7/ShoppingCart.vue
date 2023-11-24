<script setup>
import { ref, reactive } from 'vue'

const searchFlag = ref(true)
const message = ref('')

</script>

<template>
  <div class="input_output_frame">
    <p>{{ message }}</p>
    <table v-show="searchFlag" align="center" border="1">
      <thead>
        <tr align="center">
          <th width="80">商品ID</th>
          <th width="200px">商品名</th>
          <th width="70px">価格</th>
          <th width="50px">数量</th>
          <th width="70px">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  margin: auto;
}
</style>