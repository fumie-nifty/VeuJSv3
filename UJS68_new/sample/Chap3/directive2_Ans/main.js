const {createApp,ref} = Vue
  
createApp({
  setup() {
    const employee=ref({
      name:'', //名前
      age:'',　//年齢
      type:'', //血液型
     }) 
     
    const show = ref(false)

    const showResult = ()=>{
      show.value = true
    }

    return {
      employee,
      show,
      showResult
    }
  }
}).mount('#app')

