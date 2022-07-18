// export class ClassNode<T> {
//     data: T;
//     next: ClassNode<T> | null = null;
//     previous: ClassNode<T> |  null = null;
//
//     constructor(data: T) {
//         this.data = data;
//     }
// }

export class DoublyLinkedList {
    nodes: any[] = [];
    size(): number {
        return this.nodes.length;
    }
    head() {
        return this.size ? this.nodes[0] : null;
    }
    tail() {
        return this.size ? this.nodes[this.size() -1] : null;
    }
    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null
        const nextNode = this.nodes[index] || null;
        const node = {value, next: nextNode, previous: previousNode};
        if (previousNode) {
            previousNode.next = node;
        }
        if (nextNode) {
            nextNode.previous = node;
        }
        this.nodes.splice(index, 0, node);
    }
    insertFirst(value) {
        this.insertAt(0, value)
    }
    insertLast(value) {
        this.insertAt(this.size(), value);
    }
    getAt(index) {
        return this.nodes[index]
    }
    removeAt(index) {
        const previousNode = this.nodes[index -1] || null;
        const nextNode = this.nodes[index + 1] || null;
        if (previousNode) {
            previousNode.next = nextNode;
        }
    }
}