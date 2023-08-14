const app = new Vue({

    el:'#app',
    data:{
        textIf:'if',
        textShow:'show',
        flag:true,
    },
    methods:{
        //表示制御
        change:function(){
            this.flag = !this.flag
        }
    }
})