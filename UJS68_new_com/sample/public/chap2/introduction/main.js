const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message = ref('Hello Vue!!')
    const name = ref('富士通　太郎')
    return {
      message,
      name
    }
  }
}).mount('#app')
