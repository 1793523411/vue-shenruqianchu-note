// function defineReactive(data,key,val){
//     let dep = []
//     Object.defineProperty(data,key,{
//         enumerable:true,
//         configurable:true,
//         get: function(){
//             dep.push(window.target)
//             return val
//         },
//         set: function(newVal){
//             if(val === newVal){
//                 return
//             }
//             for(let i = 0;i<dep.length;i++){
//                 dep[i](newVal,val)
//             }
//             val = newVal
//         }
//     })
// }

export default class Dep {
    constructor(){
        this.subs = []
    }

    addSub(sub){
        this.subs.push(sub)
    }

    removeSub(sub){
        remove(this.subs,sub)
    }

    depend(){
        if(window.target){
            this.addSub(window.target)
        }
    }

    notify(){
        //slice() 方法可从已有的数组中返回选定的元素
        const subs = this.subs.slice()
        for(let i = 0,l = subs.length; i< l; i++){
            subs[i].update()
        }
    }
}

function remove(arr, item){
    if(arr.length){
        const index = arr.indexOf(item)
        if(index > -1){
            return arr.splice(index, 1)
        }
    }
}

function defineReactive(data,key,val){
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get: function(){
            // dep.push(window.target)
            dep.depend()
            return val
        },
        set: function(newVal){
            if(val === newVal){
                return
            }
            // for(let i = 0;i<dep.length;i++){
            //     dep[i](newVal,val)
            // }
            val = newVal
            dep.notify()
        }
    })
}