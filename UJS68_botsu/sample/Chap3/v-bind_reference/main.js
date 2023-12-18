const {createApp,ref} = Vue
  
createApp({
  setup() {
    const textDisabled = ref(true)
    const imgAtr = ref({
      alt:'SH1006',
      title:'ハイカットスニーカーFLM_RD',
      src:'../../images/SH1006.gif'
    })
    const liColor =ref('black')
    const p1flag = ref(true)
    const p2flag = ref(false)
    const className = ref('red');

    return {
      textDisabled,
      imgAtr,
      liColor,
      p1flag,
      p2flag,
      className
    }
  }
}).mount('#app')
