class Stack<T>{
    container:T[]=[];
    constructor() {
    }
    push(data:T){
        this.container.push(data);
    }pop():T{
        return  this.container.pop();
    }size():number{
        return  this.container.length
    }


}


let stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);

console.log(stack.pop())