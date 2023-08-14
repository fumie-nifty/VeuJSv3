<template>
  <div>
    <h2>従業員一覧の表示</h2>
    <!-- Todo4 表示エリア -->
    <SearchTable/>
  </div>
</template>

<script>
// Todo4 SearchTable.vueをimport
import SearchTable from '@/components/SearchTable.vue'
export default {
  name:'Table',
  components: {
    SearchTable
  }
}
</script>