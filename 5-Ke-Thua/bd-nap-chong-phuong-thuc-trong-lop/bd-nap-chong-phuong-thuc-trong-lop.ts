class A
{
    foo(s: string, b: number): string;
    foo(n: number): string;
    foo(arg: any): any
    {
    if (typeof arg === "string") {
        return console.log(arg.length);
    }
    if (typeof arg === "number") {
        return console.log(arg.toString())
    }
    }
    display(x:number, y:number) : number//Compiler Error: Duplicate function implementation


    display(x:string): string //Compiler Error: Duplicate function implementation

display() : any {

}
}
// let obj = new A()
// obj.foo(15)
// obj.foo("hello", 6)

