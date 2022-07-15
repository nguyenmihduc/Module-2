export class Node<T> {
    name: string;
    score: number;

    next: Node<T>| null = null;

    constructor(name: string,
                score: number) {
        this.name = name;
        this.score = score;
    }
    getInfo():object {
        return { name: this.name, score: this.score };
    }
    getScore(): number {
        return this.score;
    }
    getName(): string {
        return this.name;
    }
}