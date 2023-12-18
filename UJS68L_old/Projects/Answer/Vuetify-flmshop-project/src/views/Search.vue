<template>
  <div>
    <h1>商品検索</h1>
    <SearchItem/>
  </div>
</template>

<script>
import SearchItem from '@/components/SearchItem.vue'

export default {
  name: 'Search',
  components: {
    SearchItem
  }
}
</script>