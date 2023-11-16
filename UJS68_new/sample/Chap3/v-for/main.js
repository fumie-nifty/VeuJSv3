const app = new Vue({

  el:'#app',
  data:{
    lists:['月','火','水','木','金']
  }
})

const {createApp,ref} = Vue
  
createApp({
  setup() {
    const weekList = ref(['月','火','水','木','金'])
    return {
      weekList
    }
  }
}).mount('#app')
