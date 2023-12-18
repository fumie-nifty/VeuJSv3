<template>
  <div>
    <h2>InsertMemberのコンポーネント呼び出し</h2>
    <InsertMember/>
  </div>
</template>

<script>
// @ is an alias to /src

import InsertMember from '@/components/InsertMember.vue'

export default {
  name: 'About',
  components: {
    InsertMember
  }
}
</script>