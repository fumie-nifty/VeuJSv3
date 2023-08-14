<template>
  <div>
    <h1>商品登録機能</h1>
    <InsertItem/>
  </div>
</template>

<script>
import InsertItem from '@/components/InsertItem.vue'

export default {
  name: 'Insert',
  components: {
    InsertItem
  }
}
</script>