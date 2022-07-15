export class Stack<T> {
    container: T[] = []
    constructor() {
    }
    push(item: T) {
        this.container.push(item)
    }
    pop(): T | undefined {
        return this.container.pop()
    }
    size(): number {
        return this.container.length
    }
}