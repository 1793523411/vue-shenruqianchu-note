var vm = new Vue({
    el:'#el',
    template: '#demo-template',
    methods: {
        actions(){
            //无法监听到
            this.obj.name = 'berwin'
            delete this.obj.name
        }
    },
    data: {
        obj:{}
    }
})