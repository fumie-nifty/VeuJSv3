<template>
  <div>
    <h2>TestMemberのコンポーネント呼び出し</h2>
    <TestMember/>
    <h2>InsertMemberのコンポーネント呼び出し</h2>
    <InsertMember/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestMember from '@/components/TestMember.vue'
import InsertMember from '@/components/InsertMember.vue'

export default {
  name: 'About',
  components: {
    InsertMember,
    TestMember
  }
}
</script>