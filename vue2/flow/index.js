/*@flow*/

function split(str){
    return str.split(' ')
}

// split(11)
split('1 1 1')

function add(x:number,y:number){
    return x+y
}

add(11,11)

var arr:Array<number> = [1,2,3]
// arr.push('hello')
arr.push(11)

class Bar{
    x:string;
    y:string | number | void;
    z:boolean;

    constructor(x:string,y:string | number | void){
        this.x = x;
        this.y = y;
        this.z = false;
    }
}

var bar : Bar = new Bar('hello')

var obj : {a:string,b:number,c:Array<string>,d:Bar} = {
    a:'Hello',
    b:11,
    c:['hello','world'],
    d: new Bar('hello',3)
}

//foo可以为null也可以为字符串
var foo : ?string = null

