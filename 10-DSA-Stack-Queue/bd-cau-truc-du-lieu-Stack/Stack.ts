interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek()
    size(): number;
}

export class Stack<T> implements IStack<T>  {
    private storage: T[] = []
    private readonly capacity: number
    constructor(capacity) {
        this.capacity = capacity
    }
    peek() {
        console.log(this.storage[this.size()-1])
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    push(item: T): void {
        if (this.size() === this.capacity)  {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item)
    }

    size(): number {
        return this.storage.length;
    }
    showStorage() {
        console.log(this.storage)
    }
}