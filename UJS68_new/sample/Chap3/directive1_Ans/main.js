const {createApp,ref} = Vue
  
createApp({
  setup() {
    const flag = ref(true)
    const employeeList = ref([
      {
        "id": 922101,
        "name": "千野 陽平"
      },
      {
        "id": 922102,
        "name": "結城 由加志"
      },
      {
        "id": 922103,
        "name": "高橋 直子"
      },
      {
        "id": 922104,
        "name": "吉田 真由"
      }
    ])
    
    return {
      flag,
      employeeList
    }
  }
}).mount('#app')

