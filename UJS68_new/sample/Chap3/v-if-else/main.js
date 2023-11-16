const {createApp,ref} = Vue
  
createApp({
  setup() {
    const type = ref('B')
    return {
      type
    }
  }
}).mount('#app')
