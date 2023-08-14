<template>
  <div>
    <h2>検索したい従業員番号を入力してください</h2>
    <SearchMember/>
  </div>
</template>

<script>
import SearchMember from '@/components/SearchMember.vue'
export default {
  name:'Search',
  components: {
    SearchMember
  }
}
</script>