const app = new Vue({

  el:'#app',
  data:{
     name:'', //名前
     age:'',　//年齢
     type:'', //血液型
     show:false //表示フラグ
  },
  methods:{
    //表示制御
    showResult:function(){
      this.show = true
    }
  }
})
