const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message = ref('')
    return {
      message
    }
  }
}).mount('#app')
