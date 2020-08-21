// vm.$watch('a.b.c',function(newVal,oldVal){

// })

//将自己添加到data.a.b.c的Dep中去
export default class Watcher{
    constructor (vm, expOrFn,cb){
        this.vm = vm
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.getter()
    }

    get(){
        //指向自己，添加自己
        window.target = this
        let value = this.getter.call(this.vm,this.vm)
        window.target = undefined
        return value
    }

    updated() {
            const oldValue = this.value
            this.value = this.get()
            this.cb.call(this.vm, this.value, oldValue)
        
    }
}

//关于parsePath读取一个字符串的keypath

const bailRE = /[^\w.$]/
export function parsePath(path){
    if(bailRE.text(path)){
        return
    }
    const seguments = path.split('.')
    return function(obj) {
        for(let i = 0 ; i< seguments.length; i++){
            if(!obj) return
            obj = obj[seguments[i]]
        }
        return obj
    }
}