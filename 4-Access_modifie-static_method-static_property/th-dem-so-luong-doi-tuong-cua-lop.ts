class Cars {
    private tradeMark: string;
    private color: string;
    static count: number = 0;
    constructor(tradeMark: string, color: string) {
        this.tradeMark = tradeMark;
        this.color = color;
        Cars.count++
    }
}
 let car1 = new Cars("BMW", "red");
let car2 = new Cars("MEC", "black");
console.log(Cars.count)

let car3 = new Cars("TOY", "white");
console.log(Cars.count)

// th-dem-so-luong-doi-tuong-cua-lop.ts