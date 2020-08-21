const { Observer } = require("./3");
const { default: Dep } = require("../02/4");

function defineReactive(data,key,val){
    if(typeof val === 'object') new Observer(val)
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            dep.depend()
            //收集数组的依赖
            return val
        },
        set: function(newVal){
            if(val === newVal){
                return
            }
            dep.notify()
            val = newVal
        }
    })
}