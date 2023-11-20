const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message = ref('Hello Vue!!')
    const flag = ref(ture)
    return {
      message,
      flag
    }
  }
}).mount('#app')
