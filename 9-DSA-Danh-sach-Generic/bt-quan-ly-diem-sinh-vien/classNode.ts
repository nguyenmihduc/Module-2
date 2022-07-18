
export class Node<T> {
    name: T;
    score: number;
    next: Node<T> | null = null

    constructor(name: T, score: number) {
        this.name = name;
        this.score = score;
    }
    readData() {
        return {
            name: this.name,
            score: this.score
        }
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name
    }
}
