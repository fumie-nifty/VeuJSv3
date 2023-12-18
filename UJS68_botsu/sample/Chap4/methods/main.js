const { createApp, reactive,ref } = Vue

createApp({
  setup() {
    const data = reactive({
      first: '', //名字
      last: '', //名前
      count: 1 //カウントアップ用
    })
    const showFlag = ref(false) 

    const clickFlag = () => {
      showFlag.value = true
    }

    const clickEvent = (event) => {
      alert(event.target.tagName)
    }

    const sayHello = (value) => {
      alert(value)
    }

    const countUp = () => {
      data.count++
    }

    return {
      data,
      showFlag,
      clickFlag,
      clickEvent,
      sayHello,
      countUp
    }
  }
}).mount('#app')
