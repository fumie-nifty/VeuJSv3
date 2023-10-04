const app = new Vue({

  el:'#app',
  data:{
     name:'',
     age:'',
     type:'',
     show:false
  },
  methods:{
    showResult:function(){
      this.show = true
    }
  }
})
