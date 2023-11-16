const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message = ref('Hello Vue!!')
    const flag = ref(false)
    return {
      message,
      flag
    }
  }
}).mount('#app')
