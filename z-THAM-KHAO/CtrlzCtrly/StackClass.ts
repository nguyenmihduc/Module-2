export class Stack{
    container : any = [];
    constructor(){

    }

    push(data :any) : void {
        this.container.push(data);
    }
    pop() : any {
       return this.container.pop();
    }
}