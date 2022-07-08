function add(a: string, b: number): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a+b
}
console.log("xin chao" + add("hello", 10))
console.log("xin chao: " + add(10,15))