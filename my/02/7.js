import Dep from "./4"

export class Observer{
    constructor(value){
        this.value = value
        if(!Array.isArray(value)){
            this.walk(value)
        }
    }

    walk(obj){
        const keys = Object.keys(obj)
        for(let i = 0; i< keys.length; i++){
            definedReactive(obj, keys[i], obj[keys[i]])
        }
    }

}
function definedReactive(data,key, val) {
    if(typeof val === 'object'){
        new Observer(val)
    }
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get: function(){
            dep.depend()
            return val
        },
        set: function(newVal){
            if(val === newVal){
                return
            }
            val = newVal
            dep.notify()
        }
    })
}