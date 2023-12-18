const {createApp,ref} = Vue
  
createApp({
  setup() {
    return {
      //以下に記述
      text:ref('')
    }
  }
}).mount('#app')

