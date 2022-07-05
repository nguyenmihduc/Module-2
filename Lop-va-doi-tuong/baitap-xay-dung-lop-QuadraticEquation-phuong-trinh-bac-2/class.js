class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c =c;
        this.delta = Math.pow(this.b,2) - 4 * (this.a * this.c)
    }
    getter_a() {
        return this.a;
    }
    getter_b() {
        return this.b;
    }
    getter_c() {
        return this.c;
    }
    getDiscriminant() {
        return this.delta;
    }
    getRoot() {
        return (-this.b)/(2 * this.a);
    }
    getRoot1() {
        return ((-this.b) + Math.sqrt(this.delta))/(2 * this.a);
    }
    getRoot2() {
        return ((-this.b) - Math.sqrt(this.delta))/(2 * this.a);
    }
    check() {
        if (this.delta === 0) {
            return this.getRoot()
        } else if (this.delta > 0) {
            return " nghiem 1: " + this.getRoot1() + " nghiem 2: " + this.getRoot2()
        } else {
            return "phuong trinh vo nghiem"
        }
    }
}

let phuongtrinh1 = new QuadraticEquation(2,3,1)
console.log(phuongtrinh1.check())