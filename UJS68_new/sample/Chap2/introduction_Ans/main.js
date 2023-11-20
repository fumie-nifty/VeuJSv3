const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message = ref('Hello Vue!!')
    const name = ref('kuga')
    return {
      message,
      name
    }
  }
}).mount('#app')
