const {createApp,ref} = Vue
  
createApp({
  setup() {
    const message1 = ref('Hello Vue true')
    const message2 = ref('Hello Vue false')
    const flag = ref(false)
    return {
      message1,
      message2,
      flag
    }
  }
}).mount('#app')
