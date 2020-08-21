import {arrayMethods} from './array'

const hasProto = '__proto__' in {}
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

export class Observer {
    constructor(value){
        this.value = value
        if(Array.isArray(value)){
            const argument = hasProto?protoAugument:copyAugment
            argument(value,arrayMethods,arrayKeys)
        }else{
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

function protoAugument(target,src,keys){
    target.__proto__ = src
}

function copyAugment(target,src,keys){
    for(let i = 0,l = keys.length;i<l;i++){
        const key = keys[i]
        def(target,key,src[key])
    }
}