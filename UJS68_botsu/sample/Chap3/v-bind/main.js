const {createApp,ref} = Vue
  
createApp({
  setup() {
    const title = ref('Vue.jsによるSPA開発')
    const url = ref('https://www.knowledgewing.com/kw/')
    return {
      title,
      url
    }
  }
}).mount('#app')