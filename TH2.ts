class Queue<T>{
    container:T[]=[];
    constructor() {
    }

    enqueue(data:T):void{
        this.container.push(data);

    }dequeue():T{
         return  this.container.shift();
    }

    size():number{
       return  this.container.length
    }
}


let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue()) // 1