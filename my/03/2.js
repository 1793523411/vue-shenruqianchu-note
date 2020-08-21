const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

;[
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]
.forEach(function(method){
    const original = arrayProto[method]
    Object.defineProperty(arrayMethods,method,{
        value: function mutator(...agrs){
            return original.apply(this,agrs)
        },
        enumerable:false,
        writable:true,
        configurable:true
    })
})