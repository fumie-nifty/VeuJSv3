const app = new Vue({
    el:'#app',
    data:{
        name:'',
        lists:[]
    },
    methods: {
        insertMember:function(){
           if(this.name !==''){
            this.lists.push(this.name)
            this.name=''
           }
        }
    }
})

