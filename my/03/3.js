import { arrayMethods } from "./2"

export class Observer{
    constructor(value){
        this.value = value
        if(Array.isArray(value)){
            value.__proto__ = arrayMethods
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