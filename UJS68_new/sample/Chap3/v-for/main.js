const {createApp,ref} = Vue
  
createApp({
  setup() {
    const weekList = ref(['月','火','水','木','金'])
    return {
      weekList
    }
  }
}).mount('#app')
