
export class Student {
    name: string;
    score: number;

    constructor(name: string, score?: number) {
        this.name = name;
        this.score = score;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getScore(): number {
        return this.score;
    }

    setScore(value: number) {
        this.score = value;
    }
}