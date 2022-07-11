export class Stack<T> {
    private elements: T[] = [];
    private size: number
    constructor(elements: T[], size:number) {
        this.elements = elements
        this.size = size;
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!')
        } else {
            this.elements.push(element)
        }
    }
    pop(): T {
        if (this.elements.length === 0) {
            throw  new Error('the stack is empty')
        }
        return this.elements.pop()
    }
}



